import React from 'react'
import styles from "./Button.module.scss"
import { classnames } from '@/lib/helper/utils';

interface IButton extends React.ComponentPropsWithoutRef<'button'> {
    size?: 'sm' | 'md' | 'lg';
    background?: 'primary' | 'secondary';
    iconLeft?: React.ReactElement;
    iconRight?: React.ReactElement;
    children?: React.ReactNode;
    label?: string;
}

const Button = ({
    children,
    label,
    size = 'md',
    iconLeft,
    iconRight,
    background = 'primary',
    ...rest
}: IButton) => {
    const { className, ...attr } = rest
    const classNames = {
        btnRoot: classnames([
            styles.buttonRoot,
            styles[size],
            styles[background],
            className
        ]),
        btnLabel: classnames([
            styles.btnLabel,
        ])
    }

    return (
        <button className={classNames.btnRoot}
            {...attr}
        >
            <span className={classNames.btnLabel}>
                {label && <span>{label}</span>}
                {children}
            </span>
        </button>
    )
}

export default Button