<script context="module">
  import Hidden from "./Hidden.svelte";
  let child;
</script>

<nav class="flex w-full sm:relative items-center justify-between flex-wrap bg-secondary p-2">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <a href="/">
      <span class="font-semibold tracking-normal text-lg md:text-xl tracking-tight">FOR SALE NOT BORING</span>
    </a>
  </div>
    <div class="hidden md:flex items-center">
        <a
          href="/homes/chicago/"
          class="block px-2 inline-block mt-0 text-white">
          Chicago
        </a>
        <a
          href="/homes/columbus/"
          class="block px-2 inline-block mt-0 text-white">
          Columbus
        </a>

        <a
          href="/about/"
          class="block px-2 inline-block mt-0 text-white">
          About
        </a>
    </div>

  <div class="md:hidden block">
    <button
      on:click={child.show}
      class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
      <svg
        class="fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
    </button>
  </div>
  <Hidden bind:this={child} on:show={(e) => (child.shown = e.detail)}>
    <div
      id="mobile-menu"
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm text-white lg:flex-grow">
        <a
          href="/homes/chicago/"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Chicago
        </a>
        <a
          href="/homes/columbus/"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Columbus
        </a>

        <a
          href="/about/"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          About
        </a>
      </div>
    </div>
  </Hidden>
</nav>
