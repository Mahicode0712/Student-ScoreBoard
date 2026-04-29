import { useState } from 'react';

function StudentRow({ student, rank, onScoreChange, onDelete }) {
  const [editVal, setEditVal] = useState(student.score);
  const isPass = student.score >= 40;
  const initials = student.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  function handleChange(e) {
    const val = e.target.value;
    setEditVal(val);
    const num = parseInt(val);
    if (!isNaN(num) && num >= 0 && num <= 100) {
      onScoreChange(student.id, num);
    }
  }

  return (
    <tr>
      <td>{rank}</td>
      <td>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="avatar">{initials}</span>
          <span style={{ fontWeight: 500 }}>{student.name}</span>
        </div>
      </td>
      <td>
        <input
          className="score-input"
          type="number"
          min="0"
          max="100"
          value={editVal}
          onChange={handleChange}
        />
      </td>
      <td>
        <span className={`badge ${isPass ? 'badge-pass' : 'badge-fail'}`}>
          {isPass ? 'Pass' : 'Fail'}
        </span>
      </td>
      <td>
        <button className="btn btn-del" onClick={() => onDelete(student.id)}>
          Remove
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;