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
    class=" absolute inset-0 top-1/2 -translate-y-1/2 object-fill w-full h-full"
  />
  <div class="mix-blend-multiply bg-gray-500 absolute inset-0" />
  <div class="container min-h-screen relative">
    <div class="relativemd:top-20 top-10 md:left-0 -left-5 p-2 md:w-64 w-40">
      <img src={logo_white} alt="" />
    </div>
    <div class="absolute bottom-25 right-0 w-fit ">
      <div class="flex pb-3 flex-col justify-end ">
        <div class="flex flex-row">
          <span
            class="text-white font-gotham font-bold text-9xl mr-3 opacity-20 border-b-2 border-white "
            ><slot name="number">Expert</slot></span
          >

          <!-- <div class="h-full pt-4 pb-3">
            <div class="h-full border-r-2 border-white" />
          </div> -->
        </div>
        <!-- <div class="bg-white p-1 " style="background-color:{bar_color};" /> -->

        <div class="pl-4 pt-3 ">
          <span class="text-white font-gotham font-black text-2xl opacity-30"
            ><slot name="sub-t">&#8203;</slot></span
          >
          <h2 class="text-white font-gotham font-black text-5xl justify-start">
            <slot name="heading ">Engineering Solutions</slot>
          </h2>
          <span class="text-white font-gotham font-black text-2xl opacity-40"
            ><slot name="sub-b">&#8203;</slot></span
          >
        </div>
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
