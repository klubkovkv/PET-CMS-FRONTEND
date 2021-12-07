import React, { FC, memo, useMemo } from 'react';

export interface CheckboxProps {
    type?: 'roll' | 'radio';
    className?: string;
    value: boolean;
    children?: JSX.Element | string;
    disabled?: boolean;
    onChange: (val: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = props => {
    const { className = '', value, type, disabled, onChange, children } = props;
    const classNames = useMemo(() => {
        let classes = className + ' ';
        if (value) {
            classes += 'isActive';
        }
        if (type) {
            classes += `${type === 'roll' ? 'checkboxRoll' : 'checkboxRadio'}`;
        }
        if (disabled) {
            classes += 'checkboxDisabled';
        }
        return classes;
    }, [className, type, value, disabled]);

    return (
        <label className={`checkbox ${classNames}`}>
            <span className="checkbox__checkboxCustom" />
            <input
                className="checkboxCustom__checkboxInput"
                type="checkbox"
                checked={value}
                disabled={disabled}
                onChange={() => onChange(!value)}
            />
            {children && (
                <span className="checkboxCustom__checkboxText">{children}</span>
            )}
        </label>
    );
};

export default memo(Checkbox);
