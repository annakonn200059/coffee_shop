import React from 'react'
import styles from './preloader.module.scss'
import { CenterLayout } from '../layout/centerPosition'

export const Preloader = () => {
  return (
    <CenterLayout>
      <div className={styles.loader} />
    </CenterLayout>
  )
}
