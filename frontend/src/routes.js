import React from 'react'

const Users = React.lazy(() => import('./pages/admin/users/index'))

const routes = [
  { path: '/admin/users', name: 'User List', component: Users },
]

export default routes
