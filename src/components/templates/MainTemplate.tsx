import styled from '@emotion/styled';
import Header from '../organisms/header/Header';
import Footer from '../organisms/footer/Footer';

interface MainTemplateProps {
  children?: React.ReactNode;
}
const MainTemplateContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <MainTemplateContainer>
        <Header />
        {children}
        <Footer />
      </MainTemplateContainer>
    </>
  );
};

export default MainTemplate;
