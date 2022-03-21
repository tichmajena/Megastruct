<script>
  import Heading from "./Heading.svelte";
</script>

<div class="w-full py-10 ">
  <div class="container max-w-screen-lg relative flex flex-col md:flex-row">
    <div class="md:w-1/3 w-full">
      <Heading>
        <slot name="heading" />
      </Heading>
    </div>
    <div class="md:w-2/3 w-full font-gotham text-lg  text-stone-900 prose">
      <slot name="content" />
    </div>
  </div>
</div>
