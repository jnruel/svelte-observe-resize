import ResizeObserver from 'resize-observer-polyfill';

/**
 * Custom Svelte action
 *  - Uses Resize Observer API
 *  - Dispatch custom event when element is resized
 *
 * Example usage: `<div use:watchResize on:resize={handleResize}></div>`
 *
 * @param HTMLElement node
 */
export default function observeResize(node) {
  const resizeObserer = new ResizeObserver((entries) => {
    // Dispatch custom event when node is resized
    node.dispatchEvent(new CustomEvent('resize'));
  });

  // Watch for node to resize
  resizeObserer.observe(node);

  return {
    // Called when node is unmounted
    destroy() {
      resizeObserer.unobserve(node);
    }
  }
}
