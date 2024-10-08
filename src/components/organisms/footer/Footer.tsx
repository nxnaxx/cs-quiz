import styled from '@emotion/styled';
import { mobile } from '@styles/responsive';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 65px;
  padding: 16px 40px;
  border-top: 1px solid var(--dark-50);
  background-color: var(--white);
  color: var(--dark-500);

  @media (max-width: ${mobile}) {
    min-height: auto;
    padding: 16px 24px;
    font-size: var(--fs-s);
  }
`;

export default function Footer() {
  return <FooterContainer>© 2024 CSQuizHub. All rights reserved.</FooterContainer>;
}
