import { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'atoms/Tag',
  component: Tag,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryTag: Story = {
  render: () => <Tag>객관식</Tag>,
};

export const SmallTag: Story = {
  render: () => <Tag size="small">객관식</Tag>,
};

export const SecondaryTag: Story = {
  render: () => <Tag variant="secondary">OX 퀴즈</Tag>,
};
