import { useState } from 'react'
import '../App.css'
import SearchBar from './SearchBar'
import { useSelector } from "react-redux";
import ProductItem from './ProductItem'
const ProductlList  = ()  => {
    const [query,setQuery] = useState("")
    const products = useSelector((state) => state.products);

    const filteredList = products
    .filter(
      (product) =>
        product.firstName.toUpperCase().includes(query.toUpperCase()) ||
        product.lastName.toUpperCase().includes(query.toUpperCase())
    )
    .map((product) => <ProductItem 
     key={product.id} product={product} 
     />);

    return ( 
    <div>
    
    <SearchBar setQuery={setQuery} />
   
    <div>
        {filteredList}
    </div>
  </div>
);
    
}


export default ProductlList 