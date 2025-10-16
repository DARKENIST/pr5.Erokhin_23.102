
const users = [ 
  { id: 1, username: "admin", password: "StrashilkaIS", email: "adminka@example.com" },
  { id: 2, username: "user1", password: "user2007", email: "userka@example.com" }
  ];

let currentUser = null;

function login(username, password) {
  const user = users.find( u => u.username === username && u.password === password);

if (user) {
  currentUser = user;
  console.log('Welcome, ${user.username}');
  updateUI();
  return true;
} else {
  console.log("Incorrect Data");
  return false;
}
}
