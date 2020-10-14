import React from 'react'
import {useAuth0} from "@auth0/auth0-react"
// import JSONPretty from "react-json-pretty"

const Profile = () => {
  //console.log(useAuth0())
  const {user, isAuthenticated} = useAuth0();
  return ( 
    isAuthenticated &&
    (<div >
      <img src={user.picture} alt={user.name}/>
      <h2>{user.name}</h2>
      <h3>Profile</h3>
      {/* Alternative way to  console.log*/}
      {/* {JSON.stringify(user,null,2)}  */}
      {/*Another Alternative to console.log*/}
      {/* <JSONPretty data={user} /> */}
    </div>)
  )
}

export default Profile
