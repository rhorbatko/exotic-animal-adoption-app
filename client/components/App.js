import React, { useEffect } from "react"
import { hot } from "react-hot-loader/root"
import "foundation-sites"
import $ from "jquery"
import "../assets/scss/main.scss"

import { Route, Switch, BrowserRouter } from "react-router-dom"

const App = props => {
  useEffect(() => {
    $(document).foundation()
  }, [])

  return <div className="callout primary">Replace this div with your Router.</div>
}

export default hot(App)
