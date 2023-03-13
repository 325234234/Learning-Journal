const cards = document.getElementsByClassName("card")
const titleLogo = document.getElementById("nav-title")
const burger = document.getElementById("nav-burger")
const burgerMenu = document.getElementById("burger-menu")

// EventListeners and user input
document.addEventListener("click", handleClick)

function handleClick(e) {
    if(titleLogo.contains(e.target)) {
        window.location.href = "/index.html"
    } else if(burger.contains(e.target)) {
        toggleMenu()
    }
}
    
Array.prototype.forEach.call(cards, function(card) {
        card.addEventListener("click", function() {
            window.location.href = "/html/post.html"
        })
});

function toggleMenu() {
    burgerMenu.classList.toggle("hidden")
}
