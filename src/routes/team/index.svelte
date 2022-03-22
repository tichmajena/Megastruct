<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/team.json");

    console.log(res);

    if (res.ok) {
      const jsonData = await res.json();
      const teams = await jsonData;

      return {
        props: { teams },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
</script>

<script>
  import Header from "$lib/components/Header.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import TeamCard from "$lib/cards/TeamCard.svelte";
  import PageAnim from "$lib/animations/PageAnim.svelte";
  import { getItemId } from "$lib/components/Carousel.svelte";
  import { page } from "$app/stores";

  export let teams;
  let colors = ["red", "blue", "green", "yellow", "orange", "purple"];
  const items = teams.map((props, i) => ({
    props: {
      name: props.title.rendered,
      content: props.content.rendered,
      position: props.position,
    },
    component: TeamCard,
  }));

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

  console.log(teams);
</script>

<PageAnim>
  <Header>
    <span slot="number">04</span>
    <span slot="sub-t">Our Approach</span>
    <span slot="heading">Our Team</span>
    <span slot="sub-b">Corporate Profiles</span>
  </Header>

  <div class="w-full px-6">
    <div class="max-w-screen-lg mx-auto py-8">
      <!--  -->
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
    </div>
  </div>
  <Footer />
</PageAnim>
