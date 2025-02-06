import React, {useState} from 'react'
import {FaCalendar} from 'react-icons/fa'
import {BsFillTruckFrontFill} from 'react-icons/bs'
import {BsFillBoxFill} from 'react-icons/bs'
import {IoPerson} from 'react-icons/io5'
import {FaPhone} from 'react-icons/fa6'
import {MdLocationOn} from 'react-icons/md'
import {GoDotFill} from 'react-icons/go'
import './index.css'

const Table = props => {
  const {bids} = props
  const [expandedRow, setExpandedRow] = useState(null)

  const toggleRow = id => {
    setExpandedRow(expandedRow === id ? null : id)
  }

  return (
    <div className="container mt-3">
      <table className="table table-bordered">
        <thead className="table-primary text-center">
          <tr>
            <th>S No.</th>
            <th>Bid Number Created By</th>
            <th>Start Date & Time</th>
            <th>Bid Time Remaining</th>
            <th>From City To City</th>
            <th>Vehicle Type, Size, Body, No.of Vehicle</th>
            <th>Material Weight (in Kg)</th>
            <th>Response</th>
            <th>Assigned Staff</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {bids.map((bid, index) => (
            <React.Fragment key={bid.id}>
              <tr>
                <td>{index + 1}</td>
                <td>
                  <strong>{bid.bidNumber}</strong>
                  <br />
                  <small>{bid.createdBy}</small>
                </td>
                <td>
                  {bid.startDate} <br />
                  <small>{bid.startTime}</small>
                </td>
                <td>{bid.bidTimeRemaining}</td>
                <td>
                  {bid.fromCity} <br />↓<br />
                  {bid.toCity}
                </td>
                <td>
                  {bid.vehicleType}, {bid.size}, {bid.body}, {bid.noOfVehicle}
                </td>
                <td>{bid.materialWeight}</td>
                <td>
                  {bid.response} <br />
                  <a href="#">View results</a>
                </td>
                <td>
                  {bid.assignedStaff}, {bid.assignedStaffNum}
                </td>
                <td>
                  <button
                    className="view-details-button"
                    onClick={() => toggleRow(bid.id)}
                  >
                    {expandedRow === bid.id ? 'View less ▲' : 'View Details ▼'}
                  </button>
                </td>
              </tr>

              {expandedRow === bid.id && (
                <tr className="expanded-container">
                  <td colSpan="10">
                    <div className="expanded-details d-flex p-3">
                      <div className="me-2">
                        <strong>Bid No:</strong> {bid.details.bidNumber} (
                        {bid.details.createdBy})
                        <br />
                        <strong>
                          <GoDotFill className="text-success me-2" />
                        </strong>{' '}
                        {bid.details.fromTown}, {bid.details.fromDistrict},{' '}
                        {bid.details.fromState}
                        <br />
                        <strong>Loading Point:</strong>{' '}
                        {bid.details.loadingPoint}
                        <br />
                        <strong>
                          <MdLocationOn className="text-danger me-2" />
                        </strong>{' '}
                        {bid.details.toCity}, {bid.details.toState}
                        <br />
                        <strong className="text-danger">
                          Unloading Point:
                        </strong>{' '}
                        {bid.details.unloadingPoint}
                      </div>
                      <br />
                      <div className="me-2">
                        <strong>
                          <FaCalendar className="me-2" />
                          Vehicle loading date:
                        </strong>{' '}
                        {bid.details.vehicleLoadingDate}
                        <br />
                        <strong>
                          <BsFillTruckFrontFill className="me-2" />
                          Vehicle Type:
                        </strong>
                        <span className="text-info">
                          {bid.details.vehicleType}
                        </span>
                        <span className="badge bg-success">
                          {bid.details.fuelType}
                        </span>
                        <br />
                        <strong>
                          <BsFillBoxFill className="me-2" /> Material:
                        </strong>
                        <span className="text-info">
                          {bid.details.material}
                        </span>{' '}
                        | <strong>Weight:</strong>{' '}
                        <span className="text-info">{bid.details.weight}</span>
                        <br />
                        <strong>
                          <FaCalendar className="me-2" />
                          Request Date:
                        </strong>{' '}
                        <span className="text-info">
                          {bid.details.requestDate}
                        </span>{' '}
                        |{' '}
                        <strong>
                          <FaCalendar className="me-2" />
                          Expiry Date:
                        </strong>{' '}
                        <span className="text-info">
                          {bid.details.expiryDate}
                        </span>
                        <br />
                        <strong>Remarks:</strong>{' '}
                        <span className="text-info">{bid.details.remarks}</span>
                      </div>
                      <br />
                      <div className="me-2">
                        <strong>
                          <IoPerson className="me-2" />
                          Assigned Staff:
                        </strong>{' '}
                        <span className="text-info">
                          {bid.details.assignedStaff}
                        </span>{' '}
                        <br />
                        <strong>
                          <FaPhone className="me-2" />
                          Phone:
                        </strong>{' '}
                        <span className="text-info">
                          {bid.details.phoneNumber}
                        </span>
                        <br />
                        <strong>Target Price:</strong>{' '}
                        <span className="text-info">
                          {bid.details.targetPrice}
                        </span>
                        <br />
                        <strong>Number of Bidders:</strong>{' '}
                        <span className="text-info">{bid.details.bidders}</span>
                        <br />
                        <span className="text-info">{'View Details'}</span>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
