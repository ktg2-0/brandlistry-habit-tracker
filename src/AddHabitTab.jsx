function AddHabitTab({ newHabit, setNewHabit, addHabit }) {
  return (
    <div className="add-habit-tab">
      <h2>Add New Habit</h2>
{activeTab === "addHabit" && (
  <AddHabitTab
    newHabit={newHabit}
    setNewHabit={setNewHabit}
    addHabit={addHabit}
  />
)}
      <input
        type="text"
        placeholder="Enter habit name..."
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        className="habit-input"
      />

      <button onClick={addHabit} className="add-habit-button">
        Save Habit
      </button>
    </div>
  );
}

export default AddHabitTab;