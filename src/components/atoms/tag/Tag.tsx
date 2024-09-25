import styled from '@emotion/styled';
import { TagProps } from '../../../types/elementTypes';
import { center } from '../../../styles/mixins';

const TagContainer = styled.div<TagProps>`
  ${center}
  display: inline-flex;
  min-width: ${(props) => (props.size === 'medium' ? '64px' : '56px')};
  min-height: ${(props) => (props.size === 'medium' ? '36px' : '32px')};
  padding: 4px 12px;
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? 'var(--primary-lighter)' : 'var(--secondary-dark)')};
  border-radius: 6px;
  background-color: var(--white);
  color: ${(props) =>
    props.variant === 'primary' ? 'var(--primary-lighter)' : 'var(--secondary-dark)'};
  font-size: ${(props) => (props.size === 'medium' ? 'var(--fs-base)' : 'var(--fs-s)')};
`;

export default function Tag({ size = 'medium', variant = 'primary', children }: TagProps) {
  return (
    <TagContainer size={size} variant={variant}>
      {children}
    </TagContainer>
  );
}
