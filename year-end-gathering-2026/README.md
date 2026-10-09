# 2026 연말 모임 RSVP

- 행사일: 2026-12-19 (토)
- 주최자: 이형주
- 응답 마감: 2026-12-05 23:59 (KST)
- 화면: 반응형 크리스마스 테마, 이름 검증, 참석/불참 전환, 불참 사유 선택 입력
- 데이터: Supabase RPC 중앙 저장 (설정 전에는 제출되지 않음)
- 주최자 응답 조회: Supabase Auth + 관리자 UUID 허용 목록 + CSV 내보내기

## Supabase 설정

1. Supabase에서 새 프로젝트를 만든다.
2. SQL Editor에서 `supabase/schema.sql` 전체를 실행한다.
3. Project Settings → API에서 Project URL과 anon/publishable key를 복사한다.
4. `config.js`의 `supabaseUrl`, `supabaseAnonKey`를 채운다. **service_role/secret key는 절대 넣지 않는다.**
5. Supabase Authentication에서 주최자용 계정을 생성한다. Email provider를 활성화하고 이메일 확인 설정을 검토한다.
6. Authentication → Users에서 주최자 계정 UUID를 복사한 뒤 SQL Editor에서 실행한다:
   `insert into public.rsvp_admins(user_id) values ('주최자-UUID');`
7. Authentication → URL Configuration에 실제 배포 URL을 Site URL 및 허용 Redirect URLs로 등록한다. 관리자 로그인 링크는 `admin.html`로 돌아온다.

## 배포

정적 사이트라 빌드 명령이 필요 없다. `index.html`, `app.js`, `config.js`, `admin.html`, `supabase/schema.sql`을 함께 배포한다.

- **GitHub Pages**: 저장소 Settings → Pages에서 main 브랜치와 root를 선택한다. 이 프로젝트가 저장소 하위 폴더에 있으므로 주소는 `https://jeongsunghan.github.io/year-end-gathering-2026/` 형태다. Pages가 켜져 있는지 확인해야 한다.
- **Vercel**: 저장소를 Import하고 Framework Preset을 Other, Build Command를 비우고 Output Directory를 `.`로 설정한다. 현재 연결된 Vercel 계정에서는 프로젝트 생성이 403 권한 오류로 막혀 있어, 권한을 해결한 뒤 Import/배포가 필요하다.

## 테스트 체크리스트

- 설정 누락 / Supabase CDN 차단 / 오프라인 상태에서 오류 안내
- 이름: 빈 값, 1자, 영어, 숫자, 특수문자, 앞뒤 공백, 중복 공백, 20자 초과
- 참석 제출 / 불참 후 재고려 / 불참 사유 입력·생략 / 참석↔불참 변경
- 제출 중 연속 클릭, 12초 응답 시간 초과, 서버 오류
- 마감 이후 브라우저와 서버 양쪽에서 제출 거부
- 관리자 미로그인, 미등록 UUID, 로그인 링크, 목록 새로고침, CSV 한글
- 모바일 너비 및 reduced-motion 설정

## 보안 및 한계

- 브라우저에는 Supabase URL과 anon/publishable key만 둔다. service_role key를 공개하지 않는다.
- 응답 테이블은 RLS 활성화, 직접 접근 차단, 검증된 RPC만 공개한다. 응답 목록은 등록된 관리자 계정만 조회한다.
- 이름은 로그인 인증이 아니므로 다른 사람이 같은 이름으로 응답을 덮어쓸 수 있다. 친구 모임용 간단 RSVP로 사용하고 민감한 정보를 입력하지 않는다.
- Kakao 로그인은 Kakao Developers 앱 키와 도메인/Redirect 설정이 있어야 연결할 수 있어 아직 활성화하지 않았다.
- 장소와 시간은 미정이므로 확정 전까지 placeholder를 유지한다.
- 응답 서버는 Supabase 프로젝트 및 공개 anon key 설정이 끝나야 실제 데이터를 저장한다. 설정 전에는 성공으로 표시하지 않는다.
