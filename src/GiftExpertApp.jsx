import { useState } from "react"

export const GiftExpertApp = () => {

  const [categories, setcategories] = useState(['One Punch', 'Dragon Ball'])

  return (
    <>
        {/* Titulo */}
        <h1>GiftExpertApp</h1>

        {/* Input */}

        {/* Listado de Gifts */}
        <ol>
          { categories.map((category, index) => {
            return (<li key={index}>{category}</li>)
          })}
        </ol>
          {/* Gift item */}
    </>
  )
}
