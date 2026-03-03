import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddHabitTab from "./AddHabitTab.jsx";

function App() {
const [activeTab, setActiveTab] = useState("");
const [newHabit, setNewHabit] = useState("");
const [menuOpen, setMenuOpen] = useState(false);


  // Habit state
  const [habits, setHabits] = useState([
    { id: 1, name: "Exercise", completed: false },
    { id: 2, name: "Read 20 min", completed: false },
    { id: 3, name: "Drink Water", completed: false },
    { id: 4, name: "Meditate", completed: false },
    { id: 5, name: "Journal", completed: false },
    { id: 6, name: "Sleep Early", completed: false },
  ]);
const addHabit = () => {
  if (newHabit.trim() === "") return;

  setHabits([
    ...habits,
    {
      id: Date.now(),
      name: newHabit,
      completed: false,
    },
  ]);

  setNewHabit("");
};
  // Toggle completion
  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  // Stats
  const totalTasks = habits.length;
  const dailyCompleted = habits.filter((h) => h.completed).length;
  const weeklyCompleted = dailyCompleted * 5; // example
  const monthlyCompleted = dailyCompleted * 20; // example

  return (
      <div className="app-container">

    {/* HEADER */}
    <header className="header-container">

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <h1>Brandlistry Habit Tracker</h1>
      <p>Build your daily habits consistently</p>

    </header>


    {/* ✅ PUT SIDEBAR MENU HERE */}
    {menuOpen && (
      <div className="sidebar-menu">

        <button onClick={() => {
          setActiveTab("dashboard");
          setMenuOpen(false);
        }}>
          Dashboard
        </button>

        <button onClick={() => {
          setActiveTab("addHabit");
          setMenuOpen(true);
        }}>
          Add Habit
        </button>

        <button onClick={() => {
          setActiveTab("history");
          setMenuOpen(false);
        }}>
          History
        </button>

      </div>
    )}


    {/* ✅ TAB CONTENT GOES HERE */}
    {activeTab === "dashboard" && (
      <>
        <div className="dashboard-container">
          {/* dashboard cards */}
        </div>

        <div className="task-card-container-horizontal">
          {/* task buttons */}
        </div>

        <div className="habit-list">
          {/* habits */}
        </div>
      </>
    )}
    {activeTab === "dashboard" && (
  <DashboardTab habits={habits} />
)}

    {activeTab === "addHabit" && (
  <AddHabitTab
    newHabit={newHabit}
    setNewHabit={setNewHabit}
    addHabit={addHabit}
  />
)}

    {activeTab === "history" && (
      <div>History Tab</div>
    )}


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
  {habits.map((habit) => (
    <li key={habit.id} className="habit-card">
      <span className={habit.completed ? "habit-completed" : ""}>{habit.name}</span>
      <button className={`habit-btn ${habit.completed ? "undo" : "complete"}`} onClick={() => toggleHabit(habit.id)}>
        {habit.completed ? "Undo" : "Complete"}
      </button>
    </li>
  ))}
</ul>
  </div>
       // Graph placeholder 
<div className="graph-placeholder">
  Habit Progress Graph Coming Soon
</div>
    </div>
  )
}

export default App;