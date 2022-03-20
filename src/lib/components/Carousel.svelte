<script context="module">
  export const getItemId = (name, i) => `${name}-item-${i}`;
</script>

<script>
  export let items = [];
  export let name = "";
</script>

<ul
  class="flex gap-6 overflow-y-auto w-full snap-x snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw] scroll-smooth scroll-mt-10 no-scrollbar"
>
  {#each items as { props, component }, i}
    <svelte:component this="{component}" {...props} id="{getItemId(name, i)}" />
  {/each}
</ul>

<style>
  /* Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
