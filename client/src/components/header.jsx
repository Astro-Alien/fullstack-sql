function Header() {
    return (
      <div className="flex items-center justify-center mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-check-check h-10 w-10 text-indigo-600 mr-3"
        >
          <path d="M18 6 7 17l-5-5" />
          <path d="m22 10-7.5 7.5L13 16" />
        </svg>
        <h1 className="text-3xl font-bold text-gray-900">Todo List</h1>
      </div>
    );
}

export default Header;