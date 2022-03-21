<script>
  import bg_img from "$lib/assets/sacred-heart-college-01.jpg";
</script>

<div
  class="w-full relative overflow-clip min-h-screen flex justify-center items-center"
>
  <img
    src={bg_img}
    alt=""
    class=" absolute inset-0 top-1/2 -translate-y-1/2 object-cover w-full"
  />
  <div class="mix-blend-multiply bg-red-700 absolute inset-0" />
  <div class="container max-w-screen-lg relative flex flex-col md:flex-row">
    <div class="md:w-1/3 w-full">
      <!--  -->
      <div class="pr-10 pt-2 mb-4">
        <div class="md:pr-1 pl-1">
          <div
            class="h-20 md:border-r-2  md:border-l-0 border-l-2 border-white"
          />
        </div>
        <div
          class="font-gotham font-bold text-white text-5xl md:text-right py-2"
        >
          <slot name="heading" />
        </div>
        <div class="md:pr-1 pl-1">
          <div
            class="md:h-20 h-8 md:border-r-2 md:border-l-0 border-l-2 border-white"
          />
        </div>
      </div>
    </div>
    <div
      class="md:w-2/3 w-full font-gotham font-medium text-3xl text-white flex items-center"
    >
      <slot name="content" />
    </div>
  </div>
</div>
