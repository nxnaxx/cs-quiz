import { Meta, StoryObj } from '@storybook/react';
import OptionModal from './OptionModal';
import FilledButton from '@atoms/button/FilledButton';
import { useState } from 'react';

const meta: Meta<typeof OptionModal> = {
  title: 'organisms/OptionModal',
  component: OptionModal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Modal: Story = {
  args: {
    topic: 'JavaScript',
  },
  render: (args) => {
    const [isOpened, setIsOpened] = useState(false);
    return (
      <>
        <FilledButton onClick={() => setIsOpened(true)}>클릭</FilledButton>
        {isOpened && <OptionModal {...args} onCloseModal={() => setIsOpened(false)} />}
      </>
    );
  },
};
