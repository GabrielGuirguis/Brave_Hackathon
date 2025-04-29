interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 backdrop-blur-sm backdrop-brightness-75 bg-transparent z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Create new search</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position</label>
            <input 
              type="text" 
              id="position" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Frontend Developer Intern"
            />
          </div>
          
          <div className="pt-4 flex justify-end gap-2">
            <button 
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Create Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}