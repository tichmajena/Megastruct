<script>
  import { page } from "$app/stores";
  import { scale } from "svelte/transition";
  import { hide_menu } from "$lib/js/store";
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
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->

    <div
      class:fixed={$hide_menu === false}
      class="w-full navbar bg-red-600 z-50"
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
      <div class="flex-1 px-2 mx-2" />
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li class="relative">
            <a class="focus:bg-red-600" sveltekit:prefetch href="/">Home</a>
            <div
              transition:scale
              class="p-0.5 absolute w-1/2 mx-auto left-1/2 -translate-x-1/2 -bottom-2 bg-white z-60"
              class:hidden={$page.url.pathname !== "/"}
            />
          </li>
          <li class="relative">
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
    <ul class="menu p-4 overflow-y-auto w-80 bg-red-700">
      <!-- Sidebar content here -->
      <li><a sveltekit:prefetch href="/">Home</a></li>
      <li class="relative">
        <a sveltekit:prefetch href="/about">About</a>
        <div class="p-0.5 absolute w-full -bottom-2 bg-white z-60" />
      </li>
    </ul>
  </div>
</div>
