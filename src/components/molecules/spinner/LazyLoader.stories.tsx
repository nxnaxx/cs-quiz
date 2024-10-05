import { Meta, StoryObj } from '@storybook/react';
import LazyLoader from './LazyLoader';

const meta: Meta<typeof LazyLoader> = {
  title: 'molecules/LazyLoader',
  component: LazyLoader,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Spinner: Story = {
  render: () => <LazyLoader />,
};
