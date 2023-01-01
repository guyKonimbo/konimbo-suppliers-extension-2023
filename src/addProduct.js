import React, { useState , useRef ,useEffect}  from 'react';

function AddProduct(prop) {
  const [arr, setDataInput] = useState({});
  const input_category_id = useRef();
  const input_product_name = useRef();
  // let arr = [];
  var flaggg = 0;

  useEffect(() => {if(flaggg==0){
     const existingData5 = JSON.parse(localStorage.getItem('data'));
    if(existingData5){

       try {
setDataInput(prevData => ({ ...prevData, ...existingData5 }));
setTimeout(function(){ console.log('existingData1',arr); console.log('existingData0',existingData5);}, 6000);
      
    
} catch (error) {
  console.log(error);
  // handle the error
}
     
      }  




     flaggg++;
    }
}, []);
 


  const handleSubmit = (event) => {
     console.log(arr);
    event.preventDefault();

      const datainput = {
        category_id: input_category_id.current.value,
        product_name: input_product_name.current.value
    }
        // arr.push( datainput);
        setDataInput(prevData => ({ ...prevData, ...datainput }));
        localStorage.setItem('data', JSON.stringify(arr));
        // setDataInput(arr);
        input_category_id.current.value = "";
        input_product_name.current.value = "";
        prop.addjson(JSON.parse(localStorage.getItem('data')));
  }



  return (
    <form onSubmit={handleSubmit} className="suppliers_ulWrapper">
      <input type="text" name="category_id"  ref={input_category_id}  />
      <input type="text" name="product_name" ref={input_product_name}  />
      <button type="submit">Save</button>
    </form>
  );
}

export default AddProduct;