import React, { FC } from 'react'
import { Header } from '../header'

interface ILayoutProps {
  children?: React.ReactNode
  withHeader?: boolean
}

export const Layout: FC<ILayoutProps> = ({ children, withHeader = true }) => {
  return (
    <>
      {withHeader && <Header />}
      {children}
    </>
  )
}
