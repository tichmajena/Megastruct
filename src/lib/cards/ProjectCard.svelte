<script>
  import bg_img from "$lib/assets/sacred-heart-college-01.jpg";
  import Carousel from "$lib/components/Carousel.svelte";
  import { Slidy } from "svelte-slidy";

  export let id = "";
  export let title;
  export let image = bg_img;
  export let number = 1;
  export let slides = [];

  // const slides = gallery.map((image) => {
  //   return {
  //     id: image.id,
  //     src: image.guid,
  //   };
  // });
  const options = {
    slides: [],
    wrap: {
      id: "project_slidy",
      width: "100%",
      height: "100%",
      padding: "0",
      align: "middle",
      alignmargin: 50,
    },
    slide: {
      gap: 20,
      class: "",
      width: "100%",
      height: "100%",
      backimg: true,
      imgsrckey: "guid",
      objectfit: "cover",
      overflow: "hidden",
    },
    controls: {
      dots: true,
      dotsnum: false,
      dotsarrow: false,
      dotspure: true,
      arrows: true,
      keys: false,
      drag: true,
      wheel: true,
    },
    options: {
      axis: "x",
      loop: false,
      duration: 550,
    },
  };

  //export let content = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia soluta quas aperiam sit ipsum magni error blanditiis exercitationem esse dolores, sedquae fugit fugiat, possimus, asperiores eligendi consectetur quidem nisi?`;
</script>

<li
  {id}
  class="w-full flex flex-col md:flex-row shrink-0 snap-center pb-10 pt-24 h-screen"
>
  <div class="pr-10 pt-2 mb-4 md:w-1/5">
    <div class="md:pr-1 pl-1">
      <div class="h-12 md:border-r-2  md:border-l-0 border-l-2 border-white" />
    </div>
    <div class="font-gotham md:text-right py-2 flex flex-col">
      <span class="text-stone-400 text-5xl"
        >{#if number < 10}0{/if}{number}</span
      >
      <span class="text-white text-xl">{title}</span>
    </div>
    <div class="md:pr-1 pl-1">
      <div
        class="md:h-12 h-8 md:border-r-2 md:border-l-0 border-l-2 border-white"
      />
    </div>
  </div>

  <div class="aspect-video w-full relative overflow-hidden">
    <!-- <img src="{image}" alt="" /> -->
    <Slidy {...options} {slides}>
      <button slot="arrow-left" class="btn bg-red-600 bg-opacity-70 border-none"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
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
      <button
        slot="arrow-right"
        class="btn bg-red-600 bg-opacity-70  border-none"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
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
    </Slidy>
  </div>
</li>

<style global>
  :global("project_slidy" .arrow-left) {
    /* your custom CSS styles */
    background-color: red;
  }
  :global(.arrow-left) {
    /* your custom CSS styles */
    background-color: red;
  }
</style>
