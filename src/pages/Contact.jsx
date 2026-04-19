import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaRegCopy,
  FaCheck,
} from "react-icons/fa";
import "../styles/Contact.css";

const items = [
  {
    key: "email",
    icon: <FaEnvelope />,
    label: "Email",
    value: "sh2683@naver.com",
    href: "mailto:sh2683@naver.com",
    copyable: true,
  },
  {
    key: "phone",
    icon: <FaPhone />,
    label: "Phone",
    value: "010-2407-4389",
    href: "tel:+821024074389",
    copyable: true,
  },
  {
    key: "github",
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/JeongSunghan",
    href: "https://github.com/JeongSunghan",
  },
  {
    key: "location",
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Seoul, Korea",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (key, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 1800);
    } catch (e) {
      // no-op
    }
  };

  return (
    <div className="contact-page">
      <motion.header
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow">03 — Contact</span>
        <h1>
          <span className="grad-text">함께 만들어 볼까요?</span>
        </h1>
        <p>
          새로운 프로젝트, 인턴십, 혹은 가볍게 개발 이야기를 나누고 싶으시다면
          언제든 연락 주세요. 보통 24시간 이내에 답장드립니다.
        </p>
      </motion.header>

      <motion.div
        className="contact-grid"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      >
        {items.map((it) => (
          <motion.div
            key={it.key}
            className="contact-card"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <div className="contact-card__icon">{it.icon}</div>
            <div className="contact-card__label">{it.label}</div>
            <div className="contact-card__value mono">{it.value}</div>

            <div className="contact-card__actions">
              {it.href && (
                <a
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="contact-card__btn"
                >
                  {it.href.startsWith("mailto") ? "Send email" : "Open"}
                </a>
              )}
              {it.copyable && (
                <button
                  className="contact-card__copy"
                  onClick={() => handleCopy(it.key, it.value)}
                  aria-label={`${it.label} 복사`}
                >
                  {copied === it.key ? <FaCheck /> : <FaRegCopy />}
                  <span>{copied === it.key ? "Copied" : "Copy"}</span>
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.section
        className="contact-foot"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <p>
          <span className="mono">$</span> 기회는 언제든 열려 있습니다. 프리랜스,
          팀 프로젝트, 오픈 소스 기여 — 어떤 제안이든 환영합니다.
        </p>
      </motion.section>
    </div>
  );
}
