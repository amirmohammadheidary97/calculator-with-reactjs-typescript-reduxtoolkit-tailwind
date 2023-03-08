import styled from "styled-components";
import { IRipplePropTypes } from "../../../../interfaces/button.interface";

export const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${(props:IRipplePropTypes) => props.color};
    animation-name: ripple;
    animation-duration: ${(props:IRipplePropTypes) => props.duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;
