import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Preloader } from '../components/preloader'

const Main = lazy(() =>
  import('pages/main').then((module) => ({ default: module.MainPage }))
)

const Error = lazy(() =>
  import('pages/error').then((module) => ({ default: module.ErrorPage }))
)

export const Router = () => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <Suspense fallback={<Preloader />}>
            <Main />
          </Suspense>
        }
      />

      <Route path={'*'} element={<Error />} />
    </Routes>
  )
}
