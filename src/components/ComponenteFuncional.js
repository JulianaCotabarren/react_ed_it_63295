import React, { useState } from 'react'

const ComponenteFuncional = (props) => {
    const [first, setfirst] = useState(second)
  return (
    <div>
        <h1>Componente Funcional</h1>
        <p>Puedo usar el Hook useState para imitar el trabajo del objeto state</p>
        <h3>Mostrar valor de Props</h3>
        <h4>{props.nombre}</h4>
    </div>
  )
}

export default ComponenteFuncional