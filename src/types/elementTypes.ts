export type ElementSize = 'large' | 'medium' | 'small';
export type ElementVariant = 'primary' | 'secondary';

export interface ButtonProps {
  size?: ElementSize;
  variant?: ElementVariant;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface TagProps {
  size?: ElementSize;
  variant?: ElementVariant;
  children: string;
}

export interface ChipProps {
  size?: ElementSize;
  variant?: ElementVariant;
  isActive: boolean;
  children: string;
}
