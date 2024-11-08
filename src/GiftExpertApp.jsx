import { useState } from "react"
import { AddCategory, GiftGrid } from "./components";

export const GiftExpertApp = () => {

  const [categories, setcategories] = useState([])

  const onAddCategory = (category) => {
    if(categories.includes(category)) { return; }
    setcategories([category, ...categories]); 
  }

  return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory onNewCategory={onAddCategory} />

        { categories.map((category) => (
            <GiftGrid key={category} category={category} />
          ))
        }
    </>
  )
}
