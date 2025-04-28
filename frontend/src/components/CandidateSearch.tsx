"use client"
import { useState } from "react";

interface Candidate {
  id: number;
  name: string;
  university: string;
  major: string;
  gradYear: string;
  skills: string[];
  experience: string;
  status: "new" | "contacted" | "interviewing" | "offered" | "hired" | "rejected";
}

export default function CandidateSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    university: "",
    major: "",
    gradYear: "",
    skills: [] as string[],
  });
  
  // Mock candidates data (in a real app, this would come from an API)
  const candidates: Candidate[] = [
    {
      id: 1,
      name: "Alex Johnson",
      university: "MIT",
      major: "Computer Science",
      gradYear: "2024",
      skills: ["JavaScript", "React", "Node.js"],
      experience: "SWE Intern at Google",
      status: "new"
    },
    {
      id: 2,
      name: "Jamie Smith",
      university: "Stanford",
      major: "Data Science",
      gradYear: "2023",
      skills: ["Python", "TensorFlow", "SQL"],
      experience: "ML Research Assistant",
      status: "contacted"
    },
    {
      id: 3,
      name: "Taylor Williams",
      university: "UC Berkeley",
      major: "Computer Engineering",
      gradYear: "2023",
      skills: ["C++", "CUDA", "PyTorch"],
      experience: "HW Engineering Intern at NVIDIA",
      status: "interviewing"
    }
  ];
  
  const filteredCandidates = candidates.filter(candidate => {
    return candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  });
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Candidate Search</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
          </svg>
          Add Candidate
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="mb-4">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Candidates</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <input
              type="text"
              id="search"
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 border p-2"
              placeholder="Search by name, university, skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">University</label>
            <select
              id="university"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 border p-2"
              value={filters.university}
              onChange={(e) => setFilters({...filters, university: e.target.value})}
            >
              <option value="">All Universities</option>
              <option value="MIT">MIT</option>
              <option value="Stanford">Stanford</option>
              <option value="UC Berkeley">UC Berkeley</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-1">Major</label>
            <select
              id="major"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 border p-2"
              value={filters.major}
              onChange={(e) => setFilters({...filters, major: e.target.value})}
            >
              <option value="">All Majors</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Data Science">Data Science</option>
              <option value="Computer Engineering">Computer Engineering</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="gradYear" className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
            <select
              id="gradYear"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 border p-2"
              value={filters.gradYear}
              onChange={(e) => setFilters({...filters, gradYear: e.target.value})}
            >
              <option value="">All Years</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded">
              More Filters
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">University</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Major</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grad Year</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skills</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCandidates.map((candidate) => (
                <tr key={candidate.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{candidate.name}</div>
                    <div className="text-sm text-gray-500">{candidate.experience}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{candidate.university}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{candidate.major}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{candidate.gradYear}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {candidate.skills.map((skill, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${candidate.status === 'new' ? 'bg-blue-100 text-blue-800' : 
                        candidate.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                        candidate.status === 'interviewing' ? 'bg-purple-100 text-purple-800' :
                        candidate.status === 'offered' ? 'bg-pink-100 text-pink-800' :
                        candidate.status === 'hired' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'}`}>
                      {candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                    <button className="text-gray-600 hover:text-gray-900">Contact</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 