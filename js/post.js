// Functions

const cards = document.getElementsByClassName("card")
    
Array.prototype.forEach.call(cards, function(card) {
        card.addEventListener("click", function() {
            window.location.href = "/html/post.html"
        })
});