'use client'
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SearchModal from "../components/SearchModal";

// Define interface for search data
interface Search {
  id: number;
  position: string;
  created: string;
  status: "Active" | "Closing" | "Closed";
  candidates: number;
}

// Sample data for recent searches
const initialSearches: Search[] = [
  {
    id: 1,
    position: "Frontend Developer Intern",
    created: "Oct 15, 2023",
    status: "Active",
    candidates: 42
  },
  {
    id: 2,
    position: "UX/UI Design Intern",
    created: "Oct 12, 2023",
    status: "Active",
    candidates: 28
  },
  {
    id: 3,
    position: "Data Science Co-op",
    created: "Oct 5, 2023",
    status: "Active",
    candidates: 36
  },
  {
    id: 4,
    position: "Backend Engineer Intern",
    created: "Sep 28, 2023",
    status: "Closing",
    candidates: 53
  },
  {
    id: 5,
    position: "Product Manager Intern",
    created: "Sep 20, 2023",
    status: "Closed",
    candidates: 31
  },
];

export default function Home() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<Search[]>([]);

  useEffect(() => {
    setRecentSearches(initialSearches);
  }, []);
  
  // Return status badge class based on status
  const getStatusBadgeClass = (status: Search["status"]) => {
    switch(status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Closing":
        return "bg-yellow-100 text-yellow-800";
      case "Closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center"
          onClick={() => setIsSearchModalOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          New Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-white rounded shadow p-3">
          <div className="flex items-center mb-2">
            <div className="bg-blue-50 p-2 rounded mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <h6 className="mb-0">Active Searches</h6>
          </div>
          <h3>12</h3>
        </div>
        <div className="bg-white rounded shadow p-3">
          <div className="flex items-center mb-2">
            <div className="bg-green-50 p-2 rounded mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <h6 className="mb-0">Candidates</h6>
          </div>
          <h3>247</h3>
        </div>
        <div className="bg-white rounded shadow p-3">
          <div className="flex items-center mb-2">
            <div className="bg-yellow-50 p-2 rounded mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <h6 className="mb-0">New Messages</h6>
          </div>
          <h3>18</h3>
        </div>
      </div>

      <div className="bg-white rounded shadow mb-4">
        <div className="border-b p-4">
          <h5 className="mb-0">Recent Searches</h5>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidates</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentSearches.map((search) => (
                  <tr key={search.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{search.position}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{search.created}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(search.status)}`}>
                        {search.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{search.candidates}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a href="/search" className="text-blue-600 hover:text-blue-900 border border-blue-600 px-2 py-1 rounded text-sm">View</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
    </Layout>
  );
}
