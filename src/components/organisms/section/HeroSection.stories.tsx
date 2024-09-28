import { Meta, StoryObj } from '@storybook/react';
import HeroSection from './HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'organisms/Hero',
  component: HeroSection,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Hero: Story = {
  render: () => <HeroSection />,
};
