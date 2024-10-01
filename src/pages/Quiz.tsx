import { useLocation } from 'react-router-dom';
import MainTemplate from '@templates/MainTemplate';
import useQuizStore, { FillBlank, Multiple, TrueFalse } from '@store/useQuizStore';
import MultipleSection from '@organisms/section/MultipleSection';
import TrueFalseSection from '@organisms/section/TrueFalseSection';
import FillBlankSection from '@organisms/section/FillBlankSection';

export default function Quiz() {
  const { quizData, currentQuizNum } = useQuizStore();
  const location = useLocation();
  const quizType = location.state?.quizType;

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
