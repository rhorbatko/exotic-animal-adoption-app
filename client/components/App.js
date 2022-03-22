import React, { useEffect } from "react"
import { hot } from "react-hot-loader/root"
import "foundation-sites"
import $ from "jquery"
import "../assets/scss/main.scss"
import PetTypesPage from "./PetTypesPage"

import { Route, Switch, BrowserRouter } from "react-router-dom"

const App = props => {
  useEffect(() => {
    $(document).foundation()
  }, [])

  return <div className="callout primary">
    <BrowserRouter>
      <Switch>
        <Route exact path="/pet-types" component={PetTypesPage} />
      </Switch>
    </BrowserRouter>
  </div>
}

export default hot(App)
