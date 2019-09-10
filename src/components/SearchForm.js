import React, { useState,useEffect } from "react";
// import { Form, Field, withFormik, Formik } from "formik";

import axios from "axios";

export default function SearchForm({ onSearch }) {
  // TODO: Add stateful logic for query/form data
  const [searching, setSearching] = useState("terrier");

  useEffect(()=>{
    axios
    .get(`https://dog.ceo/api/breed/${searching}/images/random/15`)
    .then(res => {
      setSearching(res.data)
    })
    .catch(err=>console.log("ERROR 404: PAGE NOT FOUND!"))
  }, [searching])


  const changeHandler = event => {
    // const newObj = {...note}
    // newObj[event.target.name] = event.target.value;
    setSearching(event.target.name=event.target.value);
  };
console.log(searching)

  return (
    <section className="search-form">
    <form>
      <input 
      // onSubmit={submitSearchForm}
        name="name"
        type="text"
        placeholder="search"
        value={searching}
        onChange={changeHandler}

      />
      <button type="submit">Search</button>
    </form>
      {/* <form onSubmit={() => onSearch(name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form> */}
    </section>
  );
}
