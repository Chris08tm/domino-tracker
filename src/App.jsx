import ProgressBar from "./components/ProgressBar";
import ScoreCard from "./components/ScoreCard";

function App() {
  return (
    <div className="flex flex-col items-center justify-top min-h-screen px-4">
      <h1 className="text-3xl m-2 font-bold">Domino Score Tracker</h1>
      <ScoreCard playerName="Home" id="home" />
      <ScoreCard playerName="Visitor" id="visitor" />
      <button
        type="button"
        className="flex justify-center items-center text-white w-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mx-1 size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        Reset!
      </button>
    </div>
  );
}

export default App;
