import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { center } from '@styles/mixins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import useOptionStore, { OptionStore } from '@store/useOptionStore';
import { QuizType } from 'src/types/quizTypes';
import { quizOptions } from '@data/quizData';
import DifficultyBar from '@atoms/bars/DifficultyBar';
import Select from '@molecules/select/Select';
import Chip from '@atoms/chip/Chip';
import FilledButton from '@atoms/button/FilledButton';

interface OptionModalProps {
  topic: string;
  onCloseModal: () => void;
}

const Backdrop = styled.div`
  ${center}
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  height: 100%;
  background: var(--backdrop);
`;

const ModalContainer = styled.div`
  width: 360px;
  padding: 20px 32px 32px 32px;
  border-radius: 16px;
  background-color: var(--white);
  box-shadow: var(--shadow1);
`;

const ModalTop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  padding-left: 24px;
`;

const Title = styled.p`
  width: 100%;
  font-size: var(--fs-xl);
  font-weight: var(--fw-sb);
  text-align: center;
`;

const CloseButton = styled.button`
  color: var(--dark-100);
  font-size: 24px;

  &:hover {
    color: var(--primary);
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--dark-100);
`;

const SelectTopic = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--secondary-dark);
  font-size: var(--fs-l);
`;

const Topic = styled.p`
  color: var(--dark-700);
  font-weight: var(--fw-m);
`;

const OptionWrapper = styled.div``;

const OptionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  color: var(--dark-300);
`;

const QuizTypeList = styled.div`
  display: flex;
  gap: 12px;
`;

const OptionModal = forwardRef<HTMLDivElement, OptionModalProps>(({ topic, onCloseModal }, ref) => {
  const { optionValues, setOptionValues } = useOptionStore();

  const handleChipClick = <K extends keyof OptionStore['optionValues']>(
    id: K,
    value: OptionStore['optionValues'][K],
  ) => {
    setOptionValues(id, value);
  };

  return (
    <Backdrop>
      <ModalContainer ref={ref}>
        <ModalTop>
          <Title>옵션 선택</Title>
          <CloseButton onClick={onCloseModal}>
            <FontAwesomeIcon icon={faXmark} />
          </CloseButton>
        </ModalTop>
        <ModalContent>
          <SelectTopic>
            <FontAwesomeIcon icon={faAnglesRight} />
            <Topic>{topic}</Topic>
          </SelectTopic>
          <OptionWrapper>
            <OptionLabel>
              난이도
              <DifficultyBar difficulty={optionValues['difficulty']} />
            </OptionLabel>
            <Select selectId="difficulty" options={quizOptions.difficulty} isFullWidth />
          </OptionWrapper>
          <OptionWrapper>
            <OptionLabel>문제 수</OptionLabel>
            <Select selectId="quizNum" options={quizOptions.quizNum} isFullWidth />
          </OptionWrapper>
          <OptionWrapper>
            <OptionLabel>문제 유형</OptionLabel>
            <QuizTypeList>
              {quizOptions.quizType.map((type) => (
                <Chip
                  key={type}
                  size="small"
                  isActive={optionValues['quizType'] === type}
                  onChipClick={() => handleChipClick('quizType', type as QuizType)}
                >
                  {type}
                </Chip>
              ))}
            </QuizTypeList>
          </OptionWrapper>
        </ModalContent>
        <FilledButton isFullWidth>퀴즈 생성</FilledButton>
      </ModalContainer>
    </Backdrop>
  );
});

export default OptionModal;
