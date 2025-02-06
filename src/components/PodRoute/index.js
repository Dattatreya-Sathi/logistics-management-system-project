import Sidebar from '../Sidebar'
import Header from '../Header'
import './index.css'

const PodRoute = () => (
  <>
    <Header />
    <div className="pod-bg-container">
      <Sidebar />
      <div className="pod-child-container">
        <h1 className="pod-heading">POD Content</h1>
      </div>
    </div>
  </>
)

export default PodRoute
