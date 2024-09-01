// Get elements
const habitList = document.getElementById('habit-list');
const addHabitForm = document.getElementById('add-habit-form');
const addHabitBtn = document.getElementById('add-habit-btn');
const habitNameInput = document.getElementById('habit-name');

// Habits array
let habits = [];

// Add event listeners
addHabitBtn.addEventListener('click', addHabit);
habitList.addEventListener('click', markHabitAsCompleted);

// Add habit function
function addHabit(e) {
    e.preventDefault();
    const habitName = habitNameInput.value.trim();
    if (habitName) {
        habits.push({ name: habitName, completed: false });
        renderHabitList();
        habitNameInput.value = '';
    }
}

// Mark habit as completed function
function markHabitAsCompleted(e) {
    if (e.target.tagName === 'LI') {
        const habitIndex = habits.findIndex(habit => habit.name === e.target.textContent);
        habits[habitIndex].completed = !habits[habitIndex].completed;
        renderHabitList();
    }
}

// Render habit list function
function renderHabitList() {
    habitList.innerHTML = '';
    habits.forEach((habit, index) => {
        const li = document.createElement('LI');
        li.textContent = habit.name;
        if (habit.completed) {
            li.style.textDecoration = 'line-through';
        }
        habitList.appendChild(li);
    });
}

// Initialize habits list
renderHabitList();