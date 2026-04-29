function Header({ count }) {
  return (
    <div className="header">
      <h1>Student Scoreboard</h1>
      <span>{count} students enrolled</span>
    </div>
  );
}

export default Header;