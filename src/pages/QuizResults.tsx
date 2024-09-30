import styled from '@emotion/styled';
import MainTemplate from '@templates/MainTemplate';
import QuizResultSection from '@organisms/section/QuizResultSection';

const QuizResultTitle = styled.h2`
  margin-bottom: 48px;
  text-align: center;
`;

export default function QuizResults() {
  return (
    <MainTemplate>
      <QuizResultTitle>퀴즈 결과</QuizResultTitle>
      <QuizResultSection />
    </MainTemplate>
  );
}
