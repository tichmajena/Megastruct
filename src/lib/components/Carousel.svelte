<script context="module">
  export const getItemId = (name, i) => `${name}-item-${i + 1}`;

  export const getNextId = (name, i) => `${name}-item-${i + 1}`;
</script>

<script>
  import { onMount } from "svelte";
  export let items = [];
  export let name = "";
  export let space = true;
  export let auto = false;
  export let autoscroll;
  export let interval = 2000;
  export let loop = false;

  let index = 0;

  onMount(() => {
    autoscroll = auto && setInterval(scrolla, interval);
  });

  $: {
    if (auto === false) clearInterval(autoscroll);
  }

  function scrolla() {
    let i = index;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let element = document.querySelector(`#${getNextId(name, i)}`);

    if (index > items.length - 1 && loop === true) {
      //log
      index = 0;
      i = 0;
      // clearInterval(autoscroll);

      // return;
    } else if (index > items.length - 1 && loop === false) {
      clearInterval(autoscroll);

      return;
    } else {
      element.scrollIntoView({
        behavior: mediaQuery.matches ? "auto" : "smooth",
      });

      index++;
    }
  }
</script>

<ul
  class="flex  overflow-visible overflow-y-auto w-full snap-x snap-mandatory before:shrink-0  after:shrink-0  scroll-smooth scroll-mt-10 no-scrollbar {space
    ? 'after:w-[30vw] before:w-[30vw] gap-6'
    : ''}"
>
  {#each items as { props, component }, i}
    <svelte:component this={component} {...props} id={getItemId(name, i)} />
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
