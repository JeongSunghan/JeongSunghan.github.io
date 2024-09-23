import React, { useState, useEffect } from "react";
import "../styles/AboutMe.css";
import { Box, Typography } from "@mui/material";

const AboutMe = () => {
  const [animateClass, setAnimateClass] = useState("");

  useEffect(() => {
    setAnimateClass("animate__animated animate__bounceIn");
  }, []);

  const AnimatedText = ({ text }) => {
    return (
      <span className="animated-text">
        {text.split("").map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <Box className="about-me">
      <div className={`about-me-container ${animateClass}`}>
        <Box className="about-section">
          <Typography
            variant="h3"
            className="section-title"
            sx={{ ml: -2, mt: 3 }}
          >
            About <span className="highlight">ME</span>!
          </Typography>
          <Box className="about-content">
            <Box className="about-description">
              <Typography variant="body1" className="description-text">
                <span style={{ fontWeight: "bold" }}>
                  "누군가에게 도움이 되는 행복한 개발자가 되자!"
                  <br />
                </span>
                저는 어떤 목표가 생긴다면 무조건 하고싶은 성격입니다.
                <br />
                개발자라는 직군을 알게되고 나서 개발 하고싶어 교육을 배우면서
                분야가 다양한것을 알게되고,
                <br />
                어떤 분야에서든 알아주는 개발자가 되고 싶은 목표가 생겼습니다.
                <br />
                저의 목표는 신입 개발자로서 열정적인 모습과 지속적인 학습 및
                자기계발을 통해
                <br />
                최신 기술 트렌드를 습득하고 발전된 개발자로서의 역량을 키우고
                싶습니다.
              </Typography>
            </Box>
            <Box className="about-details">
              <Typography>
                <strong>Age:</strong> 25
              </Typography>
              <Typography>
                <strong>Residence:</strong> Republic of Korea
              </Typography>
              <Typography>
                <strong>Address:</strong> 경기도 수원시 권선구
              </Typography>
              <Typography>
                <strong>E-mail:</strong> sh2683@naver.com
              </Typography>
              <Typography>
                <strong>Phone:</strong> 이력서에 포함
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="services-section">
          <Typography variant="h4" className="section-title" sx={{ mb: 2 }}>
            나의 <span className="highlight">장점 </span>
          </Typography>

          <Box className="services">
            <Box className="service-item">
              <i className="icon fas fa-store"></i>
              <Typography variant="h6">
                <AnimatedText text="끈기있는 모습" />
              </Typography>

              <Typography>
                한번 목표를 잡거나 혹은 해결해야 할 목표가 생긴다면 <br />
                무슨 일이 있어도 해결해야 하는 끈기있는 모습이 있습니다.
                <br />
                또한 마음에 드는 디자인이나 코드는 알아내기 위해
                <br />
                수단과 방법을 가리지 않습니다.
              </Typography>
            </Box>

            <Box className="service-item">
              <i className="icon fas fa-pencil-alt"></i>
              <Typography variant="h6">
                <AnimatedText text="긍정적인 모습" />
              </Typography>
              <Typography>
                항상 긍정적인 태도로 팀의 리더 의견에 적극 수용하며 <br />
                협업을 하면서 항상 밝게 유지합니다. <br />
                문제가 생겨도 중립적으로 해결하려 하며
                <br />
                팀의 의견 하나하나를 중요하게 생각합니다.
                <br />
              </Typography>
            </Box>

            <Box className="service-item">
              <i className="icon fas fa-laptop"></i>
              <Typography variant="h6">
                <AnimatedText text="빠른 처리 능력" />
              </Typography>
              <Typography>
                계획에 차질이 생기거나 혹은 에러가 있다면 최대한 빨리 해결하기
                <br />
                위해 해결책을 빠르게 내놓거나 처리합니다
              </Typography>
            </Box>

            <Box className="service-item">
              <i className="icon fas fa-flag"></i>
              <Typography variant="h6">
                <AnimatedText text="강한 책임감" />
              </Typography>
              <Typography>
                개발자라는 직업에 관심을 생긴이후, 책임감이 더욱 강해졌습니다.
                <br />
                어떤 프로젝트를 기간내에 마무리 해야 하는경우
                <br />
                시간을 내서라도 좋아하는 취미활동을 조금 줄여서라도 마무리
                하려고 합니다.
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default AboutMe;
