<script>
  import { page } from "$app/stores";
  import { getNextId } from "$lib/components/Carousel.svelte";
  import { createEventDispatcher } from "svelte";
  let hashes = {};

  const dispatch = createEventDispatcher();

  export let items = [];
  export let name = "";
  function getNext(name, hash) {
    let a = hash.split("-");

    // if (a[0] !== `#${name}` && hash !== "" && hashes[name]) {
    //   console.log(hashes[name], a[0], `#${name}`, hashes, name, hash);
    //   a = hashes[name].split("-");
    // }

    if (a[0] === `#${name}`) {
      hashes[a[0].substring(1)] = $page.url.hash;
    }

    if (a[0] !== `#${name}` && hash !== "") return 1;

    let i = a[a.length - 1];
    i = +i;
    i = i + 1;
    return i;
  }

  function nexturl(name, hash) {
    return `${name}-item-${getNext(name, hash)}`;
  }

  function prevurl(name, hash) {
    return `${name}-item-${getPrev(name, hash)}`;
  }

  function getPrev(name, hash) {
    let a = hash.split("-");

    let i = a[a.length - 1];
    i = +i;
    i = i - 1;
    return i;
  }
  let index = 0;
  function scrolla(direction) {
    dispatch("manual", { manual: true, message: "Ndouudza mhamha" });
    if (direction === "prev") {
      index--;
    } else if (direction === "next") {
      index++;
    }
    console.log(direction);

    let i = index;

    let element = document.querySelector(`#${getNextId(name, i)}`);
    console.log(`#${getNextId(name, i)}`);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    element.scrollIntoView({
      behavior: mediaQuery.matches ? "auto" : "smooth",
    });
  }

  //Phone  yangu yadzima

  console.log(getPrev(name, $page.url.hash), getNext(name, $page.url.hash));
</script>

{#if index > 0}
  <a on:click={() => scrolla("prev")}>
    <slot name="previous" />
  </a>
{/if}
{#if index < items.length - 1}
  <a on:click={() => scrolla("next")}>
    <slot name="next" />
  </a>
{/if}
