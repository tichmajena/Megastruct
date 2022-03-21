<script>
  export let id = "";
  export let item;
  export let number = 1;
  export let content;

  let hh = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia soluta quas
      aperiam sit ipsum magni error blanditiis exercitationem esse dolores, sed
      quae fugit fugiat, possimus, asperiores eligendi consectetur quidem nisi?`;
</script>

<li id="{id}" class="w-3/4 flex shrink-0 snap-center py-10">
  <div class="flex">
    <span class="font-gotham font-black md:text-8xl text-5xl text-gray-300"
      >{#if number < 10}0{/if}{number}</span
    >
    <div class="h-full pt-0 pb-0 md:px-6 px-4">
      <div class="h-full border-r-2 border-red-600"></div>
    </div>
  </div>
  <div class="">
    <div
      class="font-gotham font-medium text-gray-400 md:text-3xl text-xl pr-10 md:pr-20"
    >
      {content}
    </div>
  </div>
</li>
