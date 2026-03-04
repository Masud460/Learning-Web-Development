function saveUserToStorage(username, email, pass) {
  localStorage.setItem(
    "userData",
    JSON.stringify({ username: username, email: email, pass: pass }),
  );
}

function saveCoursesToStorage(courses) {
  localStorage.setItem("courses", JSON.stringify(courses));
}

export { saveUserToStorage, saveCoursesToStorage };