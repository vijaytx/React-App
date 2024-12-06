import React from 'react'

const Content = () => {

    const getName = () => {
        const nameList = ['Surya', 'Pavan', 'Aswin', 'Vijay', 'Tetrax', 'Ramsy'];
        return nameList[Math.floor(Math.random() * 6)];
      }
      
  return (
    <main>
        <p>
            Hello {getName()}!
        </p>
    </main>
  )
}

export default Content
