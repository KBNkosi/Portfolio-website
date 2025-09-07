/* --- NAVIGATION TOGGLE --- */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* --- TABS LOGIC --- */
function showTab(evt, tabName) {
    
    const tabContents = document.querySelectorAll(".tabContent");
    tabContents.forEach(tab => tab.classList.remove("active"));

   
    const tabButtons = document.querySelectorAll(".tabBtn");
    tabButtons.forEach(btn => btn.classList.remove("active"));

    
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Ensure the default tab is shown when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
    const activeTabContent = document.querySelector('.tabContent.active');
    const activeTabButton = document.querySelector('.tabBtn.active');

    if (!activeTabContent || !activeTabButton) {
        
        const defaultTabContent = document.getElementById('achievements'); 
        const defaultTabButton = document.querySelector('.tabButtons .tabBtn:last-child'); 

        if (defaultTabContent && defaultTabButton) {
            defaultTabContent.classList.add('active');
            defaultTabButton.classList.add('active');
        }
    }
});