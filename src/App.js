import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const[posts,setPosts]=useState([
    {post:"post 1" ,body:"body 1"},
    {post:"post 2" ,body:"body 2"},
    {post:"post 3" ,body:"body 3"}
  ])
  const[filter,setFilter]=useState("")
  const[temp,setTemp]=useState("")
  const[formstate,setFormstate]=useState({post:"",body:""})

function handleSubmit(e){
  e.preventDefault()
  console.log(e,"anitha");
  if(formstate.post&& formstate.body){
  setPosts([...posts,{...formstate}])
  setFormstate({post:"",body:""})
  }
  else{
    alert("fill all details")
  }
}


  return (
    <div className="App">
    <div className="search-wrapper">
      <input type="text" value={temp} onChange={(e)=>{
setTemp(e.target.value)
      }}></input>
      <button onClick={()=>{setFilter(temp)}}>search</button>   
      <button onClick={()=>{setFilter("");
      setTemp("")
    }}>clear</button>   
    </div>
    <hr></hr>
    <div className="action-wrapper">
      <button>new post</button>
      <button>published</button>
    </div>
    <hr></hr>
    <div className="main-section">
      <div className="form">
        <form>
          <input type="text" placeholder="enter the post" value={formstate.post} onChange={(e)=>{setFormstate({...formstate,post:e.target.value})}}></input><br></br><br></br>
          <textarea rows="4" cols="20" value={formstate.body} onChange={(e)=>{setFormstate({...formstate,body:e.target.value})}}></textarea><br></br><br></br>
          <button onClick={handleSubmit}>PUBLISH</button>


        </form>
      </div>
      <div className="all-posts">
      {posts.filter(e=>e.post.includes(filter)||e.body.includes(filter)).map((each, index) => {
        return (
          <div className="post">
            <h4>{each.post}</h4>
            <p>{each.body}</p>
          </div>
        );
      })}
      </div>
    </div>
  </div>
);
}

export default App;