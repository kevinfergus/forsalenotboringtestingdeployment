<script>
  export let showOnPx = 550;
  let hidden = true;

  function goTop() {
    document.body.scrollIntoView();
  }

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<style>
  .back-to-top {
    opacity: 1;
    transition: opacity 0.5s, visibility 0.5s;
    user-select: none;
    /* left: 50%;
    transform: translateX(-50%); */
  }

  .back-to-top.hidden {
    opacity: 0;
    visibility: hidden;
  }
</style>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top w-40 text-white text-center bg-secondary text-lg font-semibold px-3 py-2 mt-3 rounded-lg mx-auto" on:click={goTop} class:hidden>☝️ Back to Top</div>
