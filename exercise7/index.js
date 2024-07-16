// This code will run when the page loads.
window.addEventListener("load", () => {
  // Get all the elements on the page that have click actions or will be changed as the game is played.
  // For starters, I've added the message div and the reset button.
  let rows = document.querySelectorAll(".row");
  let listEntries = document.querySelectorAll(".listEntry");
  let checkboxes = document.querySelectorAll("input[name=checkbox]");
  const submitButton = document.getElementById("submitNew");
  const addBox = document.getElementById("addNew");
  const container = document.querySelector(".container");

  submitButton.addEventListener("click", function () {
    let submitText = addBox.value;

    let row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("id", "r" + rows.length);
    container.appendChild(row);
    rows = document.querySelectorAll(".row");

    let list = document.createElement("div");
    list.setAttribute("class", "listEntry");
    list.setAttribute("id", "l" + listEntries.length);
    list.innerHTML = submitText;
    rows[listEntries.length].appendChild(list);
    listEntries = document.querySelectorAll(".listEntry");

    let cb = document.createElement("input");
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("name", "checkbox");
    cb.setAttribute("id", "c" + checkboxes.length);
    listEntries[checkboxes.length].appendChild(cb);
    checkboxes = document.querySelectorAll("input[name=checkbox]");

    for (let n = 0; n < checkboxes.length; n++) {
      checkboxes[n].addEventListener("change", function () {
        if (this.checked) {
          listEntries[n].style.textDecoration = "line-through";
          container.insertBefore(rows[n], null);
        } else {
          listEntries[n].style.textDecoration = "";
          container.insertBefore(rows[n], container.firstChild);
        }
      });
    }

    addBox.value = "Write a new item to add to the list here!";
  });
});
