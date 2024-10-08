import styled from '@emotion/styled';
import { motion, Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import useToggleVisibility from '@hooks/useToggleVisibility';
import useOptionStore, { OptionStore } from '@store/useOptionStore';
import { QuizOptions } from 'src/types/quizTypes';

interface SelectProps<K extends keyof QuizOptions> {
  isFullWidth?: boolean;
  selectId: K;
  options: QuizOptions[K][];
}

const SelectContainer = styled(motion.nav)`
  position: relative;
  width: 240px;
  filter: drop-shadow(0px 2px 4px rgb(156 162 180 / 20%));
`;

const SelectField = styled(motion.button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  padding: 8px 12px 8px 16px;
  border: 1px solid var(--dark-100);
  border-radius: 4px;
  background: var(--white);
  font-weight: var(--fw-r);
  cursor: pointer;

  &:focus {
    border-color: var(--primary);
  }
`;

const DropdownButton = styled(motion.div)`
  color: var(--dark-300);
`;

const OptionList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1020;
  width: 100%;
  background-color: var(--white);
`;

const OptionItem = styled(motion.li)`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-pale);
  }
`;

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Select<K extends keyof OptionStore['optionValues']>({
  isFullWidth = false,
  selectId,
  options,
}: SelectProps<K>) {
  const { isVisible, setIsVisible, useVisibilityRef, handleToggleVisibility } =
    useToggleVisibility(false);
  const { optionValues, setOptionValue } = useOptionStore();

  const handleOptionClick = (value: OptionStore['optionValues'][K]) => {
    setOptionValue(selectId, value);
    setIsVisible(false);
  };

  return (
    <SelectContainer
      ref={useVisibilityRef}
      initial={false}
      animate={isVisible ? 'open' : 'closed'}
      style={{ zIndex: isVisible ? '1020' : '0', width: isFullWidth ? '100%' : '240px' }}
    >
      <SelectField whileTap={{ scale: 0.97 }} onClick={() => handleToggleVisibility()}>
        {optionValues[selectId]}
        <DropdownButton
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </DropdownButton>
      </SelectField>
      <OptionList
        variants={{
          open: {
            clipPath: 'inset(0% 0% 0% 0% round 4px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3,
              delayChildren: 0.2,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: 'inset(10% 50% 90% 50% round 4px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            },
          },
        }}
        style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
      >
        {options.map((option) => (
          <OptionItem
            key={option}
            variants={itemVariants}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </OptionItem>
        ))}
      </OptionList>
    </SelectContainer>
  );
}
