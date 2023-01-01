import React, { useState, useEffect } from 'react';

const initialList = [
  { id: '2',val: '243108', name: 'smart Learn React' },
  { id: '24',val: '243108', name: 'smart Learn Firebase' },
  {id: '8', val: '243109', name: 'tab Learn GraphQL' },
  { id: '243',val: '243109', name: 'tab Learn React' },
  { id: '5',val: '243110', name: 'watch Learn Firebase' },
  {id: '4', val: '243110', name: 'watch Learn GraphQL' }
];


const ListWithRemoveItem = (prop) => {

  const [list, setList] = useState(prop.addjson);




  const handleClick = (id) => {
    const updatedItems = list.filter(item => item.id !== id);
    setList(updatedItems);
  }

  return (
  
   <label className={prop.classLabel}>
    {prop.label}
     <div className="suppliers_ulWrapper" >
     <ul className={prop.classUl} >
      {list&&list.filter(item => item.category_id == prop.val).map(item => 
      {
        const randomNumber = Math.random(); 
      return (
              
        <li key={randomNumber} >         
          <label>{item.product_name} {item.category_id}</label>
          <span  onClick={() =>{  return handleClick(item.category_id)}}></span>
        </li>
      )})}
     {/* {data.map((item) => (
        <li key={item.category_id}>{item.product_name}</li>
      ))} */}
    </ul>
    </div>
    </label>
   
  );
};

export default ListWithRemoveItem;