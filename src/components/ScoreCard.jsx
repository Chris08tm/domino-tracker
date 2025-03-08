import ProgressBar from "./ProgressBar";
import { useState } from "react";

function ScoreCard({ playerName }) {
  const [score, setScore] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleReset = () => {
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
        return newCount > 100 ? 100 : newCount; // Cap at 100
      });
      setInputValue(""); // Reset input field after adding
    }
  };
  return (
    <div className="min-w-full m-2 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between">
        <div className="flex">
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
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <h2 className="text-white mx-1">{playerName}</h2>
        </div>
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
      </div>

      <div className="flex justify-center">
        <ProgressBar score={score} />
      </div>

      <div className="text-white">Add score: </div>

      <form class="max-w-md mx-auto" onSubmit={handleSubmit}>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="oklch(0.707 0.022 261.325)"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <input
            type="number"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
