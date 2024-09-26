import { Meta, StoryObj } from '@storybook/react';
import FilledButton from './FilledButton';

const meta: Meta<typeof FilledButton> = {
  title: 'atoms/FilledButton',
  component: FilledButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryFilledButton: Story = {
  render: () => <FilledButton>시작하기</FilledButton>,
};

export const LargeFilledButton: Story = {
  render: () => <FilledButton size="large">시작하기</FilledButton>,
};

export const SmallFilledButton: Story = {
  render: () => <FilledButton size="small">시작하기</FilledButton>,
};

export const SecondaryFilledButton: Story = {
  render: () => <FilledButton variant="secondary">시작하기</FilledButton>,
};

export const DisabledFilledButton: Story = {
  render: () => <FilledButton disabled>시작하기</FilledButton>,
};
