-- 2026 Year-end Gathering RSVP schema (run in Supabase SQL Editor)
-- Never expose the service_role key in browser code.
create table if not exists public.rsvps (
  name text primary key,
  status text not null check (status in ('yes','no')),
  reason text not null default '',
  updated_at timestamptz not null default now(),
  constraint rsvps_name_length check (char_length(replace(name, ' ', '')) between 2 and 20),
  constraint rsvps_reason_length check (char_length(reason) <= 300)
);

create table if not exists public.rsvp_admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);

alter table public.rsvps enable row level security;
alter table public.rsvp_admins enable row level security;
revoke all on public.rsvps from anon, authenticated;
revoke all on public.rsvp_admins from anon, authenticated;

-- Public submission is only through this validating RPC; direct table access stays blocked.
create or replace function public.submit_rsvp(p_name text, p_status text, p_reason text default '')
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  clean_name text := regexp_replace(trim(coalesce(p_name, '')), '\s+', ' ', 'g');
  clean_reason text := left(trim(coalesce(p_reason, '')), 300);
begin
  if clean_name !~ '^[가-힣]+( [가-힣]+)*$'
     or char_length(replace(clean_name, ' ', '')) < 2
     or char_length(clean_name) > 20 then
    raise exception 'INVALID_NAME' using errcode = '22023';
  end if;
  if p_status not in ('yes', 'no') then
    raise exception 'INVALID_STATUS' using errcode = '22023';
  end if;
  if p_status = 'yes' and clean_reason <> '' then
    clean_reason := '';
  end if;
  if now() >= timestamptz '2026-12-04 15:00:00+00' then
    raise exception 'RSVP_CLOSED' using errcode = 'P0001';
  end if;

  insert into public.rsvps(name, status, reason, updated_at)
  values (clean_name, p_status, clean_reason, now())
  on conflict (name) do update
    set status = excluded.status, reason = excluded.reason, updated_at = now();

  return jsonb_build_object('ok', true, 'name', clean_name, 'status', p_status);
end;
$$;

create or replace function public.admin_list_rsvps()
returns table(name text, status text, reason text, updated_at timestamptz)
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null or not exists (
    select 1 from public.rsvp_admins a where a.user_id = auth.uid()
  ) then
    raise exception 'NOT_AUTHORIZED' using errcode = '42501';
  end if;
  return query select r.name, r.status, r.reason, r.updated_at
    from public.rsvps r order by r.updated_at desc;
end;
$$;

revoke all on function public.submit_rsvp(text, text, text) from public;
grant execute on function public.submit_rsvp(text, text, text) to anon, authenticated;
revoke all on function public.admin_list_rsvps() from public, anon;
grant execute on function public.admin_list_rsvps() to authenticated;

-- After creating/signing up the organizer account in Supabase Auth, add its UUID:
-- insert into public.rsvp_admins(user_id) values ('PASTE_AUTH_USER_UUID_HERE');
