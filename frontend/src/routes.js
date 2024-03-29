import React from 'react'

const Home = React.lazy(() => import('./pages/index'))
const Courses = React.lazy(() => import('./pages/admin/courses'))
const Batches = React.lazy(() => import('./pages/admin/batches'))
const DashBoard = React.lazy(() => import('./pages/admin/dashboard'))
const Students = React.lazy(() => import('./pages/admin/students'))
const Quiz = React.lazy(() => import('./pages/admin/quizes'))
const Counselling = React.lazy(() => import('./pages/admin/counselling'))
const Skills = React.lazy(() => import('./pages/admin/skills'))
const Jobs = React.lazy(() => import('./pages/admin/jobs'))
const Report = React.lazy(() => import('./pages/admin/reports'))
const Enquiry = React.lazy(() => import('./pages/admin/enquiry'))
const StudentView = React.lazy(() => import('./components/student/StudentView'))

const routes = [
  { path: '/admin/dashboard', name: 'Dashboard', component: DashBoard },
  { path: '/admin/courses', name: 'Courses', component: Courses },
  { path: '/admin/batches', name: 'Batches', component: Batches },
  { path: '/admin/aptitudes', name: 'Aptitude Test', component: Quiz },
  { path: '/admin/exams', name: 'Exams', component: Quiz },
  { path: '/admin/counselling', name: 'Counseling', component: Counselling },
  { path: '/admin/skills', name: 'Skills', component: Skills },
  { path: '/admin/jobs', name: 'Jobs', component: Jobs },
  { path: '/admin/reports', name: 'Report', component: Report },
  { path: '/admin/enquiry', name: 'Jobs', component: Enquiry },
  { path: '/admin/students/:id', name: 'StudentView', component: StudentView },
  { path: '/admin/students', name: 'Students', component: Students },
  { path: '/', name: 'Home', component: Home },
]

export default routes
