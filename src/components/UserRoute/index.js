import Sidebar from '../Sidebar'
import Header from '../Header'
import './index.css'

const UserRoute = () => (
  <>
    <Header />
    <div className="user-bg-container">
      <Sidebar />
      <div className="user-child-container">
        <h1 className="user-heading">User Content</h1>
      </div>
    </div>
  </>
)

export default UserRoute
