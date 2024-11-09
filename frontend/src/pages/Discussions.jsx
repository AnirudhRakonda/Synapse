// Discussions.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Discussions = () => {
  const [doubts, setDoubts] = useState([]);
  const [newDoubt, setNewDoubt] = useState('');
  const [solvingDoubtId, setSolvingDoubtId] = useState(null);
  const [solutionText, setSolutionText] = useState('');
  const userId = 1; // Example user ID, could be dynamic
  const userName = 'User1'; // Example user name

  useEffect(() => {
    fetchDoubts();
  }, []);

  // Fetch all doubts from the backend
  const fetchDoubts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/doubts/getDoubts');
      setDoubts(response.data);
    } catch (error) {
      console.error('Error fetching doubts:', error);
    }
  };

  // Add a new doubt
  const addDoubt = async () => {
    if (!newDoubt) return;
    try {
      await axios.post('http://localhost:3000/doubts/addDoubt', { userId, text: newDoubt });
      setNewDoubt('');
      fetchDoubts();
    } catch (error) {
      console.error('Error adding doubt:', error);
    }
  };

  // Start solving a doubt by setting its ID
  const startSolvingDoubt = (doubtId) => {
    setSolvingDoubtId(doubtId);
    setSolutionText('');
  };

  // Submit the solution for a doubt
  const submitSolution = async (doubtId) => {
    if (!solutionText) return;
    try {
      await axios.post('http://localhost:3000/doubts/solveDoubt', { doubtId, solution: solutionText, userName });
      setSolvingDoubtId(null);
      setSolutionText('');
      fetchDoubts();
    } catch (error) {
      console.error('Error solving doubt:', error);
    }
  };

  return (
    <div className="Discussions" style={{ padding: '20px' }}>
      <h1>Doubt Forum</h1>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Enter your doubt..."
          value={newDoubt}
          onChange={(e) => setNewDoubt(e.target.value)}
          style={{ padding: '8px', width: '300px', marginRight: '10px' }}
        />
        <button onClick={addDoubt}>Add Doubt</button>
      </div>
      <h2>Posted Doubts</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {doubts.map((doubt) => (
          <li key={doubt.id} style={{ marginBottom: '20px' }}>
            <span style={{ fontWeight: 'bold' }}>{doubt.text}</span>
            <span style={{ color: doubt.solved ? 'green' : 'red', marginLeft: '10px' }}>
              {doubt.solved ? '(Solved)' : '(Unsolved)'}
            </span>
            {!doubt.solved && (
              <button onClick={() => startSolvingDoubt(doubt.id)} style={{ marginLeft: '10px' }}>
                Solve
              </button>
            )}
            {solvingDoubtId === doubt.id && (
              <div style={{ marginTop: '10px' }}>
                <textarea
                  placeholder="Enter your solution..."
                  value={solutionText}
                  onChange={(e) => setSolutionText(e.target.value)}
                  style={{ width: '100%', padding: '8px' }}
                />
                <button onClick={() => submitSolution(doubt.id)} style={{ marginTop: '5px' }}>
                  Submit Solution
                </button>
              </div>
            )}
            {doubt.solved && doubt.solution && (
              <div style={{ marginTop: '10px', paddingLeft: '20px', borderLeft: '2px solid #ccc' }}>
                <p><strong>Solution:</strong> {doubt.solution.text}</p>
                <p><em>Solved by: {doubt.solution.solvedBy}</em></p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Discussions;
