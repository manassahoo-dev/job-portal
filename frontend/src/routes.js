import React from 'react'

const Users = React.lazy(() => import('./pages/admin/users/index'))
const Home = React.lazy(() => import('./pages/index'))
const Courses = React.lazy(() => import('./pages/admin/courses'))
const Batches = React.lazy(() => import('./pages/admin/batches'))
const DashBoard = React.lazy(() => import('./pages/admin/dashboard'))
const Students = React.lazy(() => import('./pages/admin/students'))
const Quiz = React.lazy(() => import('./pages/admin/quizes'))
const Counselling = React.lazy(() => import('./pages/admin/counselling'))
const Skills = React.lazy(() => import('./pages/admin/skills'))

const routes = [
  { path: '/admin/dashboard', name: 'Dashboard', component: DashBoard },
  { path: '/admin/courses', name: 'Courses', component: Courses },
  { path: '/admin/batches', name: 'Batches', component: Batches },
  { path: '/admin/students', name: 'Students', component: Students },
  { path: '/admin/aptitudes', name: 'Aptitude Test', component: Quiz },
  { path: '/admin/exams', name: 'Exams', component: Quiz },
  { path: '/admin/counselling', name: 'Counseling', component: Counselling },
  { path: '/admin/skills', name: 'Skills', component: Skills },
  { path: '/', name: 'Home', component: Home },
]

export default routes
