<script>
  import observeResize from '../dist/bundle.js';
  let width;
  let isResizing = false;

  function handleResize() {
    isResizing = true;
    setTimeout(() => { isResizing = false }, 1000);
  }
</script>

<main>
  <h1>Resize me!</h1>
  <div class="example" use:observeResize on:resize={handleResize} bind:clientWidth={width}>
    <h2>{width}px</h2>
    <h3 class="{isResizing === true ? 'resizing' : ''}">Resizing</h3>
  </div>
</main>

<style>
  main {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
    justify-content: center;
  }

  .example {
    width: 40%;
    height: 150px;
    background-color: coral;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h3 {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  h3.resizing {
    opacity: 1;
  }
</style>
