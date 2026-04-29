import { useState } from 'react';

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [error, setError] = useState('');

  function handleSubmit() {
    if (!name.trim()) {
      setError('Please enter a student name.');
      return;
    }
    const num = parseInt(score);
    if (isNaN(num) || num < 0 || num > 100) {
      setError('Score must be a number between 0 and 100.');
      return;
    }
    onAdd(name.trim(), num);
    setName('');
    setScore('');
    setError('');
  }

  return (
    <div className="card">
      <div className="card-title">Add New Student</div>
      <div className="form-row">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="e.g. Priya Mehta"
            value={name}
            onChange={e => { setName(e.target.value); setError(''); }}
          />
        </div>
        <div className="form-group">
          <label>Score (0–100)</label>
          <input
            type="number"
            placeholder="e.g. 78"
            min="0"
            max="100"
            value={score}
            onChange={e => { setScore(e.target.value); setError(''); }}
          />
        </div>
        <button className="btn-submit" onClick={handleSubmit}>
          Add Student
        </button>
      </div>
      {error && <p className="form-error">{error}</p>}
    </div>
  );
}

export default AddStudentForm;