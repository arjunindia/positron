import Versions from './components/Versions'
import icons from './assets/icons.svg'
import { Link, Route } from 'wouter'
const App = () => (
  <div>
    <Link href="/about">
      <a className="link">Profile</a>
    </Link>

    <Route path="/about">About Us</Route>
    <Route path="/users/:name">{(params) => <div>Hello, {params.name}!</div>}</Route>
    {/* <Route path="/inbox" component={InboxPage} /> */}
  </div>
)
export default App
