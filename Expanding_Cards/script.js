const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


//     ChatGPT version



/*const cards = document.querySelectorAll('.card');

cards.forEach(card => {
	card.addEventListener('click', () => {
		// Close previously expanded card
		closeExpandedCard();
/ 
		// Expand current card
		card.classList.add('expanded');
	});
});

function closeExpandedCard() {
	const expandedCard = document.querySelector('.expanded');
	if (expandedCard) {
		expandedCard.classList.remove('expanded');
	}
}*/
