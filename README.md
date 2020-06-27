# svelte-observe-resize

A [Svelte 3](https://svelte.dev/) action to use the resize observer for a specific element.

## Install

`npm install svelte-observe-resize --save-dev`

## Usage

```html
<script>
  import observeResize from 'svelte-observe-resize';

  function handleResize() {
    // called when element is resized
  }
</script>

<main>
  <div use:observeResize on:resize={handleResize}></div>
</main>
```
