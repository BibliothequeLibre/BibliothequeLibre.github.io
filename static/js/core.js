function toggleIsActive() {
    let ids = ["navBurger", "navbarBasicExample"];
    ids.forEach(id => {
        console.log(id);
        let element = document.getElementById(id);
        element.classList.toggle("is-active");
    });
}
