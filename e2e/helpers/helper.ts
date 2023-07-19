export const isMobileView = (page: { viewportSize: () => any }) => {
  const viewportSize = page.viewportSize();
  return viewportSize.width <= 480;
};
