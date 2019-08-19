import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  // TODO: Add stateful logic for query/form data
  const [searching, setSearching] = useState("");

  const handleInputChange = e => setSearching(e.target.value);

  return (
    <section className="search-form">
      <form onSubmit={() => onSearch("")}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={value}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
