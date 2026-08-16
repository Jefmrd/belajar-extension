let myLeads = [];
const inputel = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputel.value);
  inputel.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a href='${myLeads[i]}'>
        ${myLeads[i]}
      </a>
    </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

// function renderLeads() {
//   let listItems =
//     "<li><a href='" + myLeads[i] + "'>" + inputel.value + "</a></li>";
//   ulEl.innerHTML += listItems;
// }
