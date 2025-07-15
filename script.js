const users = [
  { name: "Amit Kumar", branch: "CSE", email: "amit@college.edu", year: 2023 },
  { name: "Neha Sharma", branch: "ECE", email: "neha@college.edu", year: 2024 },
  { name: "Raj Singh", branch: "IT", email: "raj@college.edu", year: 2022 },
  { name: "Priya Verma", branch: "CSE", email: "priya@college.edu", year: 2025 },
  { name: "Ankit Yadav", branch: "ME", email: "ankit@college.edu", year: 2023 },
  { name: "Simran Kaur", branch: "EE", email: "simran@college.edu", year: 2024 }
];

const userList = document.getElementById("userList");
const searchInput = document.getElementById("searchInput");
const sortButton = document.getElementById("sortButton");

function displayUsers(userArray) {
  userList.innerHTML = "";
  userArray.forEach(user => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <strong>${user.name}</strong><br>
      Branch: ${user.branch}<br>
      Year: ${user.year}<br>
      Email: ${user.email}
    `;
    userList.appendChild(card);
  });
}

// Initial Display
displayUsers(users);

// Search Filter
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(keyword) ||
    user.branch.toLowerCase().includes(keyword)
  );
  displayUsers(filtered);
});

// Sort by Year
sortButton.addEventListener("click", () => {
  const sorted = [...users].sort((a, b) => a.year - b.year);
  displayUsers(sorted);
});
