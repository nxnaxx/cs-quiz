import { Meta, StoryObj } from '@storybook/react';
import LinearProgress from './LinearProgress';

const meta: Meta<typeof LinearProgress> = {
  title: 'molecules/LinearProgress',
  component: LinearProgress,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LinearProgressBar: Story = {
  args: {
    currentSteps: 2,
    totalSteps: 10,
  },
  render: (args) => (
    <div style={{ width: '720px' }}>
      <LinearProgress {...args} />
    </div>
  ),
};
