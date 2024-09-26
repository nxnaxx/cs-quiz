import styled from '@emotion/styled';
import Header from '@organisms/header/Header';
import Footer from '@organisms/footer/Footer';

interface MainTemplateProps {
  children?: React.ReactNode;
}

const MainTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: var(--background);
`;

const MainContentWrapper = styled.div`
  height: 100%;
  min-height: calc(100vh - 65px * 2);
  margin: 0 auto;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 80px 0 144px 0;
`;

export default function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <MainTemplateContainer>
        <Header />
        <MainContentWrapper>
          <MainContent>{children}</MainContent>
        </MainContentWrapper>
        <Footer />
      </MainTemplateContainer>
    </>
  );
}
