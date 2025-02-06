import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import AppContext from '../../context/AppContext'
import './index.css'

const Login = () => {
  const [userName, changeUserName] = useState('')
  const [password, changePassword] = useState('')
  const history = useHistory()

  const onChangeUserName = event => changeUserName(event.target.value)
  const onChangePassword = event => changePassword(event.target.value)

  const onSubmitDetails = (event, onAddUserLogin, usersLoginDetails) => {
    event.preventDefault()

    const user = usersLoginDetails.find(
      user => user.userName === userName && user.password === password,
    )
    console.log(`checking user${user}`)

    if (user) {
      history.replace('/dashboard') // Redirect to dashboard
    } else {
      alert('Invalid credentials! Please try again.')
    }
  }

  const onClickSignup = () => {
    history.push('/signup')
  }

  return (
    <AppContext.Consumer>
      {({usersLoginDetails, onAddUserLogin}) => (
        <div className="login-bg-container">
          <div className="login-details-container shadow">
            <h1 className="login-heading">Logistics Management System</h1>
            <form
              onSubmit={event =>
                onSubmitDetails(event, onAddUserLogin, usersLoginDetails)
              }
              className="form-container"
            >
              <label htmlFor="userName" className="user-name">
                User Name
              </label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={onChangeUserName}
                placeholder="Enter Name"
                className="form-control"
                required
              />
              <label htmlFor="password" className="user-name">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={onChangePassword}
                placeholder="Enter Password"
                className="form-control"
                required
              />
              <div className="login-buttons-container">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
                <button
                  className="btn btn-success ml-3"
                  type="submit"
                  onClick={onClickSignup}
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  )
}

export default Login
