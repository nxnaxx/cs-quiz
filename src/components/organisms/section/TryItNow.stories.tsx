import { Meta, StoryObj } from '@storybook/react';
import TryItNow from './TryItNow';

const meta: Meta<typeof TryItNow> = {
  title: 'organisms/TryItNow',
  component: TryItNow,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TryIt: Story = {
  render: () => <TryItNow />,
};
