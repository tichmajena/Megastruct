<script>
  export let bar_color;
  // import bg_img from "$lib/assets/sacred-heart-college-01.jpg";
  import bg_img from "$lib/assets/private-resident.jpg";
  import construction from "$lib/assets/Constructio.jpg";

  import HeroNav from "./HeroNav.svelte";
  import logo_white from "$lib/assets/megastruct_logo_white.svg";
  import { hide_menu, scroll_y } from "$lib/js/store";
  import HomeCard from "$lib/cards/homeCard.svelte";
  import Carousel from "./Carousel.svelte";
  import Scroll from "./Scroll.svelte";

  import PageAnim from "$lib/animations/PageAnim.svelte";
  import CarouselNav from "./CarouselNav.svelte";

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

  let manualmode = false;

  function handleManual(e) {
    console.log(`Watii mwanangu?`, e.detail.message);
    manualmode = true;
  }

  function handleScroll() {
    console.log(y);
  }
  let imagesArry = [
    {
      text: "Structural Engineering",
      image: bg_img,
    },
    {
      text: "Civil Engineering",
      image: bg_img,
    },
    {
      text: "Water and waste water treatment and reticulation",
      image: bg_img,
    },
    {
      text: "Construction management ",
      image: construction,
    },
  ];

  const items = imagesArry.map((props, i) => ({
    props: { content: props, number: i + 1 },
    component: HomeCard,
  }));
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} on:scroll={handleScroll} />
<PageAnim>
  <Carousel
    loop={true}
    interval={2000}
    space={false}
    auto={!manualmode}
    name={"homeslider"}
    {items}
  />
  <div class="relative z-30 -mt-60">
    <CarouselNav on:manual={handleManual} name="homeslider" {items}>
      <button slot="previous" class="py-4 px-2 text-white"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg></button
      >
      <button slot="next" class="py-4 px-2 text-white"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg></button
      >
    </CarouselNav>
  </div>
</PageAnim>

<!-- <Scroll /> -->
<!-- <li>
      <div
        class=" w-full bg-cover bg-center bg-red-500 relative bg-opacity-50 overflow-clip h-screen"
      >
        <img
          src={bg_img}
          alt=""
          class=" absolute inset-0 top-1/2 -translate-y-1/2 object-cover w-full h-full"
        />
        <div class="p-2 text-white">1/6</div>
        <div class="mix-blend-multiply bg-gray-500 absolute inset-0" />
        <div class="container min-h-screen relative">
          <div
            class="relative md:top-20 top-10 md:left-0 -left-5 p-2 md:w-64 w-40"
          >
            <img src={logo_white} alt="" />
          </div>
          <div class="absolute bottom-25 right-0 w-full " />
          <div class="md:flex md:justify-end w-full">
            <div class="opacity-50 text-5xl mt-8 p-2">0{i + 1}</div>
          </div>
          <div class="md:flex md:justify-end relative">
            <div class=" border border-white md:w-1/3 md:-mr-40 w-1/2 " />
          </div>
          <div class="md:flex md:justify-end text-3xl p-2  ">
            <div class="md:flex md:justify-end w-12 text-right">
              {img.text}
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
    </li> -->
