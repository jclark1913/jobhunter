import { useState } from "react";

interface SearchFormProps {
  searchFor: (searchTerm: string | undefined) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ searchFor }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  };

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form
      className="flex flex-row align-middle items-center gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="bg-transparent border border-normalborder rounded-md p-2 text-secondarytext"
      />
      <button className="bg-primarybutton border border-normalborder text-primarytext rounded-md p-2">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
