import { css, keyframes } from '@emotion/react';
import { tabletL } from './responsive';

export const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const inner = css`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${tabletL}) {
    max-width: 1120px;
  }
`;

export const cubeSlide = keyframes`
  0% {
    transform: translate(var(--sx), var(--sy));
  }
  65% {
    transform: translate(var(--ex), var(--sy));
  }
  95%, 100% {
    transform: translate(var(--ex), var(--ey));
  }
`;

export const dotsLoad = keyframes`
  20% {
    content: ".";
  }
  40% {
    content: "..";
  }
  80%, 100% {
    content: "...";
  }
`;

export const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const dotAnimation = keyframes`
  0% { top: 12px }
  50% { top: 0 }
  100% { top: 12px }
`;
