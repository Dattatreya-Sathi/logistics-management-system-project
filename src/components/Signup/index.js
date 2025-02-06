import {useState} from 'react'
import AppContext from '../../context/AppContext'
import './index.css'

const Signup = props => {
  const [userName, changeUserName] = useState('')
  const [email, changeEmail] = useState('')
  const [password, changePassword] = useState('')
  const [error, setError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const onChangeUserName = event => changeUserName(event.target.value)
  const onChangeEmail = event => changeEmail(event.target.value)
  const onChangePassword = event => changePassword(event.target.value)

  return (
    <AppContext.Consumer>
      {value => {
        const {onAddUserLogin, usersLoginDetails} = value
        const onSubmitDetails = event => {
          event.preventDefault()
          // Check if the username or email already exists in the usersLoginDetails array
          const isValidUserName = userName.trim().length > 0
          const isValidPassword = password.trim().length > 0
          if (!isValidUserName) {
            setError('Username cannot be empty')
            return
          }

          if (!isValidPassword) {
            setPasswordError('Password cannot be empty')
            return
          }

          const isUsernameExists = usersLoginDetails.some(
            user => user.userName === userName,
          )

          if (isUsernameExists) {
            setError('Username already exists.')
          } else {
            setError('')
            const newUser = {userName, email, password}
            onAddUserLogin(newUser)
            const {history} = props
            history.replace('/dashboard') // Redirect to dashboard after successful signup
          }
        }

        return (
          <div className="signup-bg-container">
            <div className="signup-details-container shadow">
              <h1 className="signup-heading">
                Signup for Logistics Management
              </h1>
              <form onSubmit={onSubmitDetails} className="form-container">
                <label htmlFor="userName" className="signup-label">
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
                {error && <p className="error-msg">{`*${error}`}</p>}
                <label htmlFor="email" className="signup-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={onChangeEmail}
                  placeholder="Enter Email"
                  className="form-control"
                  required
                />
                <label htmlFor="password" className="signup-label">
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
                {passwordError && (
                  <p className="error-msg">{`*${passwordError}`}</p>
                )}
                <button className="btn btn-primary" type="submit">
                  Signup
                </button>
              </form>
            </div>
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}

export default Signup
