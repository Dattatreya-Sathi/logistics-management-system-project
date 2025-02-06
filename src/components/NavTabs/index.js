import {Link} from 'react-router-dom'

import './index.css'

const NavTabs = props => {
  const {tab, isClicked} = props
  const {displayText, path} = tab
  return (
    <li className="nav-item">
      <Link to={path} className="link">
        <button type="button" className={`nav-link ${isClicked && 'selectedNavButton'}`}>
          {displayText}
        </button>
      </Link>
    </li>
  )
}

export default NavTabs
