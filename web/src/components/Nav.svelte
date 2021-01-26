<script context="module">
  import Hidden from "./Hidden.svelte";
  import ClickOutside from "svelte-click-outside";
  import { slide } from "svelte/transition";
  let child;
</script>

<script>
  let showDropdown = false;
  let showMobileMenu = false;
  function toggleDropdown() {
    showDropdown = !showDropdown;
  }
  function hideDropdown() {
    showDropdown = false;
  }
  let triggerEl;

  function toggleMobileMenu() {
    showMobileMenu = !showMobileMenu;
  }

  function hideMobileMenu() {
    showMobileMenu = false;
  }

  function safariWorkaround(node) {
    if (navigator.appVersion.includes("Safari")) {
      node.style.overflow = "hidden";
    }
  }
</script>

<nav
  class="flex w-full sm:relative items-center sm:justify-between flex-wrap bg-primary p-2"
>
  <div
    class="grid max-w-screen-lg lg:px-3 sm:p-0 grid-cols-3 grid-flow-col grid-rows-1 gap-x-2 w-full items-center justify-center text-secondary mx-auto"
  >
    <div class="col-start-2 text-center">
      <a on:click={hideMobileMenu} href="/">
        <span
          class="inline sm:hidden text-secondary font-extrabold tracking-normal text-2xl text-center "
          >FSNB</span
        >
      </a>
    </div>
    <div class="col-start-3 justify-self-end">
      <div class="hidden md:inline-block relative hover:text-opacity-75 active:text-white bg-transparent text-secondary">
        <a class="text-base font-semibold sm:text-lg mr-1"href="/about">About</a>
      </div>
      <div class="dropdown inline-block relative" transition:slide>
        <button
          bind:this={triggerEl}
          on:click={toggleDropdown}
          class="focus:outline-none font-semibold hover:text-opacity-75 active:text-white text-secondary py-1 px-1 inline-flex items-center">
          <span class=" sm:text-lg mr-1">Browse</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            ><path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>

        <ClickOutside on:clickoutside={hideDropdown} exclude={[triggerEl]}>
          <ul
            hidden={!showDropdown}
            class="dropdown-menu right-0 rounded bg-secondary text-primary font-semibold absolute pt-1"
          >
            <li on:click={hideDropdown} class="hover:text-white">
              <a
                class="text-base sm:text-lg py-2 px-4 block whitespace-no-wrap"
                href="/homes/chicago">💨 Chicago</a
              >
            </li>
            <li on:click={hideDropdown} class="hover:text-white">
              <a
                class="text-base sm:text-lg py-2 px-4 block whitespace-no-wrap"
                href="/homes/columbus">🏈 Columbus</a
              >
            </li>
          </ul>
        </ClickOutside>
      </div>
    </div>
    <div class="col-start-1">
      <div class="px-2">
        <a href="/">
          <span
            class="hover:text-opacity-75 hidden sm:block font-bold tracking-normal text-lg md:text-2xl text-secondary"
            >FOR SALE NOT BORING</span
          >
        </a>
      </div>
      <button
        on:click={toggleMobileMenu}
        class="md:hidden flex items-center px-3 py-2 border-2 rounded text-secondary border-secondary">
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
        >
      </button>
      {#if showMobileMenu}
        <div
          transition:slide
          use:safariWorkaround
          id="mobile-menu"
          class="w-full h-auto absolute left-0 right-0 bg-primary block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="px-4 py-2 text-lg text-secondary font-medium lg:flex-grow">
            <a
              on:click={hideMobileMenu}
              href="/newsletter"
              class="block mt-4 lg:inline-block lg:mt-0 text-secondary mr-4">
              Weekly Newsletter
            </a>
            <a
              on:click={hideMobileMenu}
              href="/about/"
              class="block mt-4 lg:inline-block lg:mt-0 text-secondary hover:text-secondary">
              About
            </a>

            <a
              on:click={hideMobileMenu}
              href="/signup"
              class="block mt-4 lg:inline-block lg:mt-0 text-secondary mr-4">
              Sign Up
            </a>
          </div>
        </div>
      {/if}
    </div>
  </div>
</nav>
