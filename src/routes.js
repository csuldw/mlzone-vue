import Hello from './components/Home.vue'
import Page from '@/components/Page.vue'
import Post from '@/components/Post.vue'
import BugManagement from './components/bugManagement/BugManagement.vue'
import UserDetail from '@/components/UserDetail'

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/index',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/page',
    name: 'Page',
    component: Page
  },
  {
    path: '/postPage/:pageTitle',
    name: 'PostPage',
    component: Page
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
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
