import { Meta, StoryObj } from '@storybook/react';
import GhostButton from './GhostButton';

const meta: Meta<typeof GhostButton> = {
  title: 'atoms/GhostButton',
  component: GhostButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryGhostButton: Story = {
  render: () => <GhostButton>시작하기</GhostButton>,
};

export const LargeGhostButton: Story = {
  render: () => <GhostButton size="large">시작하기</GhostButton>,
};

export const SmallGhostButton: Story = {
  render: () => <GhostButton size="small">시작하기</GhostButton>,
};

export const SecondaryGhostButton: Story = {
  render: () => <GhostButton variant="secondary">시작하기</GhostButton>,
};

export const DisabledGhostButton: Story = {
  render: () => <GhostButton disabled>시작하기</GhostButton>,
};
