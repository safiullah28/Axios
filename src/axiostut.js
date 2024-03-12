import React from "react";
import {  useState } from "react";
import axios from "axios";
import "./App.css";
function Axiostut() {
  //API should prefer to call in useEffect HOOK
  //try catch can only be used when function have to call on specific button or call only else use .then and .catch

  //GET DATA FROM API
  //   const [userdata, setData] = useState([]);
  //   useEffect(() => {
  //      axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then((response)=>{
  //       console.log(response);
  //       setData(response.data);
  //     })
  //     .catch ((error)=> {
  //       console.log(`Error in API calling : ${error}`);
  //     })
  //   }, []);

  // Post Data using API
//   const data = { fname: "", lastName: "" };
//   const [inputdata, setinput] = useState(data);

//   const handleData = (e) => {
//     setinput({ ...inputdata, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post(`https://jsonplaceholder.typicode.com/users`, inputdata)
//       .then((response) => {
//         console.log(response);
//       });
//   };


//Update Data using API
const data = { fname: "", lastName: "" };
  const [inputdata, setinput] = useState(data);

  const handleData = (e) => {
    setinput({ ...inputdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, inputdata)
      .then((response) => {
        console.log(response);
      });
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://jsonplaceholder.typicode.com/users/1`, inputdata)
      .then((response) => {
        console.log(response);
      });
  }
  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/1`)
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <div>
      Axios tutorial
      {/*
      Axios Get Method
      <div>
      {
        userdata.map((item,index)=>{
            return(
                <div key={index}>
                <h3>{item.name} - {item.email}</h3>
                </div>
            )
        })
      })
      </div>
    */}
      {/*<form>
        <label>First name</label>
        <input type="text" name="fname" value={inputdata.fname} onChange={handleData}/>
        <br />
        <label>Last name</label>
        <input type="text" name="lastname" value={inputdata.lastName} onChange={handleData}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <br />
      </form>*/}


      <form>
        <label>First name</label>
        <input
          type="text"
          name="fname"
          value={inputdata.fname}
          onChange={handleData}
        />
        <br />
        <label>Last name</label>
        <input
          type="text"
          name="lastName"
          value={inputdata.lastName}
          onChange={handleData}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        &nbsp;
        <button type="submit" onClick={handleUpdate}>
        Update
      </button>
      &nbsp;
        <button type="submit" onClick={handleDelete}>
        Delete
      </button>
        <br />
      </form>
    </div>

  );
}

export default Axiostut;
