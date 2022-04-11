<script>
  import HeadingTwo from "./HeadingTwo.svelte";
  import bg_img from "$lib/assets/tools.jpg";
</script>

<div class="w-full py-10">
  <div class="container max-w-screen-lg relative flex flex-col md:flex-row">
    <div class="md:w-1/2 w-full  md:pr-10 flex items-center">
      <img src={bg_img} alt="" />
    </div>
    <div class="md:w-1/2 w-full font-gotham text-gray-800">
      <HeadingTwo>
        <slot name="heading" />
      </HeadingTwo>
      <slot name="content" />
    </div>
  </div>
</div>
