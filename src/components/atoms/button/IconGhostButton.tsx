import styled from '@emotion/styled';
import { ButtonProps } from '../../../types/elementTypes';
import { center } from '../../../styles/mixins';

const ButtonContainer = styled.button<ButtonProps>`
  ${center}
  width: ${(props) =>
    props.size === 'large' ? '48px' : props.size === 'medium' ? '40px' : '36px'};
  height: ${(props) =>
    props.size === 'large' ? '48px' : props.size === 'medium' ? '40px' : '36px'};
  border: 1px solid
    ${(props) => (props.variant === 'primary' ? 'var(--primary)' : 'var(--secondary)')};
  border-radius: 50%;
  background-color: var(--white);
  color: ${(props) => (props.variant === 'primary' ? 'var(--primary)' : 'var(--secondary-dark)')};
  font-size: ${(props) =>
    props.size === 'large'
      ? 'var(--fs-xl)'
      : props.size === 'medium'
        ? 'var(--fs-base)'
        : 'var(--fs-s)'};

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

export default function IconGhostButton({
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
