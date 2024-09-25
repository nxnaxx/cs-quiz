import styled from '@emotion/styled';
import { ButtonProps } from '../../../types/elementTypes';
import { center } from '../../../styles/mixins';

const ButtonContainer = styled.button<ButtonProps>`
  ${center}
  min-width: ${(props) => (props.size === 'medium' ? '96px' : '80px')};
  min-height: ${(props) => (props.size === 'medium' ? '40px' : '36px')};
  padding: 8px 16px;
  border-radius: 24px;
  background-color: ${(props) =>
    props.variant === 'primary' ? 'var(--primary)' : 'var(--secondary)'};
  color: var(--white);
  font-size: ${(props) => (props.size === 'medium' ? 'var(--fs-base)' : 'var(--fs-s)')};

  &:hover {
    background-color: ${(props) =>
      props.variant === 'primary' ? 'var(--primary-lighter)' : 'var(--secondary-lighter)'};
  }

  &:disabled {
    background-color: var(--dark-50);
    color: var(--dark-100);
    cursor: auto;
  }
`;

export default function FilledButton({
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
