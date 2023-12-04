export const scrollElementToView = (scrollToId: string): void => {
	const element = document.querySelector(`#${scrollToId}`) as HTMLElement;

	const elRect = element.getBoundingClientRect();

	const offset =
		Number(element.getAttribute("data-scroll-to-view-offset")) || 0;

	const scrollDistance = elRect.top + window.scrollY - offset - 99;

	window.scrollTo({
		top: scrollDistance,
		behavior: "smooth",
	});
};
