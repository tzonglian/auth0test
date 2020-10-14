import React from 'react'
import { useAuth0} from "@auth0/auth0-react"

const LogOutBtn = () => {
  const {logout, isAuthenticated } = useAuth0()

  return (
    isAuthenticated &&
    <div>
      <button onClick={()=>logout()}>log out</button>
    </div>
  )
}

export default LogOutBtn
