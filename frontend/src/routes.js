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
const Jobs = React.lazy(() => import('./pages/admin/jobs'))

const routes = [
  { path: '/admin/users', name: 'User List', component: Users },
  { path: '/admin/courses', name: 'Courses', component: Courses },
  { path: '/admin/batches', name: 'Batches', component: Batches },
  { path: '/admin/dashboard', name: 'DashBoard', component: DashBoard },
  { path: '/admin/students', name: 'Student', component: Students },
  { path: '/admin/aptitudes', name: 'Aptitude Test', component: Quiz },
  { path: '/admin/exams', name: 'Exams', component: Quiz },
  { path: '/admin/counselling', name: 'Counseling', component: Counselling },
  { path: '/admin/skills', name: 'Skills', component: Skills },
  { path: '/admin/jobs', name: 'Jobs', component: Jobs },
  { path: '/', name: 'Home', component: Home },
]

export default routes
