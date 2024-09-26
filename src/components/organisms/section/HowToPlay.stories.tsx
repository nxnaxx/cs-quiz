import { Meta, StoryObj } from '@storybook/react';
import HowToPlay from './HowToPlay';

const meta: Meta<typeof HowToPlay> = {
  title: 'organisms/HowToPlay',
  component: HowToPlay,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Play: Story = {
  render: () => <HowToPlay />,
};
