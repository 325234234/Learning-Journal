const header = document.querySelector("header")
const sectionPosts = document.getElementById("section-posts")
const titleLogo = document.getElementById("nav-title")
const burger = document.getElementById("nav-burger")
const burgerMenu = document.getElementById("burger-menu")

// EventListeners and user input
document.addEventListener("click", handleClick)

function handleClick(e) {
    if(e.target.id === "btn-viewmore") {
        viewMore()
    } else if(header.contains(e.target)) {
        window.location.href = "html/post.html"
    } else if(titleLogo.contains(e.target)) {
        window.location.href = "index.html"
    } else if(burger.contains(e.target)) {
        toggleMenu()
    }
}

// Functions

function renderPosts(postNumber) {
    let html = ``

    for (let i=0;i<postNumber;i++) {
        html += 
            `<section class="card">
                <img src="images/blog${Math.floor(Math.random()*12)+1}.jpg" class="card-image">
                <p class="card-date">Month day, year</p>
                <h2 class="card-heading">Lorem ipsum</h1>
                <p class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas lacus turpis, eu semper risus euismod vel. Nulla molestie elit velit, sed laoreet ex facilisis non.</p>
            </section>`
    }

    sectionPosts.innerHTML += html

    // add event listeners to all cards
    const cards = document.getElementsByClassName("card")
    
    Array.prototype.forEach.call(cards, function(card) {
        card.addEventListener("click", function() {
            window.location.href = "html/post.html"
        })
    });
}

function viewMore() {
    renderPosts(3)   
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}

function toggleMenu() {
    burgerMenu.classList.toggle("hidden")
}

// Build page on load with nine posts
renderPosts(9)
