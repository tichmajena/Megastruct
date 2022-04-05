<script>
  import con_manag from "$lib/assets/contruction management.svg";
  import civl_eng from "$lib/assets/civil engineering design.svg";
  import struct_eng from "$lib/assets/structural engineering.svg";

  // Create object rine Icon property and Service name
  // Fetch service projects from wordpress and display them

  export let id = "";
  export let item;
  export let number = 1;
  export let content = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia soluta quas
        aperiam sit ipsum magni error blanditiis exercitationem esse dolores, sed
        quae fugit fugiat, possimus, asperiores eligendi consectetur quidem nisi?`;
  export let service;
  export let fimg_url;
  export let position;
  console.log(fimg_url);
</script>

<li
  {id}
  class="w-full md:w-3/4 flex shrink-0 h-screen pt-48 snap-center py-10 mr-12"
>
  <div class="flex md:flex-row flex-col">
    <div class="mr-10 mb-10">
      <div class="">
        <img class="w-80" src={fimg_url} alt="" />
      </div>
    </div>
    <div class="">
      <div class="font-gotham flex flex-col mb-5">
        <span class="font-bold text-stone-900 text-2xl">{service}</span>
      </div>
      <div class="font-gotham text-stone-800 pr-5  md:pr-20 prose">
        {@html content}
      </div>
    </div>
    ooo
  </div>
</li>
