<script>
  export let bar_color;
</script>

<div class="pt-24 w-full bg-red-400 ">
  <div class="container h-40 relative">
    <div class="absolute bottom-0 right-0 w-fit ">
      <div class="flex pb-3">
        <div class="flex">
          <span
            class="text-white font-gotham font-bold text-9xl mr-3 opacity-20"
            ><slot name="number">00</slot></span
          >
          <div class="h-full pt-4 pb-3">
            <div class="h-full border-r-2 border-white"></div>
          </div>
        </div>
        <div class="pl-4 pt-3">
          <span class="text-white font-gotham font-black text-2xl opacity-30"
            ><slot name="sub-t">&#8203;</slot></span
          >
          <h2 class="text-white font-gotham font-black text-5xl">
            <slot name="heading">Heading</slot>
          </h2>
          <span class="text-white font-gotham font-black text-2xl opacity-40"
            ><slot name="sub-b">&#8203;</slot></span
          >
        </div>
      </div>
      <div class="bg-white py-1" style="background-color:{bar_color};"></div>
    </div>
  </div>
</div>
