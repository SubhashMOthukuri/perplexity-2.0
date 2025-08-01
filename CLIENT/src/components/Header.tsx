const Header = () => {
    return (
      <header className="backdrop-blur-lg bg-white/70 dark:bg-[#1e1e1e]/70 border-b border-gray-300/30 dark:border-white/10 shadow-sm fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#30D158] shadow-md" />
          <span className="text-gray-900 dark:text-white font-semibold text-lg tracking-tight">
            Perplexity 2.0
          </span>
        </div>
  
        <nav className="flex items-center gap-3">
          <a className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-medium transition">
            Home
          </a>
          <a className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-medium transition">
            Chat
          </a>
          <a className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-medium transition">
            Contacts
          </a>
          <a className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-medium transition">
            Settings
          </a>
        </nav>
      </header>
    );
  };
  
  export default Header;
  