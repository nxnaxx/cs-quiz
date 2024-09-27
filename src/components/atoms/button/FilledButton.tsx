import styled from '@emotion/styled';
import { center } from '@styles/mixins';
import { ButtonProps } from 'src/types/elementTypes';

const ButtonContainer = styled.button<ButtonProps>`
  ${center}
  width: ${(props) => (props.isFullWidth ? '100%' : 'auto')};
  min-width: ${(props) =>
    props.size === 'large' ? '120px' : props.size === 'medium' ? '96px' : '80px'};
  min-height: ${(props) =>
    props.size === 'large' ? '48px' : props.size === 'medium' ? '40px' : '36px'};
  padding: ${(props) => (props.size === 'large' ? '12px 16px' : '8px 16px')};
  border-radius: ${(props) => (props.size === 'large' ? '32px' : '24px')};
  background-color: ${(props) =>
    props.variant === 'primary' ? 'var(--primary)' : 'var(--secondary)'};
  color: var(--white);
  font-size: ${(props) =>
    props.size === 'large'
      ? 'var(--fs-l)'
      : props.size === 'medium'
        ? 'var(--fs-base)'
        : 'var(--fs-s)'};

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
  isFullWidth = false,
  children,
  onClick,
}: ButtonProps) {
  return (
    <ButtonContainer
      size={size}
      variant={variant}
      disabled={disabled}
      isFullWidth={isFullWidth}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
}
