import styled from '@emotion/styled';
import { center } from '@styles/mixins';
import { motion } from 'framer-motion';
import QuizTemplate, { QuizTemplateProps } from '@templates/QuizTemplate';
import CircleMarkSVG from '@assets/images/circle-mark.svg?react';
import CrossMarkSVG from '@assets/images/cross-mark.svg?react';
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
`;

const CircleMark = styled(CircleMarkSVG)``;

const CrossMark = styled(CrossMarkSVG)``;

const AnswerButton = styled(motion.button)<AnswerButtonProps>`
  ${center}
  flex: 1;
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
`;

export default function TrueFalseSection({
  currentQuizNum,
  totalQuizNum,
  question,
}: TrueFalseSectionProps) {
  const { quizData, setUserAnswer, clearErrors } = useQuizStore();

  const handleAnswerClick = (question: string, answer: boolean) => {
    setUserAnswer(question, answer);
    clearErrors('userAnswer');
  };

  return (
    <QuizTemplate currentQuizNum={currentQuizNum} totalQuizNum={totalQuizNum} question={question}>
      {quizData && (
        <AnswerWrapper>
          <AnswerButton
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300 }}
            isSelected={quizData[currentQuizNum - 1].userAnswer === true}
            onClick={() => handleAnswerClick(question, true)}
          >
            <CircleMark />
          </AnswerButton>
          <AnswerButton
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300 }}
            isSelected={quizData[currentQuizNum - 1].userAnswer === false}
            onClick={() => handleAnswerClick(question, false)}
          >
            <CrossMark />
          </AnswerButton>
        </AnswerWrapper>
      )}
    </QuizTemplate>
  );
}
