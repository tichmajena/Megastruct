<!-- <script>
  export let projects;
  import { getItemId } from "$lib/components/Carousel.svelte";
  import { page } from "$app/stores";
</script>

<ul class="text-xs hidden xl:block w-2/12 text-stone-400 pt-32 text-right">
  {#each projects as item, i}
    <li
      class:text-white={`#${getItemId("project", i)}` === $page.url.hash}
      class="hover:text-stone-300 mb-1"
    >
      <a href="#{getItemId('project', i)}">
        <slot name="item" />
      </a>
    </li>{/each}
</ul> -->
