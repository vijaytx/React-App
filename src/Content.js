import { useState } from "react";

const Content = () => {

    const [name, setName] = useState('Tetrax');
    const [count, setCount] = useState(0);

    const getName = () => {
        const nameList = ['Surya', 'Pavan', 'Aswin', 'Vijay', 'Tetrax', 'Ramsy'];
        setName(nameList[Math.floor(Math.random() * 6)]);
    }

    const handleClick = () => {
      setCount(count+1);
      setCount(count+1);
      setCount(count+1);
      console.log('currentCount: ',count); 

    }
    const handleClick2 = () => {
      console.log('currentCount: ', count); 
    }
      
  return (
    <main>
        <p>
            Hello {name}!
        </p>
        <button onClick={getName}>Change User</button>
        <button onClick={handleClick}>Change User</button>
        <button onClick={handleClick2}>Change User</button>
    </main>
  )
}

export default Content
