const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
let myLeads = []
const ulEl = document.querySelector("#ul-el")


inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value)
    renderLead()
    inputEl.value = "";
});


function renderLead()
{
    let listItem = `<li>    
                            <a target='_blank' href='${inputEl.value}'>
                            ${inputEl.value} 
                            </a>
                    </li>`
    ulEl.innerHTML += listItem;   
}
