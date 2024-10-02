import styled from '@emotion/styled';
import { mobile } from '@styles/responsive';
import { center } from '@styles/mixins';
import { motion } from 'framer-motion';
import QuizTemplate, { QuizTemplateProps } from '@templates/QuizTemplate';
import CircleMarkSVG from '@assets/icons/circle-mark.svg?react';
import CrossMarkSVG from '@assets/icons/cross-mark.svg?react';
import useQuizStore from '@store/useQuizStore';

interface TrueFalseSectionProps extends QuizTemplateProps {}

interface AnswerButtonProps {
  isSelected: boolean;
}

const AnswerWrapper = styled.div`
  display: flex;
  gap: 32px;
  height: 336px;
  padding-bottom: 16px;

  @media (max-width: ${mobile}) {
    gap: 20px;
    height: 200px;
    padding: 0;
  }
`;

const CircleMark = styled(CircleMarkSVG)``;

const CrossMark = styled(CrossMarkSVG)``;

const AnswerButton = styled(motion.button)<AnswerButtonProps>`
  ${center}
  flex: 1;
  border: 1px solid var(--dark-50);
  border-radius: 24px;
  box-shadow: var(--shadow2);

  &:hover {
    box-shadow: var(--color-shadow2);

    ${CircleMark}, ${CrossMark} {
      color: var(--primary);
    }
  }

  ${CircleMark}, ${CrossMark} {
    width: 120px;
    height: 120px;
    color: ${(props) => (props.isSelected ? 'var(--primary)' : 'var(--dark-50)')};
  }

  @media (max-width: ${mobile}) {
    border-radius: 16px;

    ${CircleMark}, ${CrossMark} {
      width: 80px;
      height: 80px;
    }
  }
`;

export default function TrueFalseSection({
  currentQuizNum,
  totalQuizNum,
  question,
}: TrueFalseSectionProps) {
  const { quizData, setUserAnswer, clearErrors } = useQuizStore();

  const handleAnswerClick = (answer: boolean) => {
    setUserAnswer(currentQuizNum - 1, answer);
    clearErrors('userAnswer');
  };

  return (
    <QuizTemplate currentQuizNum={currentQuizNum} totalQuizNum={totalQuizNum} question={question}>
      <AnswerWrapper>
        <AnswerButton
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 300 }}
          isSelected={quizData?.[currentQuizNum - 1].userAnswer === true}
          onClick={() => handleAnswerClick(true)}
        >
          <CircleMark />
        </AnswerButton>
        <AnswerButton
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 300 }}
          isSelected={quizData?.[currentQuizNum - 1].userAnswer === false}
          onClick={() => handleAnswerClick(false)}
        >
          <CrossMark />
        </AnswerButton>
      </AnswerWrapper>
    </QuizTemplate>
  );
}
