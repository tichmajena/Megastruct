<script context="module">
  export const prerender = true;
</script>

<script>
  import Carousel from "$lib/components/Carousel.svelte";
  import Header from "$lib/components/Header.svelte";
  import Colors from "$lib/components/Colors.svelte";
  import { getItemId } from "$lib/components/Carousel.svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  let hashes = {};
  let colors = ["red", "blue", "green", "yellow", "orange", "purple"];

  function getNext(name, hash) {
    console.table({ name, hash });
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

  const items = colors.map((props) => ({
    props: { item: props },
    component: Colors,
  }));
  console.log(items);
</script>

<Header bar_color="{'red'}">
  <span slot="number">03</span>
  <span slot="sub-t">&#8203;</span>
  <span slot="heading">Home Page</span>
  <span slot="sub-b">&#8203;</span>
</Header>
<Carousel name="{'colors'}" items="{items}" />

<nav>
  {#each colors as item, i}
    <li>
      <a href="#{getItemId('colors', i)}">{item}</a>
    </li>{/each}
</nav>
{#key $page.url.hash}
  {#if -1 < getPrev("colors", $page.url.hash)}
    <a href="#{prevurl('colors', $page.url.hash)}">
      <button class="py-4 px-2 bg-sky-600">Prev</button>
    </a>
  {/if}
  {#if colors.length > getNext("colors", $page.url.hash)}
    <a href="#{nexturl('colors', $page.url.hash)}">
      <button class="py-4 px-2 bg-sky-600">Next</button>
    </a>
  {/if}
{/key}

<!-- <Carousel name="{'kara'}" items="{colors}" />

<nav>
  {#each colors as item, i}
    <li>
      <a href="#{getItemId('kara', i)}">{item}</a>
    </li>{/each}
</nav>
{#key $page.url.hash}
  {#if -1 < getPrev("kara", $page.url.hash)}
    <a href="#{prevurl('kara', $page.url.hash)}">
      <button class="py-4 px-2 bg-lime-600">Prev</button></a
    >
  {/if}
  {#if colors.length > getNext("kara", $page.url.hash)}
    <a href="#{nexturl('kara', $page.url.hash)}">
      <button class="py-4 px-2 bg-lime-600">Next</button>
    </a>
  {/if}
{/key} -->
