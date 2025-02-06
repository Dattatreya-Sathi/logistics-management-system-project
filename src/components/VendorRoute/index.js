import Sidebar from '../Sidebar'
import Header from '../Header'
import './index.css'

const VendorRoute = () => (
  <>
    <Header />
    <div className="vendor-bg-container">
      <Sidebar />
      <div className="vendor-child-container">
        <h1 className="vendor-heading">Vendor Content</h1>
      </div>
    </div>
  </>
)

export default VendorRoute
