import React, { useState, useEffect } from 'react';

const Select = (prop) => {

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
  
    useEffect(() => {
      fetch('https://app.konimbo.co.il/api/v2?storeId=6026&token=83a087294bd3d69c810f224071af272e8f4f4c060ff7bf945202c301fc5353c01f084bc7153116ad&groupName=group1&modelName=store_category')
        .then(response => response.json())
        .then(data => {
          setOptions(data);
        });
    }, []); // the empty array means the effect will only run once when the component mounts
  
    function handleChange(event) {
      setSelectedOption(event.target.value);
      prop.addVal(event.target.value);
    }

  return (
    <label className={prop.classLabel}>
      {prop.label}
      <select value={selectedOption} onChange={handleChange}>
        {options.map((option,index) => (
          <option key={index} value={option.id}>{option.title_he}</option>
        ))}
      </select>
    </label>  
  );

};

export default Select;