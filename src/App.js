import {useState, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import AppContext from './context/AppContext'
import Login from './components/Login'
import Signup from './components/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './components/Dashboard'
import PodRoute from './components/PodRoute'
import UserRoute from './components/UserRoute'
import VendorRoute from './components/VendorRoute'
import Header from './components/Header'
import './App.css'

const App = () => {
  const [usersLoginDetails, addUserDetail] = useState([])

  // Retrieve saved users from localStorage or state
  useEffect(() => {
    const savedUsers = localStorage.getItem('usersLoginDetails')
    if (savedUsers) {
      addUserDetail(JSON.parse(savedUsers))
    }
  }, [])

  const onAddUserLogin = userCredentials => {
    addUserDetail([...usersLoginDetails, userCredentials])
    localStorage.setItem(
      'usersLoginDetails',
      JSON.stringify([...usersLoginDetails, userCredentials]),
    )
  }

  return (
    <AppContext.Provider
      value={{
        usersLoginDetails,
        onAddUserLogin,
      }}
    >
      <>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/pod" component={PodRoute} />
          <ProtectedRoute exact path="/vendor" component={VendorRoute} />
          <ProtectedRoute exact path="/user" component={UserRoute} />
          <Redirect to="/login" />
        </Switch>
      </>
    </AppContext.Provider>
  )
}

export default App
