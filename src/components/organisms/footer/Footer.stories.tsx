import { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'organisms/Footer',
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SampleFooter: Story = {
  render: () => <Footer />,
};
