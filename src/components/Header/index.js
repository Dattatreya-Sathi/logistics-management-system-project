import {v4 as uuidv4} from 'uuid'
import {useHistory, withRouter} from 'react-router-dom'
import NavTabs from '../NavTabs'
import './index.css'

const tabButtons = [
  {id: uuidv4(), displayText: 'Bid', path: '/dashboard'},
  {id: uuidv4(), displayText: 'POD', path: '/pod'},
  {id: uuidv4(), displayText: 'Vendor', path: '/vendor'},
  {id: uuidv4(), displayText: 'User', path: '/user'},
]

const Header = props => {
  const {location} = props // It will Access the current path from `location`
  const currentPath = location.pathname
  const history = useHistory()
  const onClickTab = () => {
    history.replace('/login')
  }
  return (
    <nav className="navbar navbar-expand-md shadow-sm bg-white  fixed-top">
      <div className="container-fluid d-flex justify-content-end">
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="sidebar offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header border-bottom">
            <div className="profile-container" />
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              LOGO
            </h5>
            <button
              type="button"
              className="btn-close shadow-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {tabButtons.map(eachTab => (
                <NavTabs
                  tab={eachTab}
                  key={eachTab.id}
                  isClicked={eachTab.path === currentPath}
                />
              ))}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Freight EG
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" type="button">
                      Action
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Another action
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </li>
                </ul>
                <ul className="nav-sidebar-other-settings-ul">
                  <li className="nav-item">
                    <button className="nav-link" type="button">
                      Settings
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" type="button">
                      Profile
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" type="button">
                      Contact Us
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="nav-link" onClick={onClickTab}>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
