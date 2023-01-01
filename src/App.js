import logo from './logo.svg';
import React , { useState ,useEffect}  from 'react';
import './App.css';
import Select from './Select';
import ListWithRemoveItem from './ulComponent';
import AddProduct from './AddProduct'

const App = () => {
  const options = [
    { label: 'Fruit', value: 'fruit' },
    { label: 'Vegetable', value: 'vegetable' },
    { label: 'Meat', value: 'meat' },
  ];

  const [value, setValue] = React.useState('fruit');
   const [val, setVal] = React.useState();
   const [data, setData] = useState();
    useEffect(() => {
    // retrieve the JSON data from local storage and parse it
    const dataJSON = JSON.parse(localStorage.getItem('data'));
    setData(dataJSON);
    console.log('data45688',data)
  }, []);



  console.log('ezzzzzzz');
  const getval = (val) => {
    setValue(val);
  };

   const getJSON1 = (val) => {
    setVal(val);
  };

  return (
    
    <div className='suppliers_wrapper'>
    <h1 className='suppliers__headline'>משיכת מוצרים</h1>
    <label className='suppliers__checkbox'>
        אפשר הוספת מוצרים       
      <input type="checkbox"></input>
        <span class="checkbox-blog-switch">
        </span>
    </label>
    <AddProduct addjson={getJSON1} />
      <Select
        label="בחרו קטגוריה לשיוך המוצרים אצלכם בחנות"
        classLabel="suppliers__label"
        addVal={getval}
      />
      <ListWithRemoveItem addjson={data} val={value} label="קישורי מוצרים" classLabel="suppliers__label" classUl="suppliers__ul"/> 
      <button type="button" className='suppliers__button' >משיכת מוצרים</button>   
      <p>We eat {value}!</p>
    </div>
  );
};

export default App;