import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: var(--white);
  border-bottom: 1px solid var(--dark-50);
`;

const HeaderInner = styled.div`
  padding: 12px 40px;
`;

const MainLogoLink = styled(NavLink)``;

const MainLogo = styled.h1`
  width: 200px;
  height: 40px;
  background-image: url('src/assets/images/logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-indent: -9999px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderInner>
        <MainLogoLink to="/" aria-label="Go to main page">
          <MainLogo>CSQuizHub</MainLogo>
        </MainLogoLink>
      </HeaderInner>
    </HeaderContainer>
  );
}
