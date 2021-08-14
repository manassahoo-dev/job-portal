import React from 'react'

const Users = React.lazy(() => import('./pages/admin/users/index'))
const Home = React.lazy(() => import('./pages/index'))
const Courses = React.lazy(() => import('./pages/admin/courses/courses'))
const AdminDashBoard = React.lazy(() => import('./pages/admin/dashboard/dashboard'))
const routes = [
  { path: '/admin/users', name: 'User List', component: Users },
  { path: '/admin/courses', name: 'Courses', component: Courses },
  { path: '/admin/dashboard', name: 'DashBoard', component: AdminDashBoard },
  { path: '/', name: 'Home', component: Home },
]

export default routes
