(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const screens = [...document.querySelectorAll(".screen")];
  const submitButtons = ["yes", "maybe", "submitNo", "skipReason"].map($).filter(Boolean);
  const cutoff = new Date("2026-12-04T15:00:00.000Z"); // 2026-12-05 00:00 KST
  let personName = "";
  let busy = false;
  let client = null;

  function show(id) {
    screens.forEach((screen) => screen.classList.toggle("active", screen.id === id));
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }
  function setStatus(message, type = "") {
    const el = $("connectionStatus");
    if (!el) return;
    el.textContent = message;
    el.className = "status" + (type ? " " + type : "");
  }
  function setError(id, message) {
    const el = $(id);
    if (el) el.textContent = message || "";
  }
  function setBusy(value) {
    busy = value;
    submitButtons.forEach((button) => {
      button.disabled = value;
      if (value) button.setAttribute("aria-busy", "true");
      else button.removeAttribute("aria-busy");
    });
  }
  function normalizeName(value) {
    return String(value || "").trim().replace(/\s+/g, " ");
  }
  function validName(value) {
    return /^[가-힣]+(?: [가-힣]+)*$/.test(value) && value.replace(/ /g, "").length >= 2 && value.length <= 20;
  }
  function friendlyError(error) {
    const message = String(error?.message || error || "");
    if (/INVALID_NAME/i.test(message)) return "이름을 다시 확인해줘. 한글 2~20자만 입력할 수 있어.";
    if (/RSVP_CLOSED/i.test(message)) return "응답 마감 시간이 지났어. 주최자 이형주에게 개인톡으로 문의해줘.";
    if (/NOT_AUTHORIZED|42501/i.test(message)) return "관리자 권한이 없어. 주최자 계정과 관리자 등록을 확인해줘.";
    if (/Failed to fetch|NetworkError|fetch/i.test(message)) return "서버에 연결하지 못했어. 인터넷 연결을 확인하고 잠시 후 다시 시도해줘.";
    if (/JWT|token|session/i.test(message)) return "로그인 세션이 만료됐어. 다시 로그인해줘.";
    return "응답을 저장하지 못했어. 잠시 후 다시 시도해줘. 문제가 계속되면 주최자에게 알려줘.";
  }
  async function submit(status, reason = "") {
    if (busy) return false;
    if (!client) {
      setStatus("아직 응답 서버 설정이 완료되지 않았어. 주최자에게 설정 완료를 알려줘.", "bad");
      return false;
    }
    if (Date.now() >= cutoff.getTime()) {
      setStatus("응답 마감 시간이 지났어. 주최자 이형주에게 개인톡으로 문의해줘.", "bad");
      return false;
    }
    if (!validName(personName)) {
      setStatus("이름이 올바르지 않아. 처음 화면에서 이름을 다시 입력해줘.", "bad");
      show("entry");
      return false;
    }
    const cleanReason = status === "no" ? String(reason || "").trim().slice(0, 300) : "";
    setBusy(true);
    setStatus("응답을 안전하게 저장하고 있어…");
    try {
      const result = await Promise.race([
        client.rpc("submit_rsvp", { p_name: personName, p_status: status, p_reason: cleanReason }),
        new Promise((_, reject) => setTimeout(() => reject(new Error("REQUEST_TIMEOUT")), 12000))
      ]);
      if (result.error) throw result.error;
      if (!result.data || result.data.ok !== true) throw new Error("INVALID_SERVER_RESPONSE");
      setStatus("응답이 서버에 저장됐어.", "good");
      return true;
    } catch (error) {
      console.error("RSVP submission failed:", error);
      if (/REQUEST_TIMEOUT/i.test(String(error?.message || error))) {
        setStatus("응답 확인 시간이 초과됐어. 중복 제출을 막기 위해 결과를 단정할 수 없어. 잠시 후 다시 제출하거나 주최자에게 확인해줘.", "bad");
      } else {
        setStatus(friendlyError(error), "bad");
      }
      return false;
    } finally {
      setBusy(false);
    }
  }

  $("enter").addEventListener("click", () => {
    const input = $("name");
    const value = normalizeName(input.value);
    if (!validName(value)) {
      setError("nameError", "한글 이름을 2~20자로 입력해줘. 숫자·영어·특수문자는 사용할 수 없어.");
      input.focus();
      return;
    }
    personName = value;
    $("helloName").textContent = personName;
    setError("nameError", "");
    show("choice");
  });
  $("name").addEventListener("keydown", (event) => {
    if (event.key === "Enter") $("enter").click();
  });
  $("yes").addEventListener("click", async () => {
    if (await submit("yes")) {
      $("yesSummary").textContent = personName + "의 참석 의사를 서버에 저장했어.";
      show("yesPage");
    }
  });
  $("no").addEventListener("click", () => {
    if (!busy) { setError("reasonError", ""); show("noPage"); }
  });
  $("maybe").addEventListener("click", async () => {
    if (await submit("yes")) show("thanksPage");
  });
  $("stillNo").addEventListener("click", () => {
    if (!busy) show("reasonPage");
  });
  async function submitNo() {
    setError("reasonError", "");
    if (await submit("no", $("reason").value)) show("donePage");
  }
  $("submitNo").addEventListener("click", submitNo);
  $("skipReason").addEventListener("click", async () => {
    $("reason").value = "";
    await submitNo();
  });
  $("backChoice1").addEventListener("click", () => { if (!busy) show("choice"); });
  $("backChoice2").addEventListener("click", () => { if (!busy) show("choice"); });
  $("editReply").addEventListener("click", () => { if (!busy) show("choice"); });

  function makeSnow() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    for (let i = 0; i < 18; i++) {
      const flake = document.createElement("span");
      flake.className = "snow";
      flake.textContent = i % 3 === 0 ? "✳" : "❄";
      flake.setAttribute("aria-hidden", "true");
      flake.style.left = (Math.random() * 100) + "%";
      flake.style.fontSize = (9 + Math.random() * 12) + "px";
      flake.style.animationDuration = (9 + Math.random() * 13) + "s";
      flake.style.animationDelay = (-Math.random() * 18) + "s";
      document.body.appendChild(flake);
    }
  }

  function init() {
    if (Date.now() >= cutoff.getTime()) {
      setStatus("응답 마감이 지났어. 참석 문의는 주최자 이형주에게 개인톡으로 해줘.", "bad");
      submitButtons.forEach((button) => button.disabled = true);
    } else if (!window.RSVP_CONFIG?.supabaseUrl || !window.RSVP_CONFIG?.supabaseAnonKey) {
      setStatus("미리보기 모드: 서버 설정이 없어 응답이 저장되지 않아. 주최자가 config.js와 Supabase 설정을 완료해야 해.", "bad");
    } else if (!window.supabase?.createClient) {
      setStatus("응답 모듈을 불러오지 못했어. 네트워크 또는 CDN 연결을 확인해줘.", "bad");
    } else {
      try {
        client = window.supabase.createClient(window.RSVP_CONFIG.supabaseUrl, window.RSVP_CONFIG.supabaseAnonKey, {
          auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
          global: { headers: { "x-application-name": "year-end-gathering-2026" } }
        });
        setStatus("응답 서버 연결 설정 완료. 제출 후 서버 저장 여부를 확인해줄게.", "good");
      } catch (error) {
        console.error("RSVP initialization failed:", error);
        setStatus("응답 서버 설정을 읽지 못했어. config.js 값을 확인해줘.", "bad");
      }
    }
    makeSnow();
  }
  init();
})();