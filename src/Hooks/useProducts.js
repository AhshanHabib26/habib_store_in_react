import { useEffect, useState } from "react";


const useProducts = () => {

    const [products, setProducts] = useState([])
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then()
    }, [])


    return (
        <div>
            
        </div>
    );
};

export default useProducts;