import React from 'react'

const PasarProps = (props) => {
    const {string} = props
  return (
    <div>
        <h1>Manejo de Props</h1>
        <ul>
            <li>Dato de tipo string: {string}</li>
        </ul>
    </div>
  )
}

export default PasarProps