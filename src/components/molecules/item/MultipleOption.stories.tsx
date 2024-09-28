import { Meta, StoryObj } from '@storybook/react';
import MultipleOption from './MultipleOption';

const meta: Meta<typeof MultipleOption> = {
  title: 'molecules/MultipleOption',
  component: MultipleOption,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultOption: Story = {
  args: {
    content: '간단한 함수 표현에 유용하다.',
    isSelected: false,
  },
  render: (args) => <MultipleOption {...args} />,
};

export const SelectedOption: Story = {
  args: {
    content: '간단한 함수 표현에 유용하다.',
    isSelected: true,
  },
  render: (args) => <MultipleOption {...args} />,
};
