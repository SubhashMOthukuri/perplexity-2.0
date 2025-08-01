const InputBar = ({ currentMessage, setCurrentMessage, onSubmit }) => {
    const handleChange = (e) => {
      setCurrentMessage(e.target.value);
    };
  
    return (
      <form
        onSubmit={onSubmit}
        className="backdrop-blur-md bg-white/60 dark:bg-[#1e1e1e]/60 border-t border-gray-300/30 dark:border-white/10 px-4 py-3 fixed bottom-0 left-0 right-0 z-40"
      >
        <div className="flex items-center bg-white/90 dark:bg-[#2c2c2c]/90 border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2 shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-teal-500">
          <input
            type="text"
            placeholder="Type a message..."
            value={currentMessage}
            onChange={handleChange}
            className="flex-grow bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none text-sm"
          />
  
          <button
            type="submit"
            className="ml-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full p-2 shadow transition-transform transform hover:scale-105"
          >
            <svg
              className="w-5 h-5 rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </form>
    );
  };
  
  export default InputBar;
  