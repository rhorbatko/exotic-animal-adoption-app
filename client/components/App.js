import React, { useEffect } from "react"
import { hot } from "react-hot-loader/root"
import "foundation-sites"
import $ from "jquery"
import "../assets/scss/main.scss"
import NavBar from "./NavBar"
import PetTypesPage from "./PetTypesPage"
import PetListByType from "./PetListByType"
import PetShowPage from "./PetShowPage"

import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom"

const App = props => {
  useEffect(() => {
    $(document).foundation()
  }, [])

  return (
    <div className="callout primary">
      <BrowserRouter>
        <Route path="/" component={NavBar} />
        <Switch>
          <Route exact path="/pets/:id" component={PetShowPage} />
          <Route exact path="/pet-types/:id" component={PetListByType} />
          <Route exact path="/pet-types" component={PetTypesPage} />
          <Redirect from="/" push to="/pet-types" />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default hot(App)
