<script>
  import profile_blank from "$lib/assets/profile_blank.jpg";
  export let id = "";
  export let item;
  export let number = 1;
  export let content = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia soluta quas
        aperiam sit ipsum magni error blanditiis exercitationem esse dolores, sed
        quae fugit fugiat, possimus, asperiores eligendi consectetur quidem nisi?`;
  export let name;
  export let fimg_url;
  export let position;
</script>

<li
  {id}
  class="w-3/4 flex md:flex-row flex-col shrink-0 h-screen md:pt-48 snap-center md:py-10 pt-24 pb-5 mr-12 px-6"
>
  <div class="md:mr-10 md:mb-8 mb-4" class:-ml-3={fimg_url === false}>
    <div class="w-32 md:w-60 relative">
      <img class="w-full" src={fimg_url || profile_blank} alt="" />
    </div>
  </div>
  <div class="">
    <div class="font-gotham flex flex-col md:mb-5 mb-2">
      <span class="font-bold text-stone-900 md:text-2xl text-xl">{name}</span>
      <span class="font-medium text-red-600 md:text-xl text-lg">{position}</span
      >
    </div>
    <div class="font-gotham text-stone-800 pr-10 md:w-5/6 md:pr-20 prose">
      {@html content}
    </div>
  </div>
</li>
