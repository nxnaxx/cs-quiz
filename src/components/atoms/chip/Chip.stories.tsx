import { Meta, StoryObj } from '@storybook/react';
import Chip from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'atoms/Chip',
  component: Chip,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultChip: Story = {
  render: () => <Chip isActive={false}>객관식</Chip>,
};

export const PrimaryChip: Story = {
  render: () => <Chip isActive={true}>객관식</Chip>,
};

export const SmallChip: Story = {
  render: () => (
    <Chip size="small" isActive={true}>
      객관식
    </Chip>
  ),
};

export const SecondaryChip: Story = {
  render: () => (
    <Chip variant="secondary" isActive={true}>
      OX 퀴즈
    </Chip>
  ),
};
