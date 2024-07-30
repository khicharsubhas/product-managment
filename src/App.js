import React from 'react';
import ProductOrder from './ProductOrder';
import './ProductOrder.css'

function App() {
    return (
        <div className="App">
          <hr className='Hline'/>
            <h1>Product Order List</h1>
            <hr className='Hline' />
            <ProductOrder />
        </div>
    );
}

export default App;
