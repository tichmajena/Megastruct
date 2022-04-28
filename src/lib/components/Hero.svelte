<script>
  export let bar_color;
  // import bg_img from "$lib/assets/sacred-heart-college-01.jpg";
  import bg_img from "$lib/assets/private-resident.jpg";

  import HeroNav from "./HeroNav.svelte";
  import logo_white from "$lib/assets/megastruct_logo_white.svg";
  import { hide_menu, scroll_y } from "$lib/js/store";

  let y;
  let h;
  $: console.log(h);
  $: console.log(y); //  style="background-image: url('{bg_img}');"
  $: {
    if ($scroll_y >= h - 55) {
      console.log("show menu");
      $hide_menu = false;
    } else {
      $hide_menu = true;
    }
  }

  function handleScroll() {
    console.log(y);
  }
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} on:scroll={handleScroll} />
<div
  class=" w-full bg-cover bg-center bg-red-500 relative bg-opacity-50 overflow-clip h-screen"
>
  <img
    src={bg_img}
    alt=""
    class=" absolute inset-0 top-1/2 -translate-y-1/2 object-cover w-full h-full"
  />
  <div class="mix-blend-multiply bg-gray-500 absolute inset-0" />
  <div class="container min-h-screen relative">
    <div class="relative md:top-20 top-10 md:left-0 -left-5 p-2 md:w-64 w-40">
      <img src={logo_white} alt="" />
    </div>
    <div class="absolute bottom-25 right-0 w-full " />
    <div class="md:flex md:justify-end w-full">
      <div class="opacity-50 text-5xl mt-8 p-2">01</div>
    </div>
    <div class="md:flex md:justify-end relative">
      <div class=" border border-white md:w-1/3 md:-mr-40 w-1/2 " />
    </div>
    <div class="md:flex md:justify-end text-3xl p-2  ">
      <div class="md:flex md:justify-end w-12 text-right">
        Expert Engineering Solutions
      </div>
    </div>
  </div>
  <div
    class:bottom-16={$hide_menu === true}
    class:hidden={$hide_menu === false}
    class:relative={$hide_menu === true}
    class:absolute={$hide_menu === false}
    class="z-50"
  >
    <HeroNav />
  </div>
</div>
