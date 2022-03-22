import React from "react"
import { Link } from "react-router-dom"

const PetTypesItem= ({ id, name, img_url }) => {
  
  return (
    <li><Link to={`/petTypes/${id}`}>{name} {img_url}</Link></li>
  )
}

export default PetTypesItem