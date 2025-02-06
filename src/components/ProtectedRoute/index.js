import {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AppContext from '../../context/AppContext'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const {usersLoginDetails} = useContext(AppContext)
  const isLoggedIn = usersLoginDetails.length > 0 // Check if there are users in the login details

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

export default ProtectedRoute
