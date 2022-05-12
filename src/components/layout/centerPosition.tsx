import React, { FC } from 'react'
import { Header } from '../header'
import styles from './layout.module.scss'

interface ILayoutProps {
  children?: React.ReactNode
  withHeader?: boolean
}

export const CenterLayout: FC<ILayoutProps> = ({
  children,
  withHeader = false,
}) => {
  return (
    <div className={styles.wrapper}>
      {withHeader && <Header />}
      {children}
    </div>
  )
}
