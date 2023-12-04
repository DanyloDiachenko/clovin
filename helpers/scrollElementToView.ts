export const scrollElementToView = (scrollToId: string): void => {
	const element = document.querySelector(`#${scrollToId}`) as HTMLElement;

	const elRect = element.getBoundingClientRect();

	const scrollDistance = elRect.top - window.scrollY;

	const offset =
		Number(element.getAttribute("data-scroll-to-view-offset")) || 0;

	window.scrollTo({
		top: scrollDistance + offset - 100,
		behavior: "smooth",
	});
};