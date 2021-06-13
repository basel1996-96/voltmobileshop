import { useState } from 'react'
import '../App.css'




import SearchBar from './SearchBar'
import { useSelector } from "react-redux";

import ProductItem from './ProductItem'

 
const ProductlList  = (props)  => {
    const [query,setQuery] = useState("")
    const products = useSelector((state) => state.products);

    const filteredList = products
    .filter((product) => product.name.toUpperCase().includes(query.toUpperCase()))
    .map((product) => <ProductItem 
     key={product.id} product={product} 
    deleteProduct={props.deleteProduct} />);

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