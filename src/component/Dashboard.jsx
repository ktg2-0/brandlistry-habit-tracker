function Dashboard({ habits, toggleHabit, totalTasks, dailyCompleted, weeklyCompleted, monthlyCompleted }) {

const today = new Date().toISOString().slice(0,10);
const todaysHabits = habits.filter(h => h.date === today);

  return (
    <>
    <div className="dashboard-container">
    <div className="dashboard-card blue">{totalTasks}<p>Current Tasks</p></div>
    <div className="dashboard-card green">{dailyCompleted}<p>Daily Completed</p></div>
    <div className="dashboard-card orange">{weeklyCompleted}<p>Weekly Completed</p></div>
    <div className="dashboard-card purple">{monthlyCompleted}<p>Monthly Completed</p></div>
  </div>
<div className="task-card-container-horizontal">
  <div className="task-card">
    <button className="task-btn default">Log Today's Task</button>
  </div>
  <div className="task-card">
    <button className="task-btn add">Add New Habit</button>
  </div>
  <div className="task-card">
    <button className="task-btn view">View History</button>
  </div>

</div>
  <div className="habit-list">
    <h2>My Habits</h2>
    <ul>
  {todaysHabits.length === 0 ? (
    <p>No habits for today.</p>
  ) : (
    todaysHabits.map(habit => (
      <li key={habit.id} className="habit-card">
        <span className={habit.completed ? "habit-completed" : ""}>{habit.name}</span>
        <button
          className={`habit-btn ${habit.completed ? "undo" : "complete"}`}
          onClick={() => toggleHabit(habit.id)}
        >
          {habit.completed ? "Undo" : "Complete"}
        </button>
      </li>
    ))
  )}
</ul>
  </div>
       {/* Graph placeholder */}
<div className="graph-placeholder">
  Habit Progress Graph Coming Soon
</div>
 </>
  );
}

export default Dashboard;