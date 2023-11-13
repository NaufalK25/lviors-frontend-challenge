import { useState } from "react";

const SearchPostInput = () => {
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.currentTarget.value;

    if (value.length > 0) {
      setShowSearchDropdown(true);

      const parent = event.currentTarget.parentElement as HTMLDivElement;
      const searchDropdown = parent.lastChild as HTMLDivElement;
      const caption = searchDropdown.firstChild as HTMLParagraphElement;
      const tags = searchDropdown.lastChild as HTMLParagraphElement;

      caption.innerText = `by Caption: ${value}`;
      tags.innerText = `by Tags: #${value}`;
    } else {
      setShowSearchDropdown(false);
    }
  };

  return (
    <div className='relative'>
      <input
        type='search'
        className='block w-[20rem] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='Search by Tag or Caption'
        autoFocus
        onChange={event => handleSearchInputChange(event)}
      />

      <div
        className={`${
          showSearchDropdown ? '' : 'hidden'
        } absolute -bottom-[4.5rem] border border-gray-200 bg-white w-full rounded p-2`}
      >
        <p>by Caption: </p>

        <p>by Tags: # </p>
      </div>
    </div>
  );
};

export default SearchPostInput;