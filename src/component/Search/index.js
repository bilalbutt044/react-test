import React, { useContext } from 'react';
import { ProductsContext } from '../../context/ProductContext';


const Search = () => {
    const {searchQuery, handleSearch} = useContext(ProductsContext)
    return ( 
        <div>
            <h1>Search Product</h1>
            <div>
                <input type="text"  value={searchQuery} onChange={e => handleSearch(e.target.value)} />
                <button>Search</button>
            </div>
        </div>
     );
}
 
export default Search;