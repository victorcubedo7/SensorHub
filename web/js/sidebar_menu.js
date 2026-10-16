function toggleSidebarMenu() {

    let menu = document.getElementById("sidebar-menu");
    let btn = document.getElementById("sidebar-btn");

    if (menu.style.display === "block") {

        menu.style.display = "none";

        btn.classList.remove("sidebar-btn-open");

        btn.innerHTML = "☰";

    } else {

        menu.style.display = "block";

        btn.classList.add("sidebar-btn-open");

        btn.innerHTML = "←";
    }

}