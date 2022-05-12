import styles from './main.module.scss'
import { CoffeeCard } from '../../ui/card'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import React, { FC } from 'react'
import { ICoffeeItem } from 'types/coffee'

interface ICoffeeList {
  coffeeList: ICoffeeItem[]
}

export const CoffeeList: FC<ICoffeeList> = ({ coffeeList }: ICoffeeList) => {
  return (
    <Box className={styles.coffee_box}>
      {coffeeList.length > 0 ? (
        coffeeList.map((coffeeItem) => (
          <CoffeeCard key={coffeeItem.id} data={coffeeItem} />
        ))
      ) : (
        <Typography variant="h5" color="secondary">
          К сожалению, мы не нашли ни одного кофе.
        </Typography>
      )}
    </Box>
  )
}
