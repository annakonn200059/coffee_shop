import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Main = lazy(() =>
  import('pages/main').then((module) => ({ default: module.MainPage }))
)

const Error = lazy(() =>
  import('pages/error').then((module) => ({ default: module.ErrorPage }))
)

export const Router = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Main />} />

      <Route path={'*'} element={<Error />} />
    </Routes>
  )
}
