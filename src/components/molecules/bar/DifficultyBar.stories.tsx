import { Meta, StoryObj } from '@storybook/react';
import DifficultyBar from './DifficultyBar';

const meta: Meta<typeof DifficultyBar> = {
  title: 'molecules/DifficultyBar',
  component: DifficultyBar,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Easy: Story = {
  args: {
    difficulty: '쉬움',
  },
  render: (args) => <DifficultyBar {...args}>객관식</DifficultyBar>,
};

export const Normal: Story = {
  args: {
    difficulty: '보통',
  },
  render: (args) => <DifficultyBar {...args}>객관식</DifficultyBar>,
};

export const Hard: Story = {
  args: {
    difficulty: '어려움',
  },
  render: (args) => <DifficultyBar {...args}>객관식</DifficultyBar>,
};
