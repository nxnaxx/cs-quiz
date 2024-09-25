export type ButtonSize = 'medium' | 'small';
export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
