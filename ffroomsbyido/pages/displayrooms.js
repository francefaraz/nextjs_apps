// import Link from 'next/link'

// import  { useState, useEffect } from "react";
// import Axios from 'axios';



export default function displayrooms(posts) {
    console.log("hello"+JSON.stringify(posts))
    return (
        <div>
            <h1>Hi welcome to FF ROOMS BY IDO</h1>
      {posts.posts?.map((post) => {
    
             return(

                <div className="outer-box" key={post._id}>
                <div className="row">
                <div className="column">
                    {console.log(post.roomId)}
                    <p>Room Name : {post.roomName}</p>
                    <p>Room ID : {post.roomId}</p>
                    <p>Mode : {post.mode}</p>
                </div>
                <div className="column"
                style={{marginBottom: "10%",}}>
                    <p>Entry Fee : FREE</p>
                    <p>Map : {post.map}</p>  
                    </div>
                </div>
                <div style={{marginBottom:'5%',marginTop:'5%',textAlign:'center',fontWeight:'bold',}}>Match Time : {post.matchtime}</div>
                <div className="btn-group" 
                style={{textAlign:"center"}} >
                <button>Get Password</button>
                <button>Spectate - YT</button>
                <button>Share</button>
                </div>
                </div>
              
             );
             })}
   
        </div>
    )
}
export async function getServerSideProps() {
    let options = {
        method: 'GET',
        mode: 'cors',
       
    };
    // Call an external API endpoint to get posts
    const res = await fetch('https://mongocurd.herokuapp.com/display',options)
    console.log("\n typeof res is "+typeof res)
    // const posts =  await JSON.parse(JSON.stringify(res))
    var posts = await res.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

//     console.log("data is "+JSON.stringify(posts));
//     console.log("rajendra type of "+typeof posts)
//     posts=await JSON.stringify(posts)
//     console.log("data  type of "+typeof posts)
//    posts=await JSON.parse(posts)
posts=await JSON.parse(JSON.stringify(posts));
   console.log("after  type of "+typeof posts)
   
   console.log(posts[0]);
//    posts=await posts.json()
//    console.log(posts)
//    console.log("json  type of "+typeof posts)

    return {props:{posts}};


    // Axios.get("http://192.168.0 .167:8000/display")
    // .then((res)=>{
    // console.log("hello suresh"+res)
    // })
    // .catch((err)=>{
    //   console.log(err+"ERROR IS "+err.message)
    // })

    // // By returning { props: { posts } }, the Blog component
    // // will receive `posts` as a prop at build time
    // return {
    //   props: {
    //     posts,
    //   },
    // }
  }