function TaskCard({ completed, title, description }) {
    return (
      <div className="rounded-xl shadow-sm transition-all bg-white border border-gray-200 overflow-hidden">
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-start flex-1">
              <button
                className="flex items-center focus:outline-none mt-1"
                aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
              >
                {completed ? (
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
                    className="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                ) : (
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
                    className="lucide lucide-circle h-5 w-5 text-gray-400 mr-3"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                )}
              </button>
              <div className="flex-1">
                <h3 className={`font-medium ${completed ? "text-gray-500 line-through" : "text-gray-900"}`}>
                  {title}
                </h3>
                <p className={`mt-1 text-sm ${ completed ? "text-gray-400 line-through" : "text-gray-600" }`} >
                  {description}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 ml-4">
              <button  className="text-gray-400 hover:text-indigo-600 transition-colors focus:outline-none" aria-label="Edit todo">
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
                  className="lucide lucide-pencil h-4 w-4"
                >
                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                  <path d="m15 5 4 4" />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-red-500 transition-colors focus:outline-none" aria-label="Delete todo">
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
                  className="lucide lucide-trash2 h-4 w-4"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1="10" x2="10" y1="11" y2="17" />
                  <line x1="14" x2="14" y1="11" y2="17" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default TaskCard;
  