import { Router, Route, Switch, BaseLocationHook } from 'wouter'
import { useLocationProperty, navigate } from 'wouter/use-location'

import Sidebar from '@/components/Sidebar'
import Main from '@/pages/Main'
import SearchPage from '@/pages/Search'
import Details from '@/pages/Details'
const hashLocation = () => window.location.hash.replace(/^#/, '') || '/'
const hashNavigate = (to: string) => navigate('#' + to)

const useHashLocation = () => {
  const location = useLocationProperty(hashLocation)
  return [location, hashNavigate]
}

const App = () => (
  <Router hook={useHashLocation as BaseLocationHook}>
    <div className="flex gap-5">
      <Sidebar />
      <main className="ml-72 mr-6 w-full">
        <Switch>
          <Route path="/" component={Main}></Route>
          <Route path="/search" component={SearchPage}></Route>
          <Route path="/details/:id" component={Details}></Route>
          {/* <Route path="/inbox" component={InboxPage} /> */}
        </Switch>
      </main>
    </div>
  </Router>
)
export default App
