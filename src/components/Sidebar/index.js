import {withRouter} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import SidebarTab from '../SidebarTab'
import './index.css'

const tabButtons = [
  {id: uuidv4(), displayText: 'Bid', path: '/dashboard'},
  {id: uuidv4(), displayText: 'POD', path: '/pod'},
  {id: uuidv4(), displayText: 'Vendor', path: '/vendor'},
  {id: uuidv4(), displayText: 'User', path: '/user'},
]

const bottomsTabs = [
  {id: uuidv4(), displayText: 'Settings', path: '/settings'},
  {id: uuidv4(), displayText: 'Profile', path: '/profile'},
  {id: uuidv4(), displayText: 'Contact Us', path: '/contact'},
  {id: uuidv4(), displayText: 'Logout', path: '/logout'},
]

const Sidebar = props => {
  const {location} = props // Access the current path from `location`
  const currentPath = location.pathname
  return (
    <div className="sidebar-container shadow">
      <div className="sidebar-top-container">
        <div className="profile-parent-container">
          <div className="profile-container"></div>
          <h1 className="logo-heading">LOGO</h1>
        </div>
        <ul className="sidebar-ul">
          {tabButtons.map(eachTab => (
            <SidebarTab
              tab={eachTab}
              key={eachTab.id}
              isClicked={eachTab.path === currentPath}
            />
          ))}
        </ul>
      </div>
      <ul className="sidebar-other-settings-ul">
        {bottomsTabs.map(eachTab => (
          <SidebarTab
            tab={eachTab}
            key={eachTab.id}
            isClicked={eachTab.path === currentPath}
          />
        ))}
      </ul>
    </div>
  )
}

export default withRouter(Sidebar)
