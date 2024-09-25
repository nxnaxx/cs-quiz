import { Meta, StoryObj } from '@storybook/react';
import IconFilledButton from './IconFilledButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof IconFilledButton> = {
  title: 'atoms/IconFilledButton',
  component: IconFilledButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryIconFilledButton: Story = {
  render: () => (
    <IconFilledButton>
      <FontAwesomeIcon icon={faArrowRight} />
    </IconFilledButton>
  ),
};

export const SmallIconFilledButton: Story = {
  render: () => (
    <IconFilledButton size="small">
      <FontAwesomeIcon icon={faArrowRight} />
    </IconFilledButton>
  ),
};

export const SecondaryIconFilledButton: Story = {
  render: () => (
    <IconFilledButton variant="secondary">
      <FontAwesomeIcon icon={faArrowRight} />
    </IconFilledButton>
  ),
};

export const DisabledIconFilledButton: Story = {
  render: () => (
    <IconFilledButton disabled>
      <FontAwesomeIcon icon={faArrowRight} />
    </IconFilledButton>
  ),
};
