// import React, { useState, useEffect } from "react"


// const PetTypesShowPage = (props) => {
//   const [petShow, setPetShow] = useState({})

//   const getPetShow = async () => {
//     try {
//       const id = props.match.params.id
//       const response = await fetch(`/api/v1/pet-types/${id}`)
//       if (!response.ok) {
//         const errorMessage = `${response.status} (${response.statusText})`
//         const error = new Error(errorMessage)
//         throw(error)
//       }
//       const responseBody = await response.json()
//       console.log(responseBody)
//       setPetShow(responseBody.petShow)
//     } catch(err) {
//       console.error(`Error in Fetch: ${err.message}`)
//     }
//   }

//   useEffect(() => {
//     getPetShow()
//   }, [])

//   return (
//     <>
//       <h1>{petShow.name}</h1>
//       <h2>{petShow.img_url}</h2>
//     </>
//   )
// }

// export default PetTypesShowPage
