import React, { FC, memo, useMemo } from 'react';

export interface BtnProps {
    type?: 'success' | 'danger' | '';
    error?: any;
    iconPosition?: 'first' | 'last' | 'top' | 'bottom';
    title?: string;
    onClick?: () => void;
    onDbClick?: () => void;
    iconSlot?: JSX.Element;
    className?: string;
    children?: JSX.Element | string;
    disabled?: boolean;
}

const Btn: FC<BtnProps> = props => {
    const {
        onClick,
        onDbClick,
        type,
        iconPosition,
        error,
        iconSlot,
        children,
        className = '',
        disabled = false,
    } = props;

    const buttonClasses = useMemo(() => {
        let classes = `${className} `;

        if (disabled) {
            classes += ' disabled ';
        }
        if (error) {
            classes += 'isError ';
        }
        if (type === 'success') {
            classes += 'btnSuccess ';
        }
        if (type === 'danger') {
            classes += 'btnDanger';
        }
        if (iconPosition === 'first') {
            classes += 'iconFirst ';
        }
        if (iconPosition === 'last' || !iconPosition) {
            classes += 'iconLast ';
        }
        if (iconPosition === 'top') {
            classes += 'iconTop ';
        }
        if (iconPosition === 'bottom') {
            classes += 'iconBottom ';
        }
        return classes;
    }, [disabled, error, type, iconPosition, className]);

    return (
        <button
            className={`btn ${buttonClasses}`}
            name="btn"
            onClick={onClick}
            onDoubleClick={onDbClick}
            disabled={disabled}
            type="button">
            {children || ''}
            {iconSlot && iconSlot}
            {error && <p className="btn__errorMessage">{error}</p>}
        </button>
    );
};

export default memo(Btn);
