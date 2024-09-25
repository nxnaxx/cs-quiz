import styled from '@emotion/styled';
import { ButtonProps } from '../../../types/buttonTypes';
import { center } from '../../../styles/mixins';

const ButtonContainer = styled.button<ButtonProps>`
  ${center}
  min-width: ${(props) => (props.size === 'medium' ? '96px' : '80px')};
  min-height: ${(props) => (props.size === 'medium' ? '40px' : '36px')};
  padding: 8px 16px;
  border: 1px solid
    ${(props) => (props.variant === 'primary' ? 'var(--primary)' : 'var(--secondary)')};
  border-radius: 24px;
  background-color: var(--white);
  color: ${(props) => (props.variant === 'primary' ? 'var(--primary)' : 'var(--secondary-dark)')};
  font-size: ${(props) => (props.size === 'medium' ? 'var(--fs-base)' : 'var(--fs-s)')};

  &:hover {
    background-color: ${(props) =>
      props.variant === 'primary' ? 'var(--primary-pale)' : 'var(--secondary-pale)'};
  }

  &:disabled {
    border: 1px solid var(--dark-100);
    background-color: var(--white);
    color: var(--dark-100);
    cursor: auto;
  }
`;

export default function GhostButton({
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
