import axios from "axios";
import { useEffect, useState } from "react"


const Meals = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res => {
      console.log(res.data.meals)
      setItems(res.data.meals)
    }).catch(err => {
      console.error("Error fetching data:", err);
    })
  }, [])

  return (
    <div className="container">
      <h1>Seafood Meals</h1>
      <ul className="items-container">
        {items.map((item) => (
          <li className="card" key={item.idMeal}>
            <img src={item.strMealThumb} alt={item.strMeal} width="100" />
            <div className="content">
              <p>{item.strMeal}</p>
              <p>#{item.idMeal}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Meals