// ===== Logout Modal Logic =====
const logoutBtn = document.getElementById("logoutBtn");
const logoutModal = document.getElementById("logoutModal");
const confirmLogout = document.getElementById("confirmLogout");
const cancelLogout = document.getElementById("cancelLogout");

logoutBtn?.addEventListener("click", () => {
  logoutModal.style.display = "block";
});

cancelLogout?.addEventListener("click", () => {
  logoutModal.style.display = "none";
});

confirmLogout?.addEventListener("click", () => {
  window.location.href = "login.html";
});

window.addEventListener("click", (e) => {
  if (e.target === logoutModal) {
    logoutModal.style.display = "none";
  }
});

// ===== Add File Modal Logic =====
const addFileBtn = document.getElementById("addFileBtn");
const addFileModal = document.getElementById("addFileModal");
const submitFileBtn = document.getElementById("submitFileBtn");
const closeAddFileModal = document.getElementById("closeAddFileModal");

addFileBtn?.addEventListener("click", () => {
  addFileModal.style.display = "block";
});

submitFileBtn?.addEventListener("click", () => {
  const fileName = document.getElementById("fileNameInput").value.trim();
  if (fileName) {
    console.log("File Submitted:", fileName);
    addFileModal.style.display = "none";
    document.getElementById("fileNameInput").value = "";
  } else {
    alert("Please enter a file name.");
  }
});

closeAddFileModal?.addEventListener("click", () => {
  addFileModal.style.display = "none";
  document.getElementById("fileNameInput").value = "";
});

window.addEventListener("click", (e) => {
  if (e.target === addFileModal) {
    addFileModal.style.display = "none";
  }
});
