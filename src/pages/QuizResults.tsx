import styled from '@emotion/styled';
import { mobile } from '@styles/responsive';
import MainTemplate from '@templates/MainTemplate';
import QuizResultSection from '@organisms/section/QuizResultSection';

const QuizResultTitle = styled.h2`
  margin-bottom: 48px;
  text-align: center;

  @media (max-width: ${mobile}) {
    margin: 40px 0;
  }
`;

export default function QuizResults() {
  return (
    <MainTemplate>
      <QuizResultTitle>퀴즈 결과</QuizResultTitle>
      <QuizResultSection />
    </MainTemplate>
  );
}
