'use client';

import React, { useState } from 'react';

export default function TestCandidates() {
  const [isLoading, setIsLoading] = useState(false);
  const [candidates, setCandidates] = useState(null);
  const [error, setError] = useState('');

  const generateCandidates = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/generateCandidates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobTitle: "Project Manager",
          jobDescription: "We are looking for a project manager with experience in project management, team management, and client management.",
          jobLocation: "Toronto, ON",
          jobIndustry: "Technology",
          jobSkills: ["Project Management", "Team Management", "Client Management"],
          jobResponsibilities: ["Manage projects from start to finish", "Collaborate with team members to design and implement new features", "Manage client relationships"],
          jobRequirements: ["Bachelor's degree in Business, Computer Science, Engineering, or a related field", "experience in project management, team management, and client management"]
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate candidates');
      }

      const data = await response.json();
      setCandidates(data);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Test Candidate Generation</h1>
      
      <button
        onClick={generateCandidates}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-blue-300"
      >
        {isLoading ? 'Generating...' : 'Generate Candidates'}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {candidates && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Generated Candidates:</h2>
          <pre className="p-4 bg-gray-100 rounded overflow-auto max-h-[500px]">
            {JSON.stringify(candidates, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
} 