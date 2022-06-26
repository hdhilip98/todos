const clickOutside = (node: Node): SvelteActionReturnType => {
  const handleClick = (event: MouseEvent) => {
    if (event.target instanceof Node && !node.contains(event.target)) {
      node.dispatchEvent(new CustomEvent("outclick"));
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
};

export default clickOutside;
