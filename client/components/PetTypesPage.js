import React, { useState, useEffect } from 'react'
import PetTypesItem from './PetTypesItem'

const PetTypesPage = (props) => {
    const [petTypes, setPetTypes] = useState([])

    useEffect(() => {
        const getPetTypes = async () => {
            try {
                const response = await fetch("/api/v1/pet-types")
                if (!response.ok) {
                    const errorMessage = `${response.status} (${response.statusText})`
                    const error = new Error(errorMessage)
                    throw (error)
                }
                const responseBody = await response.json()
                setPetTypes(responseBody.petTypes)
            } catch (err) {
                console.error(`Error in Fetch: ${err.message}`)
            }
        }
        getPetTypes()

    }, [])

    const petTypesItem = petTypes.map((value) => {
        return (
            <PetTypesItem
                key={value.id}
                id={value.id}
                name={value.name}
                description={value.description}
                img_url={value.image} />
        )
    })
    return (
        <div>
            <h1>Pet Type List</h1>
            <ul>
                {petTypesItem}
            </ul>
        </div>
    )
}

export default PetTypesPage
