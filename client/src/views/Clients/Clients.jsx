import React from 'react';
import './Clients.css'
import Client from './components/Client/Client';
import { clientsMockData } from '../../clientsMockData';

const Clients = () => {

  return (
    <div className="clients">
      <header className="client_header">
        <div className="search_box">
          <input type='text' className="inp_field" name="user search" placeholder="Queries goes here"/>
          <button className="search_btn">Search</button>
        </div>
      </header>
      <main className='client_body'>
        {clientsMockData.map(data => {
          
          return (<Client key={data.id} clientdata={data}/>)
        })}
      </main>
    </div>
  )
}

export default Clients