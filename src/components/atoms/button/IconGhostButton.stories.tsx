import { Meta, StoryObj } from '@storybook/react';
import IconFilledButton from './IconFilledButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import IconGhostButton from './IconGhostButton';

const meta: Meta<typeof IconGhostButton> = {
  title: 'atoms/IconGhostButton',
  component: IconGhostButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryIconGhostButton: Story = {
  render: () => (
    <IconGhostButton>
      <FontAwesomeIcon icon={faArrowRight} />
    </IconGhostButton>
  ),
};

export const SmallIconGhostButton: Story = {
  render: () => (
    <IconGhostButton size="small">
      <FontAwesomeIcon icon={faArrowRight} />
    </IconGhostButton>
  ),
};

export const SecondaryIconGhostButton: Story = {
  render: () => (
    <IconGhostButton variant="secondary">
      <FontAwesomeIcon icon={faArrowRight} />
    </IconGhostButton>
  ),
};

export const DisabledIconGhostButton: Story = {
  render: () => (
    <IconGhostButton disabled>
      <FontAwesomeIcon icon={faArrowRight} />
    </IconGhostButton>
  ),
};
