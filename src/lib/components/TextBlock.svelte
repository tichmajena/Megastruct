<script>
  import Heading from "./Heading.svelte";
</script>

<div class="w-full py-10">
  <div class="container max-w-screen-md relative flex flex-col md:flex-row">
    <div class="md:w-1/4 w-full">
      <Heading>
        <slot name="heading" />
      </Heading>
    </div>
    <div class="md:w-3/4 w-full font-gotham text-gray-800">
      <slot name="content" />
    </div>
  </div>
</div>
