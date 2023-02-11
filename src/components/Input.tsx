import {useState} from "react";
import styles from "./Input.module.scss";
import {createSpacingClass, Spacing} from "../styling/styling";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export type InputSpacing = Extract<Spacing, Spacing.Small | Spacing.Large>;

export interface InputProps {
    spacing?: InputSpacing
}

export const Input = ({spacing}: InputProps) => {
    const [value, setValue] = useState<string>('');

    return <input type="text" onChange={(e) => setValue(e.target.value)} value={value}
                  className={cx('input', createSpacingClass('input', spacing || Spacing.Small))}/>
}