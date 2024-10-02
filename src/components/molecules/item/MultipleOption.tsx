import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface ActiveOptionProps {
  isSelected: boolean;
}

interface MultipleOptionProps extends ActiveOptionProps {
  content: string;
  onOptionClick: () => void;
}

const CheckMark = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const OptionContainer = styled(motion.li)<ActiveOptionProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 16px 24px;
  border: 1px solid var(--dark-50);
  border-radius: 8px;
  box-shadow: ${(props) => (props.isSelected ? 'var(--color-shadow2)' : 'var(--shadow2)')};
  cursor: pointer;

  &:hover {
    box-shadow: var(--color-shadow2);
  }

  ${CheckMark} {
    border: ${(props) =>
      props.isSelected ? '7px solid var(--primary)' : '1px solid var(--dark-100)'};
  }
`;

const OptionContent = styled.p``;

export default function MultipleOption({
  content,
  isSelected,
  onOptionClick,
}: MultipleOptionProps) {
  return (
    <OptionContainer
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      isSelected={isSelected}
      onClick={onOptionClick}
    >
      <OptionContent>{content}</OptionContent>
      <CheckMark />
    </OptionContainer>
  );
}
