import { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const meta: Meta<typeof Select> = {
  title: 'molecules/Select',
  component: Select,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DifficultySelect: Story = {
  args: {
    selectId: 'difficulty',
    options: ['쉬움', '보통', '어려움'],
  },
  render: (args) => <Select {...args} />,
};

export const quizNumSelect: Story = {
  args: {
    selectId: 'quizNum',
    options: [5, 10, 15],
  },
  render: (args) => <Select {...args} />,
};
