import React from "react"
import { Link } from "react-router-dom"

const BookItem = (props) => {
  const { id,name, img_url } = props.petType
  return (
    <li><Link to={`/pet_types/${id}`}>{name} {img_url}</Link></li>
  )
}

export default PetTypeItem