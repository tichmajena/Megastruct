<script>
  import logo_icon from "$lib/assets/megastruct_logo_icon_red.svg";
  export let id = "";
  export let item;
  export let number = 1;
  export let content = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia soluta quas
        aperiam sit ipsum magni error blanditiis exercitationem esse dolores, sed
        quae fugit fugiat, possimus, asperiores eligendi consectetur quidem nisi?`;
  export let service;
  export let position;
</script>

<li id="{id}" class="w-3/4 flex shrink-0 snap-center py-10 mr-12">
  <div class="mr-10">
    <div class="">
      <img class="w-80" src="{logo_icon}" alt="" />
    </div>
  </div>
  <div class="">
    <div class="font-gotham flex flex-col mb-5">
      <span class="font-bold text-stone-900 text-2xl">{service}</span>
    </div>
    <div class="font-gotham text-stone-800 pr-10  md:pr-20 prose">
      {@html content}
    </div>
  </div>
</li>
