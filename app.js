let infoContainer = document.querySelector(".info-container");
let inputField = document.querySelector("#note");
let addBtn = document.querySelector(".add-btn");
let hide = document.querySelector(".hide");
let lessMore = document.querySelector(".less-more");
let readMore = document.querySelector(".read-more");
let readMe = document.querySelector(".read-me");
let count = 0;
addBtn.addEventListener("click", addNote);

function addNote() {
  if (inputField.value === "") return;
  else {
    count++;
    hide.style.display = "none";
    let noteTaker = document.createElement("div");
    noteTaker.classList.add("note-taker");
    let title = document.createElement("h2");
    title.textContent = "Note: " + count;
    let p = document.createElement("p");
    p.textContent = inputField.value;
    let button = document.createElement("button");
    button.textContent = "View Detail";
    button.addEventListener("click", () => {
      readMore.classList.add("active");
      readMe.textContent = p.textContent
    })
    noteTaker.append(title);
    noteTaker.append(p);
    noteTaker.append(button);
    infoContainer.append(noteTaker);
  }

  inputField.value = ''
}

lessMore.addEventListener("click", () => {
  readMore.classList.remove("active");
});


