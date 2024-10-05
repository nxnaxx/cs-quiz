import styled from '@emotion/styled';
import { center, dotAnimation } from '@styles/mixins';

const LazyLoaderContainer = styled.div`
  ${center}
  flex-direction: column;
  gap: 8px;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--primary-pale);
`;

const DotContainer = styled.div`
  display: inline-flex;
  gap: 24px;
`;

const Dot = styled.div`
  content: '';
  position: relative;
  top: 12px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--primary);
  animation: ${dotAnimation} 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;

  &:nth-child(1) {
    animation-delay: 0.4s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0s;
  }
`;

export default function LazyLoader() {
  return (
    <LazyLoaderContainer>
      <DotContainer>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
      </DotContainer>
    </LazyLoaderContainer>
  );
}
