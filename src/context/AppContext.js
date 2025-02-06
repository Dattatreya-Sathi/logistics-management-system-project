import React from 'react'

const AppContext = React.createContext({
  usersLoginDetails: [],
  onAddUserLogin: () => {},
})

export default AppContext
