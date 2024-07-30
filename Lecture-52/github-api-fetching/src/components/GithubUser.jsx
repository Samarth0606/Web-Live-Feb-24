import React, { useEffect, useState } from 'react'

function GithubUser(props) {
    let [user,setUser] = useState({
        imgUrl:"",followers:0,following:0
    })
    useEffect(()=>{
        async function callApi(username){
            let resp = await fetch(`https://api.github.com/users/${username}`)
            let data = await resp.json();
            let {avatar_url,followers,following} = data;
            setUser(()=>{
                return{
                    imgUrl:avatar_url,
                    followers:followers,
                    following
                }
            })
        }
        callApi(props.username)
    } , [])

  return (
        <figure>
            <img src={user.imgUrl} alt="" />
            <figcaption>
                <p>Username: {props.username}</p>
                <p>Followers:{user.followers}</p>
                <p>Following:{user.following}</p>
            </figcaption>
        </figure>
  )
}

export default GithubUser