import Versions from './components/Versions'
import icons from './assets/icons.svg'
import { Link, Route } from 'wouter'
import Sidebar from '@/components/Sidebar'
import Main from '@/pages/Main'
import SearchPage from './pages/Search'
const App = () => (
  <div className="flex gap-5">
    <Sidebar />
    <main className="ml-72 mr-6 w-full">
      <Route path="/" component={Main}></Route>
      <Route path="/search" component={SearchPage}></Route>
      {/* <Route path="/inbox" component={InboxPage} /> */}
    </main>
  </div>
)
export default App
