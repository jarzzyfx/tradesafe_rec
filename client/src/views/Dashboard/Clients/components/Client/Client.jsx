import React from 'react';
import './Client.css';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Client = ({clientdata}) => {

  const {id} = useParams()
  
  return (
    <Link to={`/clients/${clientdata.id}`}>
      <div className="client" >
       <section className="client_img">
         <img src={clientdata.personal_info.img ? clientdata.personal_info.img : "user img"} alt={clientdata.personal_info.first_name}/>
       </section>
        <section className="client_desc">
          <h3>{clientdata.personal_info.first_name ? clientdata.personal_info.first_name : "user"},{clientdata.personal_info.last_name ? clientdata.personal_info.last_name : "user"}</h3>
          <p className="client_amount">Amount Deposited : <span>{clientdata.Investment_info.amount_invested}</span></p>
          <span>Currency: {clientdata.Investment_info.currency_of_investment}</span>
        </section>
      </div>
    </Link>
  )
}

export default Client