import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {

  const [categories, setcategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = () => {
    setcategories(['New Category', ...categories]); 
    // setcategories((prev) => [...prev, 'New Category']);
  }

  return (
    <>
        {/* Titulo */}
        <h1>GiftExpertApp</h1>

        {/* Input */}
        <AddCategory setCategories={setcategories} />

        {/* Listado de Gifts */}
        <button onClick={onAddCategory}>Add Category</button>
        <ol>
          { categories.map((category, index) => {
            return (<li key={index}>{category}</li>)
          })}
        </ol>
          {/* Gift item */}
    </>
  )
}
