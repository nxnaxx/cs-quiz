import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { mobile, tabletS } from '@styles/responsive';

const HeaderContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--dark-50);
  background-color: var(--white);
`;

const HeaderInner = styled.div`
  padding: 12px 64px;

  @media (max-width: ${tabletS}) {
    padding: 12px 40px;
  }

  @media (max-width: ${mobile}) {
    padding: 12px 20px;
  }
`;

const MainLogoLink = styled(NavLink)`
  display: inline-block;
`;

const MainLogo = styled.h1`
  width: 160px;
  height: 40px;
  background-image: url('/assets/images/logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-indent: -9999px;

  @media (max-width: ${mobile}) {
    width: 140px;
    height: 36px;
  }
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
