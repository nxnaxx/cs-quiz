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
      <MultipleOptionList currentQuizNum={currentQuizNum} multipleOptions={options} />
    </QuizTemplate>
  );
}
