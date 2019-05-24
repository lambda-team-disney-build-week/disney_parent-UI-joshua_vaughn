// cards //
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
		this.cards = Array.from(this.cards).map(banana => new TabCard(banana));
		this.tabElement.addEventListener("click", () => this.selectTab());
	}

	selectTab() {
		const tabs = document.querySelectorAll(".tab");
		tabs.forEach(tab => tab.classList.remove("active-tab"));
		const cards = document.querySelectorAll(".card");
		cards.forEach(card => (card.style.display = "none"));
		this.tabElement.classList.add("active-tab");
		this.cards.forEach(card => card.selectCard());
	}
}

class TabCard {
	constructor(cardElement) {
		this.cardElement = cardElement;
	}

	selectCard() {
		this.cardElement.forEach(card => (card.style.display = "flex"));
	}
}

let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).forEach(tabLink => new TabLink(tabLink));
class TabLink {
	constructor(link) {
		const tabNumber = link.dataset.tab;
		console.log("TabLink", tabNumber, '.content[data-tab="' + tabNumber + '"]');
		this.contentElement = document.querySelector(
			`.content[data-tab="${tabNumber}"]`
		);
		this.tabContent = new Content(this.contentElement);
		link.addEventListener("click", () => this.linkClick());
	}

	linkClick() {
		this.tabContent.toggle();
	}
}

class Content {
	constructor(content) {
		this.content = content;
		console.log("Content", this);
		this.content.classList.add("js-enabled");
	}

	toggle() {
		const active = document.querySelector(".tab-active");
		if (active) active.classList.remove("tab-active");
		this.content.classList.add("tab-active");
	}
}

const links = document.querySelectorAll(".link[data-tab]");
const tabContent = document.querySelector(".tab-content");
const defaultTab = tabContent.dataset.defaultTab;
console.log("default-tab", defaultTab);

links.forEach((link, index) => {
	const tabLink = new TabLink(link);
	console.log("tabLink", index, tabLink);

	if (index == defaultTab - 1) tabLink.linkClick();
});
console.log(links);
