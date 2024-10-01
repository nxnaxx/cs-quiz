import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { QuizType } from 'src/types/quizTypes';

interface ResultStyleProps {
  isCorrect: boolean;
}

interface QuizResultProps {
  quizType: QuizType;
  questionNum: number;
  question: string;
  answer: string | boolean | string[];
  userAnswer: string | boolean | null;
  commentary: string;
}

const UserAnswer = styled.p``;

const MarkIcon = styled.div`
  font-size: 32px;
`;

const QuizResultItemContainer = styled.li<ResultStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 24px 16px 20px;
  border: 1px solid ${(props) => (props.isCorrect ? 'var(--dark-50)' : 'var(--red)')};
  border-radius: 8px;
  box-shadow: var(--shadow2);

  ${UserAnswer} {
    color: ${(props) => (props.isCorrect ? 'var(--dark-700)' : 'var(--dark-200)')};
    text-decoration: ${(props) => (props.isCorrect ? 'none' : 'line-through')};
  }

  ${MarkIcon} {
    color: ${(props) => (props.isCorrect ? 'var(--green)' : 'var(--red)')};
  }
`;

const ResultContent = styled.div``;

const QuestionWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 4px;
`;

const Question = styled.p`
  font-weight: var(--fw-m);
`;

const QuestionNum = styled.span`
  min-width: 24px;
  color: var(--primary);
  font-weight: var(--fw-sb);
  text-align: center;
`;

const AnswerWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const AnswerNum = styled.span`
  min-width: 24px;
  color: var(--secondary-dark);
  font-weight: var(--fw-m);
  text-align: center;
`;

const AnswerContent = styled.div``;

const CorrectAnswer = styled.p`
  color: var(--red);
  text-decoration: none;
`;

const Commentary = styled.p`
  margin-top: 4px;
  color: var(--dark-300);
`;

export default function QuizResultItem({
  quizType,
  questionNum,
  question,
  answer,
  userAnswer,
  commentary,
}: QuizResultProps) {
  const isCorrect =
    quizType === '빈칸 맞추기'
      ? (answer as string[]).some(
          (answerItem) =>
            answerItem.toLowerCase().replace(/[,.!?;:'"()]/g, '') ===
            ((userAnswer as string) || '').toLowerCase().replace(/[,.!?;:'"()]/g, ''),
        )
      : answer === userAnswer;

  return (
    <QuizResultItemContainer isCorrect={isCorrect}>
      <ResultContent>
        <QuestionWrapper>
          <QuestionNum>Q{questionNum}</QuestionNum>
          <Question>{question}</Question>
        </QuestionWrapper>
        <AnswerWrapper>
          <AnswerNum>A{questionNum}</AnswerNum>
          <AnswerContent>
            {quizType === 'OX 퀴즈' ? (
              <UserAnswer>{userAnswer === true ? 'O' : 'X'}</UserAnswer>
            ) : (
              <UserAnswer>{userAnswer}</UserAnswer>
            )}
            {!isCorrect &&
              (quizType === 'OX 퀴즈' ? (
                <CorrectAnswer>{answer === true ? 'O' : 'X'}</CorrectAnswer>
              ) : quizType === '빈칸 맞추기' && Array.isArray(answer) ? (
                <CorrectAnswer>
                  {answer.map((item, i) => {
                    return i === 0 ? `${item}` : `, ${item}`;
                  })}
                </CorrectAnswer>
              ) : (
                <CorrectAnswer>{answer}</CorrectAnswer>
              ))}
            {commentary && <Commentary>*{commentary}</Commentary>}
          </AnswerContent>
        </AnswerWrapper>
      </ResultContent>
      <MarkIcon>
        {isCorrect ? (
          <FontAwesomeIcon icon={faCircleCheck} />
        ) : (
          <FontAwesomeIcon icon={faCircleXmark} />
        )}
      </MarkIcon>
    </QuizResultItemContainer>
  );
}
