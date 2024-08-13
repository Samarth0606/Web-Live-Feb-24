import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

function ShowQuote() {
    let [quote , setQuote] = useState({author:"" , text:""})

    const params = useParams();

    // fetch id
    async function fetchQuotes(){
        let resp = await axios.get(`http://localhost:8080/quotes/${params.id}`);
        // console.log(resp.data , "particular id")
        let {text , author} = resp.data;
        setQuote({text , author});
    }
    useEffect(()=>{
        fetchQuotes();
    }, [])

  return (

    <div>
        <h1>{quote.author}</h1>
        <h1>{quote.text}</h1>
    </div>
  )
}

export default ShowQuote