import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {

  const [categories, setcategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = (category) => {
    setcategories([category, ...categories]); 
  }

  return (
    <>
        {/* Titulo */}
        <h1>GiftExpertApp</h1>

        {/* Input */}
        <AddCategory onNewCategory={onAddCategory} />

        {/* Listado de Gifts */}
        <ol>
          {/* Gift item */}
          { categories.map((category, index) => {
            return (<li key={index}>{category}</li>)
          })}
        </ol>
    </>
  )
}
