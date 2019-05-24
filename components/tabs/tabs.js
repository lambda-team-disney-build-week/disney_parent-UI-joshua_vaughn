class TabLink {
	constructor(tabElement) {
		this.tabElement = tabElement;

		this.tabData = this.tabElement.dataset.tab;

		if (this.tabData === "all") {
			this.cards = document.querySelectorAll(".card");
		} else {
			this.cards = document.querySelectorAll(
				`.card[data-tab='${this.tabData}']`
			);
		}

		this.cards = Array.from(this.cards).map(about => new TabCard(about));

		this.tabElement.addEventListener("click", () => this.selectTab());
	}
	selectTab() {
		const tabs = document.querySelectorAll(".tab");

		tabs.forEach(tab => tab.classList.remove("active-tab"));
		this.tabElement.classList.add("active-tab");
		const cards = document.querySelectorAll(".card");

		cards.forEach(card => (card.style.display = "none"));

		this.cards.forEach(card => card.selectCard());
	}
}
class TabCard {
	constructor(cardElement) {
		this.cardElement = cardElement;
	}
	selectCard() {
		this.cardElement.style.display = "flex";
	}
}
let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).forEach(tabLink => new TabLink(tabLink));
