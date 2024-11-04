import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {

  const [categories, setcategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = (category) => {
    if(categories.includes(category)) { return; }
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
          { categories.map((category) => {
            return (<li key={category}>{category}</li>)
          })}
        </ol>
    </>
  )
}
