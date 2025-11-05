let myLeads = []
const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn")
// Parse the localstorage item back to an array using JSON method
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// Rendering out the leads if there is in the localstorage
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads)
}

// render() function to render the myLeads array on the DOM
// By creating list and storing it in variable
function render(leads)
{
    let listItems = "";
    // Using for loop to traverse through the whole array myLeads
    for (let i = 0; i < leads.length; i++) {
        // Use template literals for clear and readable string
        listItems += `
            <li>
                <a target="_blank" href="${leads[i]}">
                    ${leads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;   
}

tabBtn.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    });
})


// Listen to double click on delete btn
// Clear the localStorage, myleads and DOM, when clicked.
deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = [];
    render(myLeads)
});

// Events listener to listen to click on the save button
// It pushes the input value to myLeads array.
// And then clear out the input and call render() function.
inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value)
    // Converting the myLeads array values to string
    // And store in localStorage using JSON method
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = "";
    render(myLeads)
    
});

