import styled from '@emotion/styled';
import useQuizStore from '@store/useQuizStore';
import MultipleOption from '@molecules/item/MultipleOption';

interface MultipleOptinoListProps {
  currentQuizNum: number;
  multipleOptions: string[];
}

const MultipleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export default function MultipleOptionList({
  currentQuizNum,
  multipleOptions,
}: MultipleOptinoListProps) {
  const { quizData, setUserAnswer, clearErrors } = useQuizStore();

  const handleOptionClick = (option: string) => {
    setUserAnswer(currentQuizNum - 1, option);
    clearErrors('userAnswer');
  };

  return (
    <MultipleList>
      {multipleOptions.map((option) => (
        <MultipleOption
          key={option}
          content={option}
          isSelected={quizData?.[currentQuizNum - 1].userAnswer === option}
          onOptionClick={() => handleOptionClick(option)}
        />
      ))}
    </MultipleList>
  );
}
