import React, { FC, useEffect, useState } from 'react'
import styles from './main.module.scss'
import { ICoffeeItem } from 'types/coffee'
import { getCoffeeList } from 'api/coffee'
import Container from '@mui/material/Container'
import { Preloader } from '../../preloader'
import { Layout } from '../../layout'
import { CoffeeList } from './coffeeList'
import Typography from '@mui/material/Typography'

export const MainView: FC = () => {
  const [coffeeList, setCoffeeList] = useState<ICoffeeItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    setIsLoading(true)
    getCoffeeList()
      .then((resp) => setCoffeeList(resp))
      .then(() =>
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      )
      .catch((err) => {
        setIsLoading(false)
        setErrorMessage(err.response.data.message)
      })
  }, [])

  return (
    <Layout>
      <Container className={styles.container}>
        {isLoading ? <Preloader /> : <CoffeeList coffeeList={coffeeList} />}
        {errorMessage && (
          <Typography variant="h5" color="secondary">
            Ошибка
          </Typography>
        )}
      </Container>
    </Layout>
  )
}
