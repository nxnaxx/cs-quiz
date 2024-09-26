import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 16px 40px;
  border-top: 1px solid var(--dark-50);
  background-color: var(--white);
  color: var(--dark-500);
  text-align: center;
`;

export default function Footer() {
  return <FooterContainer>© 2024 CSQuizHub. All rights reserved.</FooterContainer>;
}
