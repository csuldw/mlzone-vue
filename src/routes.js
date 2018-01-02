import Hello from './components/Home.vue'
import MLPage from '@/components/MLPage.vue'
import Archives from '@/components/Archives.vue'
import QueryPage from '@/components/QueryPage.vue'
import OpenSource from '@/components/OpenSource.vue'
import Post from '@/components/Post.vue'
import BugManagement from './components/bugManagement/BugManagement.vue'
import UserDetail from '@/components/UserDetail'
import Links from '@/components/Links'
import About from '@/components/About.vue'
const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/mlPage',
    name: 'MLPage',
    component: MLPage
  },
  {
    path: '/openSource',
    name: 'OpenSource',
    component: OpenSource
  },
  {
    path: '/postPage/:categoryName',
    name: 'PostPage',
    component: MLPage
  },
  {
    path: '/query',
    name: 'QueryPage',
    component: QueryPage
  },
  {
    path: '/archives',
    name: 'Archives',
    component: Archives
  },
  {
    path: '/postDetail/:articleId',
    name: 'PostDetail',
    component: Post
  },
  {
    path: '/userDetail',
    name: 'UserDetail',
    component: UserDetail //resolve => require(['components/UserDetail.vue'], resolve).default
  },
  {
    path: '/links',
    name: 'links',
    component: Links
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]
export default routes
