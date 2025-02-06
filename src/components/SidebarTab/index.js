import {Link, useHistory} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {TbTableFilled} from 'react-icons/tb'
import './index.css'

const SidebarTab = props => {
  const {tab, isClicked} = props
  const {displayText, path} = tab
  const history = useHistory()
  const onClickTab = () => {
    if (path === '/logout') {
      history.replace('/login')
    }
  }
  return (
    <li
      className={`nav-item mb-3 ${
        isClicked ? 'selectedSidebarItem' : 'sidebarItem'
      }`}
    >
      <Link to={path} className="link">
        <div
          className={`sidebarTabContainer ${
            isClicked && 'selectedSidebarContainer'
          }`}
        >
          <TbTableFilled className="sidebar-tab-logo" />
          <button className="nav-link" onClick={onClickTab}>
            {displayText}
          </button>
        </div>
      </Link>
    </li>
  )
}

export default withRouter(SidebarTab)
