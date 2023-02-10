import classnames from "classnames/bind";
import styles from "./Button.module.scss";
import {createSpacingClass, Spacing} from "./styling";

const cx = classnames.bind(styles);


export type ButtonSpacing = Extract<Spacing, Spacing.Small | Spacing.Large | Spacing.ExtraLarge>

export interface ButtonProps {
    spacing?: ButtonSpacing;
}

export const Button = ({spacing}: ButtonProps) => {
    return <button className={cx('btn', createSpacingClass('btn', spacing))}>Click me</button>;
}

