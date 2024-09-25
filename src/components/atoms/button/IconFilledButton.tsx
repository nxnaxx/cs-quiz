import styled from '@emotion/styled';
import { ButtonProps } from '../../../types/buttonTypes';
import { center } from '../../../styles/mixins';

const ButtonContainer = styled.button<ButtonProps>`
  ${center}
  width: ${(props) => (props.size === 'medium' ? '40px' : '36px')};
  height: ${(props) => (props.size === 'medium' ? '40px' : '36px')};
  border-radius: 50%;
  background-color: ${(props) =>
    props.variant === 'primary' ? 'var(--primary)' : 'var(--secondary)'};
  color: var(--white);
  font-size: ${(props) => (props.size === 'medium' ? '20px' : '18px')};

  &:hover {
    background-color: ${(props) =>
      props.variant === 'primary' ? 'var(--primary-lighter)' : 'var(--secondary-lighter)'};
  }

  &:disabled {
    background-color: var(--dark-50);
    cursor: auto;
  }
`;

export default function IconFilledButton({
  size = 'medium',
  variant = 'primary',
  disabled = false,
  children,
  onClick,
}: ButtonProps) {
  return (
    <ButtonContainer size={size} variant={variant} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
}
