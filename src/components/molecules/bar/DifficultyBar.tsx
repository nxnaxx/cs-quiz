import styled from '@emotion/styled';
import { Difficulty } from 'src/types/quizTypes';

interface DifficultyBarProps {
  difficulty: Difficulty;
}

interface BarProps {
  isActive: boolean;
}

const BarWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Bar = styled.div<BarProps>`
  width: 28px;
  height: 8px;
  background-color: ${(props) => (props.isActive ? 'var(--secondary)' : 'var(--dark-50)')};
  border-radius: 16px;
`;

const getActiveStatus = (difficulty: Difficulty, index: number): boolean => {
  const thresholds = { 쉬움: 1, 보통: 2, 어려움: 3 };
  return index < thresholds[difficulty];
};

export default function DifficultyBar({ difficulty }: DifficultyBarProps) {
  return (
    <BarWrapper>
      {Array.from({ length: 3 }, (_, index) => (
        <Bar key={index} isActive={getActiveStatus(difficulty, index)} />
      ))}
    </BarWrapper>
  );
}
