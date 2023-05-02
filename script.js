const Sidebar = document.getElementById("SideMenuBar")
const SidebarButton = document.getElementById("sidebar-button")

SidebarButton.addEventListener('click',()=>{
    Sidebar.classList.toggle('active');
});