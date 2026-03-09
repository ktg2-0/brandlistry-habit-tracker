function AddHabitTab({ habits, newHabit, setNewHabit, addHabit, toggleHabit, habitDate, setHabitDate }) {
  return (
    <div className="add-habit-tab">
      <h2>Add New Habit</h2>

      {/* Input bar to add new habit */}
      <div className="add-habit-bar">
        <input
          type="text"
          placeholder="Enter new habit..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
        />
        <input
          type="date"
          value={habitDate}
          onChange={(e) => setHabitDate(e.target.value)}
        />
        <button onClick={addHabit}>Add</button>
      </div>

      {/* List of current habits */}
      <h3>Active Habits</h3>
      {habits.length === 0 ? (
        <p>No habits yet.</p>
      ) : (
        <ul className="habit-list">
          {habits.map((habit) => (
            <li key={habit.id} className="habit-card">
              <span
                className={habit.completed ? "habit-completed" : ""}
                onClick={() => toggleHabit(habit.id)}
              >
                {habit.name} ({habit.date})
              </span>
              <button onClick={() => toggleHabit(habit.id)}>
                {habit.completed ? "Undo" : "Done"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AddHabitTab;