import type {
  RadioGroupItemProps,
  RadioGroupProps,
} from '@radix-ui/react-radio-group';
import * as RadioGroup from '@radix-ui/react-radio-group';
import clsx from 'clsx';
import { type CSSProperties, forwardRef } from 'react';

import * as styles from './styles.css';

export const RadioButton = forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <RadioGroup.Item
        ref={ref}
        {...props}
        className={clsx(styles.radioButton, className)}
      >
        <span className={styles.radioUncheckedButton}>{children}</span>
        <RadioGroup.Indicator className={styles.radioButtonContent}>
          {children}
        </RadioGroup.Indicator>
      </RadioGroup.Item>
    );
  }
);
RadioButton.displayName = 'RadioButton';

export const RadioButtonGroup = forwardRef<
  HTMLDivElement,
  RadioGroupProps & { width?: CSSProperties['width'] }
>(({ className, style, width, ...props }, ref) => {
  return (
    <RadioGroup.Root
      ref={ref}
      className={clsx(styles.radioButtonGroup, className)}
      style={{ width, ...style }}
      {...props}
    ></RadioGroup.Root>
  );
});
RadioButtonGroup.displayName = 'RadioButtonGroup';
