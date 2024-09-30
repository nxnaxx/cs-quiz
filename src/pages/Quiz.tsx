import MainTemplate from '@templates/MainTemplate';
import { QuizType } from 'src/types/quizTypes';
import MultipleSection from '@organisms/section/MultipleSection';
import useQuizStore, { FillBlank, Multiple, TrueFalse } from '@store/useQuizStore';
import TrueFalseSection from '@organisms/section/TrueFalseSection';
import FillBlankSection from '@organisms/section/FillBlankSection';

interface QuizPageProps {
  quizType: QuizType;
}

export default function Quiz({ quizType }: QuizPageProps) {
  const { quizData, currentQuizNum } = useQuizStore();

  return (
    <MainTemplate>
      {quizData &&
        (quizType === '객관식' ? (
          <MultipleSection
            currentQuizNum={currentQuizNum}
            totalQuizNum={quizData.length}
            question={(quizData[currentQuizNum - 1] as Multiple).question}
            options={(quizData[currentQuizNum - 1] as Multiple).options}
          />
        ) : quizType === 'OX 퀴즈' ? (
          <TrueFalseSection
            currentQuizNum={currentQuizNum}
            totalQuizNum={quizData.length}
            question={(quizData[currentQuizNum - 1] as TrueFalse).question}
          />
        ) : (
          <FillBlankSection
            currentQuizNum={currentQuizNum}
            totalQuizNum={quizData.length}
            question={(quizData[currentQuizNum - 1] as FillBlank).question}
          />
        ))}
    </MainTemplate>
  );
}
