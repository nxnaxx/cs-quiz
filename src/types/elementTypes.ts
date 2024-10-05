import { MouseEventHandler, ReactNode } from 'react';

export type ElementSize = 'large' | 'medium' | 'small';
export type ElementVariant = 'primary' | 'secondary';

interface BaseElementProps {
  size?: ElementSize;
  variant?: ElementVariant;
}

export interface ButtonProps extends BaseElementProps {
  disabled?: boolean;
  isFullWidth?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface TagProps extends BaseElementProps {
  children: string;
}

export interface ChipStyleProps extends BaseElementProps {
  isActive: boolean;
  children: string;
}

export interface ChipProps extends ChipStyleProps {
  onChipClick?: MouseEventHandler<HTMLDivElement>;
}
