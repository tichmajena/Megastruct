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
      id: "",
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
      dotsnum: true,
      dotsarrow: true,
      dotspure: false,
      arrows: true,
      keys: true,
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
  id="{id}"
  class="w-full flex flex-col md:flex-row shrink-0 snap-center py-10"
>
  <div class="pr-10 pt-2 mb-4 md:w-1/5">
    <div class="md:pr-1 pl-1">
      <div
        class="h-12 md:border-r-2  md:border-l-0 border-l-2 border-white"
      ></div>
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
      ></div>
    </div>
  </div>

  <div class=" pr-5 md:pr-20 w-full h-full">
    <!-- <img src="{image}" alt="" /> -->
    <Slidy {...options} slides="{slides}" />
  </div>
</li>
