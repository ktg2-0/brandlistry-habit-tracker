import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddHabitTab from "./component/AddHabitTab.jsx";
import Dashboard from './component/Dashboard.jsx';

function App() {
const [activeTab, setActiveTab] = useState("Dashboard");
const [newHabit, setNewHabit] = useState("");
const [menuOpen, setMenuOpen] = useState(false);


  // Habit state
  const [habits, setHabits] = useState([
]);
const [habitDate, setHabitDate] = useState(new Date().toISOString().slice(0,10));
const addHabit = () => {
  if (!newHabit) return; // ignore empty input
  setHabits([
    ...habits,
    { id: Date.now(), name: newHabit, completed: false, date: habitDate } // use selected date
  ]);
  setNewHabit("");  // clear input
  setHabitDate(new Date().toISOString().slice(0,10)); // reset to today
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

        <button
  onClick={() => {
    setActiveTab("addHabit");
    setMenuOpen(false); // ✅ close menu after click
  }}
>
  Add Habit
</button>

        <button onClick={() => {
          setActiveTab("Report");
          setMenuOpen(false);
        }}>
          Report
        </button>

      </div>
    )}


    {/* ✅ TAB CONTENT GOES HERE */}
    {activeTab === "dashboard" && (
      <>
      <Dashboard
    habits={habits}
    toggleHabit={toggleHabit}
    totalTasks={totalTasks}
    dailyCompleted={dailyCompleted}
    weeklyCompleted={weeklyCompleted}
    monthlyCompleted={monthlyCompleted}
  />
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

{activeTab === "addHabit" && (
  <AddHabitTab
 habits={habits}
    newHabit={newHabit}
    setNewHabit={setNewHabit}
    habitDate={habitDate}        // ✅ selected date
    setHabitDate={setHabitDate}  // ✅ update state from input
    addHabit={addHabit}
    toggleHabit={toggleHabit}
/>
)}
{activeTab === "report" && <HistoryTab />}

    {activeTab === "report" && (
      <div>History Tab</div>
    )}


  
    </div>
  )
}

export default App;