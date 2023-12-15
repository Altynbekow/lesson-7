const cards = document.querySelectorAll(".card")

cards.forEach(card => {

    card.onclick = () => {
        window.location.href = 'second.html'
    }
});