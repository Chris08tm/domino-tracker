function ToggleSwitch({ on, setOn }) {
  return (
    <div
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
        on ? "bg-blue-500" : "bg-gray-400"
      }`}
      onClick={() => setOn((prev) => !prev)}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
          on ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
}

export default ToggleSwitch;
