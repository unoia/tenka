import {styles} from './Grid.module.css';
import React from 'react';
import cx from 'clsx';

interface Props {
  childen?: JSX.Element | null
  className?: string
}

const Grid: React.FC<Props> = ({
  children,
  className,
  ...props
  }) => {
  return (
    <div className={cx(styles.root)} {...props}>
      {children}
    </div>
  )
}

export default Grid