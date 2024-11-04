import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GiftExpertApp = () => {

  const [categories, setcategories] = useState(['One Punch'])

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
