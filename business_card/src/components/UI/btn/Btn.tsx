import type { FC, ButtonHTMLAttributes, MouseEventHandler} from "react";
import cls from "./Button.module.css";

export type BtnStyle = "black" | "white" | "primary" | "secondary" | "danger";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btn_style?: BtnStyle;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onDoubleClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  id?: string;
  name?: string;
  title?: string;
  style?: React.CSSProperties;
}

export const Button: FC<ButtonProps> = ({
  btn_style = "primary",
  className,
  ...props
}) => {
  const styleClass = cls[btn_style] || "";

  return (
    <button className={`${styleClass} ${className || ""}`} {...props}>
    </button>
  );
};
