<script>
  import logo_icon from "$lib/assets/megastruct_logo_icon_red.svg";
  import { page } from "$app/stores";
  import { scale } from "svelte/transition";
  import { hide_menu, scroll_y } from "$lib/js/store";

  $: {
    if ($page.url.pathname === "/") {
      $hide_menu = true;
    } else {
      $hide_menu = false;
    }
  }
  export let fixed = false;

  function clBackcolor(color) {
    let bgColor = color;
  }
</script>

<!-- <div class="w-full bg-red-600 px-4 h-10 fixed z-50">
  <div class="container relative">
    <div class="relative top-0 left-0 p-2 bg-white w-16">
      <img src="{logo_icon}" alt="" />
    </div>
  </div>
</div> -->

<div class="drawer h-screen w-full font-gotham text-white">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div
    class="drawer-content flex flex-col "
    on:scroll={(e) => {
      $scroll_y = e.srcElement.scrollTop;
    }}
  >
    <!-- Navbar -->

    <div
      class:hidden={$hide_menu && $page.url.pathname === "/"}
      class="w-full navbar bg-red-600 z-50 fixed shadow-lg"
    >
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            /></svg
          >
        </label>
      </div>
      <div class="flex-1 px-2 mx-2">
        <div
          class="absolute top-0 right-20 md:left-20 p-2 bg-white rounded-b-sm shadow-md w-16"
        >
          <img src={logo_icon} alt="" />
        </div>
      </div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li class="relative ">
            <a class="focus:bg-red-600" sveltekit:prefetch href="/">Home</a>
            <div
              transition:scale
              class="p-0.5 absolute w-1/2 mx-auto left-1/2 -translate-x-1/2 -bottom-2 bg-white z-60"
              class:hidden={$page.url.pathname !== "/"}
            />
          </li>
          <li class="relative click">
            <a class="focus:bg-red-600" sveltekit:prefetch href="/about"
              >About</a
            >
            <div
              transition:scale
              class="p-0.5 absolute w-1/2 mx-auto left-1/2 -translate-x-1/2 -bottom-2 bg-white z-60"
              class:hidden={$page.url.pathname !== "/about"}
            />
          </li>
          <li class="relative">
            <a class="focus:bg-red-600" sveltekit:prefetch href="/services"
              >Services</a
            >
            <div
              transition:scale
              class="p-0.5 absolute w-1/2 mx-auto left-1/2 -translate-x-1/2 -bottom-2 bg-white z-60"
              class:hidden={$page.url.pathname !== "/services"}
            />
          </li>
          <li class="relative">
            <a class="focus:bg-red-600" sveltekit:prefetch href="/team">Team</a>
            <div
              transition:scale
              class="p-0.5 absolute w-1/2 mx-auto left-1/2 -translate-x-1/2 -bottom-2 bg-white z-60"
              class:hidden={$page.url.pathname !== "/team"}
            />
          </li>
          <li class="relative">
            <a class="focus:bg-red-600" sveltekit:prefetch href="/projects"
              >Projects</a
            >
            <div
              transition:scale
              class="p-0.5 absolute w-1/2 mx-auto left-1/2 -translate-x-1/2 -bottom-2 bg-white z-60"
              class:hidden={$page.url.pathname !== "/projects"}
            />
          </li>
          <li class="relative">
            <a class="focus:bg-red-600" sveltekit:prefetch href="/contact"
              >Contact</a
            >
            <div
              transition:scale
              class="p-0.5 absolute w-1/2 mx-auto left-1/2 -translate-x-1/2 -bottom-2 bg-white z-60"
              class:hidden={$page.url.pathname !== "/contact"}
            />
          </li>
        </ul>
      </div>
    </div>

    <!-- Page content here -->
    <slot><!-- optional fallback --></slot>
  </div>
  <div class="drawer-side ">
    <label for="my-drawer-3" class="drawer-overlay" />
    <ul class="menu p-4 overflow-y-auto md:w-80 w-36 bg-red-700">
      <!-- Sidebar content here -->
      <div class="text-4xl absolute right-0 top-0">x</div>

      <li><a sveltekit:prefetch href="/">Home</a></li>
      <li>
        <a sveltekit:prefetch href="/about">About</a>
      </li>
      <li>
        <a sveltekit:prefetch href="/services">Services</a>
      </li>
      <li>
        <a sveltekit:prefetch href="/team">Team</a>
      </li>
      <li>
        <a sveltekit:prefetch href="/projects">Projects</a>
      </li>
      <li>
        <a sveltekit:prefetch href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</div>

<style>
  .reset-style {
    background-color: brown;
  }
</style>
