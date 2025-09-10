import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Product from "./Products/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import data from './db/data'
import './index.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // ----------- Input Filter -----------
  const handleInputChange = (e) => { setQuery(e.target.value); }
  const filteredItems = data.filter(p => p.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  // ----------- Radio Filtering -----------
  const handelChange = (e) => { setSelectedCategory(e.target.value); }

  // ------------ Button Filtering -----------
  const handleClick = (e) => { setSelectedCategory(e.target.value); };

  // ----------- Filtering Function ----------
  function filterProducts(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Products
    if (query) {
      filteredProducts = filteredItems;
    }

    //Applying Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        product =>
          product.category === selected ||
          product.color === selected ||
          product.company === selected ||
          product.newPrice === selected ||
          product.title === selected
      );
    }

    // Result
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filterProducts(data, selectedCategory, query);

  return <div>
    <Sidebar handelChange={handelChange} />
    <Navigation query={query} handleInputChange={handleInputChange} />
    <Recommended handleClick={handleClick} />
    <Product result={result} />
  </div>
}

export default App;