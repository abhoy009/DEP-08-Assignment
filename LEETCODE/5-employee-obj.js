// 5. sort an array of employee objects by scores in ascending order

let employees = [
    { name: 'John', dob: 'Dec 15, 2007', score: 80 },
    { name: 'Ana', dob: 'Jan 15, 2009', score: 75 },
    { name: 'Zion', dob: 'Feb 15, 2011', score: 90 },
  ];

  employees.sort((a,b) => a.score - b.score)
  .forEach(employee => console.log(employee.score));
