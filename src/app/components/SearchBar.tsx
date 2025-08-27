import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch(input);
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Search movies..."
        className="px-4 py-2 rounded-l bg-gray-800 text-white border border-gray-600 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-purple-800 text-white px-4 py-2 rounded-r hover:bg-red-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;