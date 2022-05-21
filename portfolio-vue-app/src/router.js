import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/projects', component: ProjectsPage, name: 'Projects' },
  { path: '/contact', component: ContactPage, name: 'Contact' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
