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
    on:scroll="{(e) => {
      $scroll_y = e.srcElement.scrollTop;
      console.log('scrolling', e.srcElement.scrollTop);
    }}"
  >
    <!-- Navbar -->

    <div
      class:hidden="{$hide_menu && $page.url.pathname === '/'}"
      class="w-full navbar bg-red-600 z-50 fixed"
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
              d="M4 6h16M4 12h16M4 18h16"></path></svg
          >
        </label>
      </div>
      <div class="flex-1 px-2 mx-2">
        <div
          class="absolute top-0 left-20 p-2 bg-white rounded-b-sm shadow-md w-16"
        >
          <img src="{logo_icon}" alt="" />
        </div>
      </div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li class="relative">
            <a href="/">Home</a>
            <div
              transition:scale
              class="p-0.5 absolute w-1/2 mx-auto left-1/2 -translate-x-1/2 -bottom-2 bg-white z-60"
              class:hidden="{$page.url.pathname !== '/'}"
            ></div>
          </li>
          <li class="relative">
            <a href="/about">About</a>
            <div
              transition:scale
              class="p-0.5 absolute w-1/2 mx-auto left-1/2 -translate-x-1/2 -bottom-2 bg-white z-60"
              class:hidden="{$page.url.pathname !== '/about'}"
            ></div>
          </li>
          <li class="relative">
            <a href="/services">Services</a>
            <div
              transition:scale
              class="p-0.5 absolute w-1/2 mx-auto left-1/2 -translate-x-1/2 -bottom-2 bg-white z-60"
              class:hidden="{$page.url.pathname !== '/services'}"
            ></div>
          </li>
          <li class="relative">
            <a href="/team">Team</a>
            <div
              transition:scale
              class="p-0.5 absolute w-1/2 mx-auto left-1/2 -translate-x-1/2 -bottom-2 bg-white z-60"
              class:hidden="{$page.url.pathname !== '/team'}"
            ></div>
          </li>
          <li class="relative">
            <a href="/projects">Projects</a>
            <div
              transition:scale
              class="p-0.5 absolute w-1/2 mx-auto left-1/2 -translate-x-1/2 -bottom-2 bg-white z-60"
              class:hidden="{$page.url.pathname !== '/projects'}"
            ></div>
          </li>
          <li class="relative">
            <a href="/contact">Contact</a>
            <div
              transition:scale
              class="p-0.5 absolute w-1/2 mx-auto left-1/2 -translate-x-1/2 -bottom-2 bg-white z-60"
              class:hidden="{$page.url.pathname !== '/contact'}"
            ></div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Page content here -->
    <slot><!-- optional fallback --></slot>
  </div>
  <div class="drawer-side ">
    <label for="my-drawer-3" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-red-700">
      <!-- Sidebar content here -->
      <li><a href="/">Home</a></li>
      <li class="relative">
        <a href="/about">About</a>
        <div class="p-0.5 absolute w-full -bottom-2 bg-white z-60"></div>
      </li>
    </ul>
  </div>
</div>
