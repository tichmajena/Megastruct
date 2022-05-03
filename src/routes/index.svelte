<script context="module">
  export const prerender = true;
</script>

<script>
  import Carousel from "$lib/components/Carousel.svelte";
  import Header from "$lib/components/Header.svelte";
  import TextBlock from "$lib/components/TextBlock.svelte";
  import QuoteBlock from "$lib/components/QuoteBlock.svelte";
  import TextImageBlock from "$lib/components/TextImageBlock.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import Colors from "$lib/components/Colors.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ObjectivesCard from "$lib/cards/ObjectivesCard.svelte";
  import PageAnim from "$lib/animations/PageAnim.svelte";
  import { getItemId } from "$lib/components/Carousel.svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { onDestroy } from "svelte";

  let hashes = {};
  let colors = ["red", "blue", "green", "yellow", "orange", "purple"];

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

  const items = colors.map((props, i) => ({
    props: { item: props, number: i + 1 },
    component: ObjectivesCard,
  }));
</script>

<PageAnim>
  <Hero />
  <div class="w-full min-h-screen flex items-center">
    <TextBlock>
      <span slot="heading"> Welcome </span>
      <span slot="content">
        <p class="font-bold text-stone-400 text-2xl">
          MegaStruct leverages cutting edge engineering and technical expertise
        </p>
        <p>
          MegaStruct leverages cutting edge engineering and technical expertise,
          providing clients with innovative, cost effective and sustainable
          design solutions. With years of collective engineering experience in
          managing and executing projects in these environments; roads, water
          and sewer reticulation, bridges, dams, water reservoirs, and sewage
          treatment plants.
        </p>
      </span>
    </TextBlock>
  </div>
  <QuoteBlock>
    <span slot="heading">Our Mission</span>
    <span slot="content"
      >Delivering comprehensive engineering design solutions to meet client
      needs and enhance communities.</span
    >
  </QuoteBlock>
  <!-- <TextImageBlock>
    <span slot="heading"> Welcome </span>
    <span slot="content">
      <p>
        The right of everyone to a world of work free from violence and
        harassment has never before been clearly articulated in an international
        treaty. It also recognizes that such behaviours can constitute a human
        rights violation or abuse thus presenting to us with a standard setting
        statute which Zimbabwe is yet to adopt and align with national laws. The
        Recommendation also sets out practical measures, including leave for
        victims, flexible work arrangements, and awareness-raising.
      </p>
    </span>
  </TextImageBlock> -->
  <!--<Carousel name="{'colors'}" items="{items}" />

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
{/key} -->
  <Footer />
</PageAnim>

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
