import QuizTemplate, { QuizTemplateProps } from '@templates/QuizTemplate';
import MultipleOptionList from '@organisms/list/MultipleOptionList';

interface MultipleSectionProps extends QuizTemplateProps {
  options: string[];
}

export default function MultipleSection({
  currentQuizNum,
  totalQuizNum,
  question,
  options,
}: MultipleSectionProps) {
  return (
    <QuizTemplate currentQuizNum={currentQuizNum} totalQuizNum={totalQuizNum} question={question}>
      <MultipleOptionList
        question="다음 중 JavaScript에서 사용되는 화살표 함수의 특징으로 올바르지 않은 것은?"
        multipleOptions={options}
      />
    </QuizTemplate>
  );
}
