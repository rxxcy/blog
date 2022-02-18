import React, { Component, lazy } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

import './style/app.scss'

const Home = lazy(() => import('./views/home'))
const Project = lazy(() => import('./views/project'))
const Dcim = lazy(() => import('./views/dcim'))
const Note = lazy(() => import('./views/note'))
const Music = lazy(() => import('./views/music'))
const Fan = lazy(() => import('./views/fan'))

const routes = [
  { id: 1, name: '主页', path: '/', component: Home },
  { id: 2, name: '项目', path: '/project', component: Project },
  { id: 3, name: '相册', path: '/dcim', component: Dcim },
  { id: 4, name: '笔记', path: '/note', component: Note },
  { id: 6, name: '音乐', path: '/music', component: Music },
  { id: 7, name: '追番', path: '/fan', component: Fan },
]

const SkkAppNav = () => {
  return (
    <nav>
      {
        routes.map(item => {
          return (
            <NavLink key={item.id} name={item.path.replace('/', 'x')} to={item.path}>
              <b>{item.name}</b>
            </NavLink>
          )
        })
      }
    </nav>
  )
}

const SkkRouterView = () => {
  return (
    <Routes>
      {
        routes.map(item => {
          return <Route key={item.id} path={item.path} element={
            <React.Suspense fallback={<>...</>}>
              <item.component />
            </React.Suspense>
          }></Route>
        })
      }
    </Routes>
  )
}

export default class App extends Component {

  render() {
    return (
      <>
        <header>
          <SkkAppNav />
        </header>
        <section>
          <SkkRouterView />
        </section>
        <footer className='footer'>
          <p>滇ICP备17008924号</p>
          <p>若许闲乘月于2021年冬</p>
          <p>由 html + div + css 驱动</p>
        </footer>
      </>
    )
  }
}
