// This code will run when the page loads.
window.addEventListener("load", () => {
  // Get all the elements on the page that have click actions or will be changed as the game is played.
  // For starters, I've added the message div and the reset button.
  let counter = 0;
  const submitButton = document.getElementById("submitNew");
  const addBox = document.getElementById("addNew");
  const container = document.querySelector(".container");

  submitButton.addEventListener("click", function () {
    let submitText = addBox.value;

    const checkyes = document.querySelector("input[name=checkbox]:checked");

    let row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("id", "r" + counter);
    if (checkyes) {
      container.insertBefore(row, checkyes.parentElement.parentElement);
    } else {
      container.appendChild(row);
    }
    
    let list = document.createElement("div");
    list.setAttribute("class", "listEntry");
    list.setAttribute("id", "l" + counter);
    list.textContent = submitText;
    row.appendChild(list);

    let cb = document.createElement("input");
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("name", "checkbox");
    cb.setAttribute("id", "c" + counter);
    list.appendChild(cb);

    counter++;

    cb.addEventListener("change", function () {
      if (this.checked) {
        list.style.textDecoration = "line-through";
        container.insertBefore(row, null);
      } else {
        list.style.textDecoration = "";
        container.insertBefore(row, container.firstChild);
      }
    });

    addBox.value = "";
  });
});
