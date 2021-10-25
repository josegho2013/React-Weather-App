import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("3");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
