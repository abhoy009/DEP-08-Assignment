/* Problem 2.  Task Tracker
Description:

You have an array of task objects. Each task has a taskName, a completed status (boolean), and a priority (numerical value where lower numbers indicate higher priority). Your tasks are:
find: Identify the first task with a high priority (for example, priority less than 3).
findIndex: Find the index of the first task that is not completed.
reduce: Count how many tasks have been completed.
(forEach): Print all task names.
const tasks = [   { taskName: "Write report", completed: true, priority: 2 },   { taskName: "Attend meeting", completed: false, priority: 3 },   { taskName: "Fix bug", completed: false, priority: 1 },   { taskName: "Update website", completed: true, priority: 4 } ];
*/

const tasks = [
  { taskName: "Write report", completed: true, priority: 2 },
  { taskName: "Attend meeting", completed: false, priority: 3 },
  { taskName: "Fix bug", completed: false, priority: 1 },
  { taskName: "Update website", completed: true, priority: 4 },
];

const highPriorityTask = tasks.find((task) => task.priority < 3);
console.log("First high-priority task:", highPriorityTask);

const firstIncompleteIndex = tasks.findIndex((task) => !task.completed);
console.log("Index of first incomplete task:", firstIncompleteIndex);

const completedTaskCount = tasks.reduce((count, task) => {
  return task.completed ? count + 1 : count;
}, 0);
console.log("Number of completed tasks:", completedTaskCount);

console.log("\n All task names:");
tasks.forEach((task) => {
  console.log(`- ${task.taskName}`);
});

console.log("\n Detailed task information:");
tasks.forEach((task) => {
  console.log(
    `Task: ${task.taskName} | ` +
      `Priority: ${task.priority} | ` +
      `Status: ${task.completed ? "Completed" : "Pending"}`
  );
});
