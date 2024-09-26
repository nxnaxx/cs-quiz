import { Meta, StoryObj } from '@storybook/react';
import HeroSection from './HeroSection';
import TryItNow from './TryItNow';
import HowToPlay from './HowToPlay';

const meta: Meta<typeof HeroSection> = {
  title: 'organisms/Hero',
  component: HeroSection,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Hero: Story = {
  render: () => <HeroSection />,
};
