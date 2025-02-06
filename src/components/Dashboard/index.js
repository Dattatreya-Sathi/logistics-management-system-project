import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {IoSearch} from 'react-icons/io5'
import {BsFillPlusSquareFill} from 'react-icons/bs'
import {FaFilter} from 'react-icons/fa'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Table from '../Table'

import './index.css'

const data = [
  {
    id: uuidv4(),
    bidNumber: '#122345678123',
    createdBy: 'Sunder Yadav',
    startDate: '14/02/2024',
    time: '05:40 Pm',
    bidTimeRemaining: '7hr 20min',
    fromCity: 'Gurgaon',
    toCity: 'Mumbai',
    vehicleType: 'Truck',
    size: '20ft',
    body: 'Close body',
    noOfVehicle: 1,
    materialWeight: '4000 Kg',
    response: 4,
    assignedStaff: 'Mohit',
    assignedStaffNum: 5215001161264,
    details: {
      bidNumber: 16515120650125,
      createdBy: 'Sunder Yadav',
      fromTown: 'Manesar',
      fromDistrict: 'Gurugam',
      fromState: 'Haryana',
      loadingPoint: 'Ramchandra Raminiwas oil mill, Alwar, Rajasthan',
      toCity: 'Kotputli',
      toState: 'Rajastan',
      unloadingPoint: 'Ramachandra Ramniwas oil mill, Alwar, Rajasthan',
      vehicleLoadingDate: '17/02/2024',
      vehicleType: '20 ft Truck (Close Body)',
      material: 'Agricultural Products',
      weight: '14 Tonnes',
      requestDate: '15/02/2024',
      expiryDate: '15/02/2024',
      remarks: 'Urgent Delivery',
      assignedStaff: 'Rahul Pandey',
      phoneNumber: '+91 332423442442',
      targetPrice: 5000,
      bidders: 54,
      fuelType: 'CNG',
    },
  },
  {
    id: uuidv4(),
    bidNumber: '#122345678123',
    createdBy: 'Sunder Yadav',
    startDate: '14/02/2024',
    time: '05:40 Pm',
    bidTimeRemaining: '7hr 20min',
    fromCity: 'Gurgaon',
    toCity: 'Mumbai',
    vehicleType: 'Truck',
    size: '20ft',
    body: 'Close body',
    noOfVehicle: 1,
    materialWeight: '4000 Kg',
    response: 4,
    assignedStaff: 'Mohit',
    assignedStaffNum: 5215001161264,
    details: {
      bidNumber: 16515120650125,
      createdBy: 'Sunder Yadav',
      fromTown: 'Manesar',
      fromDistrict: 'Gurugam',
      fromState: 'Haryana',
      loadingPoint: 'Ramchandra Raminiwas oil mill, Alwar, Rajasthan',
      toCity: 'Kotputli',
      toState: 'Rajastan',
      unloadingPoint: 'Ramachandra Ramniwas oil mill, Alwar, Rajasthan',
      vehicleLoadingDate: '17/02/2024',
      vehicleType: '20 ft Truck (Close Body)',
      material: 'Agricultural Products',
      weight: '14 Tonnes',
      requestDate: '15/02/2024',
      expiryDate: '15/02/2024',
      remarks: 'Urgent Delivery',
      assignedStaff: 'Rahul Pandey',
      phoneNumber: '+91 332423442442',
      targetPrice: 5000,
      bidders: 54,
      fuelType: 'CNG',
    },
  },
  {
    id: uuidv4(),
    bidNumber: '#122345678123',
    createdBy: 'Sunder Yadav',
    startDate: '14/02/2024',
    time: '05:40 Pm',
    bidTimeRemaining: '7hr 20min',
    fromCity: 'Gurgaon',
    toCity: 'Mumbai',
    vehicleType: 'Truck',
    size: '20ft',
    body: 'Close body',
    noOfVehicle: 1,
    materialWeight: '4000 Kg',
    response: 4,
    assignedStaff: 'Mohit',
    assignedStaffNum: 5215001161264,
    details: {
      bidNumber: 16515120650125,
      createdBy: 'Sunder Yadav',
      fromTown: 'Manesar',
      fromDistrict: 'Gurugam',
      fromState: 'Haryana',
      loadingPoint: 'Ramchandra Raminiwas oil mill, Alwar, Rajasthan',
      toCity: 'Kotputli',
      toState: 'Rajastan',
      unloadingPoint: 'Ramachandra Ramniwas oil mill, Alwar, Rajasthan',
      vehicleLoadingDate: '17/02/2024',
      vehicleType: '20 ft Truck (Close Body)',
      material: 'Agricultural Products',
      weight: '14 Tonnes',
      requestDate: '15/02/2024',
      expiryDate: '15/02/2024',
      remarks: 'Urgent Delivery',
      assignedStaff: 'Rahul Pandey',
      phoneNumber: '+91 332423442442',
      targetPrice: 5000,
      bidders: 54,
      fuelType: 'CNG',
    },
  },
  {
    id: uuidv4(),
    bidNumber: '#122345678123',
    createdBy: 'Sunder Yadav',
    startDate: '14/02/2024',
    time: '05:40 Pm',
    bidTimeRemaining: '7hr 20min',
    fromCity: 'Gurgaon',
    toCity: 'Mumbai',
    vehicleType: 'Truck',
    size: '20ft',
    body: 'Close body',
    noOfVehicle: 1,
    materialWeight: '4000 Kg',
    response: 4,
    assignedStaff: 'Mohit',
    assignedStaffNum: 5215001161264,
    details: {
      bidNumber: 16515120650125,
      createdBy: 'Sunder Yadav',
      fromTown: 'Manesar',
      fromDistrict: 'Gurugam',
      fromState: 'Haryana',
      loadingPoint: 'Ramchandra Raminiwas oil mill, Alwar, Rajasthan',
      toCity: 'Kotputli',
      toState: 'Rajastan',
      unloadingPoint: 'Ramachandra Ramniwas oil mill, Alwar, Rajasthan',
      vehicleLoadingDate: '17/02/2024',
      vehicleType: '20 ft Truck (Close Body)',
      material: 'Agricultural Products',
      weight: '14 Tonnes',
      requestDate: '15/02/2024',
      expiryDate: '15/02/2024',
      remarks: 'Urgent Delivery',
      assignedStaff: 'Rahul Pandey',
      phoneNumber: '+91 332423442442',
      targetPrice: 5000,
      bidders: 54,
      fuelType: 'CNG',
    },
  },
  {
    id: uuidv4(),
    bidNumber: '#122345678123',
    createdBy: 'Sunder Yadav',
    startDate: '14/02/2024',
    time: '05:40 Pm',
    bidTimeRemaining: '7hr 20min',
    fromCity: 'Gurgaon',
    toCity: 'Mumbai',
    vehicleType: 'Truck',
    size: '20ft',
    body: 'Close body',
    noOfVehicle: 1,
    materialWeight: '4000 Kg',
    response: 4,
    assignedStaff: 'Mohit',
    assignedStaffNum: 5215001161264,
    details: {
      bidNumber: 16515120650125,
      createdBy: 'Sunder Yadav',
      fromTown: 'Manesar',
      fromDistrict: 'Gurugam',
      fromState: 'Haryana',
      loadingPoint: 'Ramchandra Raminiwas oil mill, Alwar, Rajasthan',
      toCity: 'Kotputli',
      toState: 'Rajastan',
      unloadingPoint: 'Ramachandra Ramniwas oil mill, Alwar, Rajasthan',
      vehicleLoadingDate: '17/02/2024',
      vehicleType: '20 ft Truck (Close Body)',
      material: 'Agricultural Products',
      weight: '14 Tonnes',
      requestDate: '15/02/2024',
      expiryDate: '15/02/2024',
      remarks: 'Urgent Delivery',
      assignedStaff: 'Rahul Pandey',
      phoneNumber: '+91 332423442442',
      targetPrice: 5000,
      bidders: 54,
      fuelType: 'CNG',
    },
  },
]

const Dashboard = () => {
  const [searchInput, onChangeSearch] = useState('')
  const [bids, onChangeBid] = useState(data)
  const onSearchInput = event => {
    onChangeSearch(event.target.value)
  }
  const filteredBids = bids.filter(
    bid =>
      bid.bidNumber.toLowerCase().includes(searchInput.toLowerCase()) ||
      bid.fromCity.toLowerCase().includes(searchInput.toLowerCase()) ||
      bid.toCity.toLowerCase().includes(searchInput.toLowerCase()) ||
      bid.vehicleType.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <>
      <Header />
      <div className="dashboard-parent-container">
        <Sidebar />
        <div className="dashboard-child-container">
          <div className="dashbord-nav-container">
            <div className="dashboard-nav-tabs-container">
              <ul className="dashbord-nav-ul">
                <li className="text-primary">Live</li>
                <li>Results</li>
                <li>History</li>
              </ul>
              <div className="search-container">
                <IoSearch />
                <input
                  type="search"
                  className="search-bar"
                  placeholder="Search"
                  onChange={onSearchInput}
                  value={searchInput}
                />
              </div>
            </div>
            <div className="create-container">
              <button className="create-button">Create</button>
              <BsFillPlusSquareFill />
            </div>
          </div>
          <div className="status-container">
            <ul className="status-tabs-start-ul">
              <li className="status-items">Live (30)</li>
              <li className="text-success status-items">Responded (30)</li>
              <li className="text-danger status-items">Unresponded (30)</li>
            </ul>
            <ul className="status-tabs-end-ul">
              <li className="text-dark status-items">Bid Created</li>
              <li className="status-items">Today</li>
              <li className="status-items">Yesterday</li>
              <li className="d-flex align-items-center status-items">
                <select className="form-select select-dropdown">
                  <option value="Calendar" selected>
                    Calendar
                  </option>
                  <option value="City">City</option>
                </select>
              </li>
              <li>
                <FaFilter color={'#113871'} />
              </li>
            </ul>
          </div>
          <div className="table-container">
            <Table bids={filteredBids} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
