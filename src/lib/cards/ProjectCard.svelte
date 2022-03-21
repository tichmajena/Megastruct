<script>
  import bg_img from "$lib/assets/sacred-heart-college-01.jpg";
  export let id = "";
  export let item;
  export let number = 1;
  export let content = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia soluta quas
        aperiam sit ipsum magni error blanditiis exercitationem esse dolores, sed
        quae fugit fugiat, possimus, asperiores eligendi consectetur quidem nisi?`;
</script>

<li {id} class="w-full flex flex-col md:flex-row shrink-0 snap-center py-10">
  <div class="pr-10 pt-2 mb-4 md:w-1/5">
    <div class="md:pr-1 pl-1">
      <div class="h-12 md:border-r-2  md:border-l-0 border-l-2 border-white" />
    </div>
    <div class="font-gotham md:text-right py-2 flex flex-col">
      <span class="text-stone-400 text-5xl">02</span>
      <span class="text-white text-xl"
        >Lorem ipsum dolor sit amet consectetur</span
      >
    </div>
    <div class="md:pr-1 pl-1">
      <div
        class="md:h-12 h-8 md:border-r-2 md:border-l-0 border-l-2 border-white"
      />
    </div>
  </div>

  <div class="">
    <div
      class="font-gotham font-medium text-stone-400 md:text-3xl text-xl pr-10 md:pr-20"
    >
      <img src={bg_img} alt="" />
    </div>
  </div>
</li>
