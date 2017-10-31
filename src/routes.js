import Hello from '@/components/Hello.vue'
import BugManagement from '@/components/BugManagement.vue'
import UserDetail from '@/components/UserDetail'

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/projectManagement',
    name: 'BugManagement',
    component: BugManagement
  },
  {
    path: '/userDetail',
    name: 'UserDetail',
    component: UserDetail //resolve => require(['components/UserDetail.vue'], resolve).default
  }
]
export default routes
