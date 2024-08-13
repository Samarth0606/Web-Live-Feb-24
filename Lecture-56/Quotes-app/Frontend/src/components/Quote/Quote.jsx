import React, { Fragment } from 'react';
import styles from "./Quote.module.css";
import { useNavigate } from 'react-router-dom';


function Quote(props) {

    let navigate = useNavigate()

    const showQuoteHandler = (id)=>{
        navigate(`/quotes/${id}`);
    }
  return (
    <Fragment>
        <li className={styles.quote}>
            <div>
                <p>Quote: {props.text}</p>
                <h3>Author: {props.author}</h3>
            </div>
            <button onClick={()=>showQuoteHandler(props.id)}>View Full Quote</button>
        </li>
    </Fragment>
  )
}

export default Quote