// Save a new application
document.getElementById("appForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let entry = {
    company: document.getElementById("company").value,
    role: document.getElementById("role").value,
    date: document.getElementById("date").value,
    status: document.getElementById("status").value,
    notes: document.getElementById("notes").value
  };

  chrome.storage.local.get({applications: []}, (result) => {
    let apps = result.applications;
    apps.push(entry);
    chrome.storage.local.set({applications: apps}, () => {
      loadApplications();
    });
  });

  e.target.reset();
});

// Load applications
function loadApplications() {
  chrome.storage.local.get({applications: []}, (result) => {
    let listDiv = document.getElementById("list");
    listDiv.innerHTML = "";

    result.applications.forEach((app, index) => {
      let entryDiv = document.createElement("div");
      entryDiv.className = "entry";
      entryDiv.innerHTML = `
        <b>${app.company}</b> - ${app.role} (${app.status})<br>
        Applied: ${app.date}<br>
        Notes: ${app.notes}<br>
        <button data-index="${index}" class="deleteBtn">Delete</button>
        <hr>
      `;
      listDiv.appendChild(entryDiv);
    });

    // Hook up delete buttons
    document.querySelectorAll(".deleteBtn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let idx = e.target.getAttribute("data-index");
        deleteApplication(parseInt(idx));
      });
    });
  });
}

// Delete application
function deleteApplication(index) {
  chrome.storage.local.get({applications: []}, (result) => {
    let apps = result.applications;
    apps.splice(index, 1);
    chrome.storage.local.set({applications: apps}, () => {
      loadApplications();
    });
  });
}

document.addEventListener("DOMContentLoaded", loadApplications);
