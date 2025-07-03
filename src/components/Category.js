import {useState} from "react"
import CategoryItems from "./CategoryItems";
const Category = ({ data }) => {
  const [open, setOpen] = useState(false)
  const { title, itemCards } = data || {};
  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-100">
      <button onClick={handleClick} className="w-full rounded-lg cursor-pointer">
        <div className="flex justify-between">
          <span className="font-bold text-lg">{title} ({itemCards.length})</span>
          <span>⬇️</span>
        </div>
        </button>
        {open && <CategoryItems itemCards={itemCards} />}
      </div>
    </div>
  )
}
export default Category