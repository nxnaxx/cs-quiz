import styled from '@emotion/styled';

interface LinearProgressProps {
  currentSteps: number;
  totalSteps: number;
}

const BarContainer = styled.div`
  width: 100%;
  text-align: right;
`;

const BarBackground = styled.div`
  position: relative;
  width: 100%;
  height: 12px;
  margin-bottom: 8px;
  border-radius: 24px;
  background-color: var(--dark-50);
`;

const ActiveBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 12px;
  border-radius: 24px;
  background-color: var(--secondary);
`;

const Steps = styled.span`
  color: var(--dark-200);
`;

export default function LinearProgress({ currentSteps, totalSteps }: LinearProgressProps) {
  return (
    <BarContainer>
      <BarBackground>
        <ActiveBar style={{ width: `calc(100% / ${totalSteps} * ${currentSteps - 1}` }} />
      </BarBackground>
      <Steps>{`${currentSteps} / ${totalSteps}`}</Steps>
    </BarContainer>
  );
}
