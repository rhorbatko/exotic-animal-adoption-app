import React from "react"
import { useLocation, Redirect, Switch, Route, Link } from "react-router-dom"

// const usePageViews = () => {
//   let location = useLocation()
//   React.useEffect(() => {
//     ga.send(["pageview", location.pathname])
//   }, [location])
// }

const NavBar = props => {
  let location = useLocation()
  console.log(location)
  return (
    <div>
      <div className="top-bar">
        <Link to="/pet-types">Animal Types</Link>
        <Link to="/pet-types/1">Mammals</Link>
        <Link to="/pet-types/2">Reptiles</Link>
        <Link to="/pet-types/3">Fish</Link>
        <Link to="/pet-types/4">Birds</Link>
      </div>
    </div>
  )
}

export default NavBar
