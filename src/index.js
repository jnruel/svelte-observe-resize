import ResizeObserver from 'resize-observer-polyfill';

// Singleton observer for all nodes
const resizeObserer = new ResizeObserver((entries) => {
  // Dispatch custom event when each node is resized
  entries.forEach(entry => {
    entry.target.dispatchEvent(new CustomEvent('resize', { detail: entry }));
  })
});

/**
 * Custom Svelte action
 *  - Uses Resize Observer API
 *  - Dispatch custom event when element is resized
 *
 * Example usage: `<div use:watchResize on:resize={handleResize}></div>`
 *
 * @param HTMLElement node
 * @param String box - sets the observe option for box. Can be set to 'content-box' (default) or 'border-box'
 */
export default function observeResize(node, box) {

  // Watch for node to resize
  resizeObserer.observe(node, box && { box } );

  return {
    // Called when node is unmounted
    destroy() {
      resizeObserer.unobserve(node);
    }
  }
}
