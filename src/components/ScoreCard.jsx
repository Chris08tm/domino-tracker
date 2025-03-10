import ProgressBar from "./ProgressBar";
import { useState, useEffect } from "react";

function ScoreCard({ id, reset }) {
  const [inputValue, setInputValue] = useState("");
  const [score, setScore] = useState(() => {
    // Get initial value from local storage
    const savedCount = parseInt(localStorage.getItem(id + "count"));
    if (isNaN(savedCount)) return 0;
    return savedCount > 100 ? 100 : savedCount;
  });
  const [playerName, setPlayerName] = useState(() => {
    const name = localStorage.getItem(id + "name");
    if (name == null) return "Player";
    return name;
  });
  const [nameField, setNameField] = useState(false);

  useEffect(() => {
    const savedCount = parseInt(localStorage.getItem(id + "count"));
    if (!isNaN(savedCount) && savedCount <= 100) {
      setScore(savedCount);
    } else {
      setScore(0); // Set default value if localStorage value is invalid
    }
  }, [reset, id]);

  const handleReset = () => {
    localStorage.setItem(id + "count", 0);
    setScore(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    handleAdd(); // Call the existing function
  };

  const handleChange = (e) => {
    const value = e.target.value;
    // Ensure only positive numbers are entered
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleAdd = () => {
    // Convert inputValue to number and add to count
    const number = Number(inputValue);
    if (!isNaN(number) && number > 0) {
      setScore((prevCount) => {
        const newCount = prevCount + number;
        localStorage.setItem(id + "count", newCount);
        return newCount > 100 ? 100 : newCount; // Cap at 100
      });
      setInputValue(""); // Reset input field after adding
    }
  };

  const handleNameField = () => {
    setNameField(() => !nameField);
  };

  const handleNameSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    handleNameField();
    handleNameChange();
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setPlayerName(name);
    localStorage.setItem(id + "name", name);
  };

  return (
    <div className=" md:w-96 m-2 p-6 border rounded-lg shadow-sm bg-gray-800 border-gray-700">
      <div className="flex justify-between">
        <div className="flex w-full">
          <button onClick={handleNameField}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
          <form
            className="text-white w-full mx-1 flex justify-between items-center"
            onSubmit={handleNameSubmit}
          >
            <input
              type="text"
              value={playerName}
              disabled={nameField ? false : true}
              onChange={handleNameChange}
            />
            <button className={`${!nameField ? "hidden" : ""}`} type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </button>
          </form>
        </div>
        {nameField == false ? (
          <button onClick={handleReset}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="flex justify-center">
        <ProgressBar score={score} />
      </div>

      <div className="text-white">Add score: </div>

      <form class="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div class="relative">
          <input
            type="number"
            inputMode="numeric"
            id="default-search"
            className="block w-full p-4 ps-10w text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-base sm:text-lg lg:text-xl"
            placeholder="Add score..."
            value={inputValue}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={handleAdd}
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default ScoreCard;
