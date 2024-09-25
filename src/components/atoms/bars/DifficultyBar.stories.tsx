import { Meta, StoryObj } from '@storybook/react';
import DifficultyBar from './DifficultyBar';

const meta: Meta<typeof DifficultyBar> = {
  title: 'atoms/DifficultyBar',
  component: DifficultyBar,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Easy: Story = {
  args: {
    difficulty: 'easy',
  },
  render: (args) => <DifficultyBar {...args}>객관식</DifficultyBar>,
};

export const Normal: Story = {
  args: {
    difficulty: 'normal',
  },
  render: (args) => <DifficultyBar {...args}>객관식</DifficultyBar>,
};

export const Hard: Story = {
  args: {
    difficulty: 'hard',
  },
  render: (args) => <DifficultyBar {...args}>객관식</DifficultyBar>,
};
