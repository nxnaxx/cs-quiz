import { Meta, StoryObj } from '@storybook/react';
import CircularProgress from './CircularProgress';

const meta: Meta<typeof CircularProgress> = {
  title: 'molecules/CircularProgress',
  component: CircularProgress,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CircularProgressBar: Story = {
  args: {
    progress: 75,
  },
  render: (args) => <CircularProgress {...args} />,
};
