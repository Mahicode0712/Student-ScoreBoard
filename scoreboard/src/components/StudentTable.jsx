import StudentRow from './StudentRow';

function StudentTable({ students, onScoreChange, onDelete }) {
  return (
    <div className="card">
      <div className="card-title">Student Records</div>
      <span>{count} students enrolled</span>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: '#a0527a' }}>
                No students yet. Add one below.
              </td>
            </tr>
          ) : (
            students.map((student, index) => (
              <StudentRow
                key={student.id}
                student={student}
                rank={index + 1}
                onScoreChange={onScoreChange}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;