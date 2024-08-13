import React, { Fragment, useRef } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function NewQoute() {

    const usernameInpRef = useRef();
    const quoteInpRef = useRef();
    let navigate = useNavigate()

    const addQuoteHandler = async(e)=>{
        e.preventDefault();
        let author = usernameInpRef.current.value;
        let text = quoteInpRef.current.value;
        try{
            let resp = await axios.post('http://localhost:8080/addQuotes' , {author , text});
            // console.log(resp , "axios res")
            navigate('/')
        }
        catch(e){
            console.log("cannot post at this moment")
        }
    }
  return (
    <Fragment>
        <form onSubmit={addQuoteHandler}>
            <h1>New Quote Form</h1>
            <div>
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" ref={usernameInpRef} placeholder='Add author name' />
            </div>
            <div>
                <label htmlFor="quote">Quote:</label>
                <textarea rows={4} cols={10} id="quote" ref={quoteInpRef} placeholder='Add author quote'></textarea>
            </div>
            <button>Add Quotes</button>
        </form>
    </Fragment>
  )
}

export default NewQoute