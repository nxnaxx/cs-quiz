import styled from '@emotion/styled';
import useQuizStore from '@store/useQuizStore';
import MultipleOption from '@molecules/item/MultipleOption';

interface MultipleOptinoListProps {
  question: string;
  currentQuizNum: number;
  multipleOptions: string[];
}

const MultipleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export default function MultipleOptionList({
  question,
  currentQuizNum,
  multipleOptions,
}: MultipleOptinoListProps) {
  const { quizData, setUserAnswer, clearErrors } = useQuizStore();

  const handleOptionClick = (question: string, option: string) => {
    setUserAnswer(question, option);
    clearErrors('userAnswer');
  };

  return (
    <MultipleList>
      {quizData &&
        multipleOptions.map((option) => (
          <MultipleOption
            key={option}
            content={option}
            isSelected={quizData[currentQuizNum - 1].userAnswer === option}
            onOptionClick={() => handleOptionClick(question, option)}
          />
        ))}
    </MultipleList>
  );
}
