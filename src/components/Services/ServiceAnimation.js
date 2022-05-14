import styled from "styled-components";
import { keyframes } from "styled-components";
import "./animation.css";

function ServiceAnimation() {
  return (
    <>
      <div className="bird-container bird-container-one">
        <div className="bird bird-one"></div>
      </div>

      <div className="bird-container bird-container-two">
        <div className="bird bird-two"></div>
      </div>

      <div className="bird-container bird-container-three">
        <div className="bird bird-three"></div>
      </div>

      <div className="bird-container bird-container-four">
        <div className="bird bird-four"></div>
      </div>
    </>
  );
}

export default ServiceAnimation;

export const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg);
    filter: blur(10px);
  }
  25% {
    opacity: 1;
    transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
    filter: blur(0px);
  }
  75% {
    opacity: 1;
    transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg);
    filter: blur(10px);
  }
`;

export const Loop = styled.span`
  display: inline-block;

  span span {
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  ${Css()}
`;

function Css() {
  let styles = `
    `;

  for (let i = 0; i < 14; i++) {
    styles += `
      span span:nth-child(${i}) {
      animation-delay: calc(0.1s * (${i} +1));
    }
  `;
  }

  return styles;
}
