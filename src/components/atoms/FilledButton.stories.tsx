import { Meta, StoryObj } from '@storybook/react';
import FilledButton from './FillEdButton';

const meta: Meta<typeof FilledButton> = {
  title: 'organisms/FilledButton',
  component: FilledButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryFillButton: Story = {
  render: () => <FilledButton>시작하기</FilledButton>,
};

export const SecondaryFillButton: Story = {
  render: () => <FilledButton variant="secondary">시작하기</FilledButton>,
};

export const DisabledFillButton: Story = {
  render: () => <FilledButton disabled>시작하기</FilledButton>,
};
