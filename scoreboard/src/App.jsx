import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';

const initialStudents = [
  { id: 1, name: 'Diksha Sharma', score: 85 },
  { id: 2, name: 'Aarav Singhania', score: 34 },
  { id: 3, name: 'Payal Verma', score: 67 },
  { id: 4, name: 'Muskan Kumari', score: 22 },
  { id: 5, name: 'Mahi Singh', score: 91 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [nextId, setNextId] = useState(6);

  function handleScoreChange(id, newScore) {
    setStudents(prev =>
      prev.map(s => (s.id === id ? { ...s, score: newScore } : s))
    );
  }

  function handleAdd(name, score) {
    setStudents(prev => [...prev, { id: nextId, name, score }]);
    setNextId(n => n + 1);
  }

  function handleDelete(id) {
    setStudents(prev => prev.filter(s => s.id !== id));
  }

  const passing = students.filter(s => s.score >= 40).length;
  const failing = students.length - passing;
  const avg = students.length
    ? Math.round(students.reduce((a, s) => a + s.score, 0) / students.length)
    : 0;

  return (
    <div className="app">
      <Header count={students.length} />

      <div className="stats">
        <div className="stat">
          <div className="stat-label">Average Score</div>
          <div className="stat-val avg">{avg}</div>
        </div>
        <div className="stat">
          <div className="stat-label">Passing</div>
          <div className="stat-val pass">{passing}</div>
        </div>
        <div className="stat">
          <div className="stat-label">Failing</div>
          <div className="stat-val fail">{failing}</div>
        </div>
      </div>

      <StudentTable
        students={students}
        onScoreChange={handleScoreChange}
        onDelete={handleDelete}
      />

      <AddStudentForm onAdd={handleAdd} />
    </div>
  );
}

export default App;