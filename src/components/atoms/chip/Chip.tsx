import styled from '@emotion/styled';
import { center } from '@styles/mixins';
import { ChipStyleProps } from 'src/types/elementTypes';

interface ChipProps extends ChipStyleProps {
  onChipClick?: () => void;
}

const ChipContainer = styled.div<ChipStyleProps>`
  ${center}
  display: inline-flex;
  min-width: ${(props) => (props.size === 'medium' ? '72px' : '64px')};
  min-height: ${(props) => (props.size === 'medium' ? '40px' : '36px')};
  padding: 8px 16px;
  border: 1px solid
    ${(props) =>
      !props.isActive
        ? 'var(--dark-100)'
        : props.variant === 'primary'
          ? 'var(--primary)'
          : 'var(--secondary)'};
  border-radius: 24px;
  background-color: ${(props) =>
    !props.isActive
      ? 'var(--white)'
      : props.variant === 'primary'
        ? 'var(--primary-pale)'
        : 'var(--secondary-pale)'};
  color: ${(props) =>
    !props.isActive
      ? 'var(--dark-200)'
      : props.variant === 'primary'
        ? 'var(--primary)'
        : 'var(--secondary-dark)'};
  font-size: ${(props) => (props.size === 'medium' ? 'var(--fs-base)' : 'var(--fs-s)')};
  font-weight: var(--fw-m);
  cursor: pointer;

  &:hover {
    border: 1px solid
      ${(props) => (props.variant === 'primary' ? 'var(--primary)' : 'var(--secondary)')};
    color: ${(props) => (props.variant === 'primary' ? 'var(--primary)' : 'var(--secondary-dark)')};
  }
`;

export default function Chip({
  size = 'medium',
  variant = 'primary',
  isActive,
  onChipClick,
  children,
}: ChipProps) {
  return (
    <ChipContainer size={size} variant={variant} isActive={isActive} onClick={onChipClick}>
      {children}
    </ChipContainer>
  );
}
