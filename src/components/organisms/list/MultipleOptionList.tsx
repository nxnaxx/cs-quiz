import { useState } from 'react';
import styled from '@emotion/styled';
import useQuizStore from '@store/useQuizStore';
import MultipleOption from '@molecules/item/MultipleOption';

interface MultipleOptinoListProps {
  question: string;
  multipleOptions: string[];
}

const MultipleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default function MultipleOptionList({ question, multipleOptions }: MultipleOptinoListProps) {
  const { setUserAnswer } = useQuizStore();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (question: string, option: string) => {
    setUserAnswer(question, option);
    setSelectedOption(option);
  };

  return (
    <MultipleList>
      {multipleOptions.map((option) => (
        <MultipleOption
          key={option}
          content={option}
          isSelected={option === selectedOption}
          onOptionClick={() => handleOptionClick(question, option)}
        />
      ))}
    </MultipleList>
  );
}
