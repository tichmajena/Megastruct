<script context="module">
  // export const prerender = true;
  export const load = async ({ fetch }) => {
    const res = await fetch("/projects.json");

    if (res.ok) {
      const jsonData = await res.json();
      console.log(jsonData);
      const projects = await jsonData;

      return {
        props: { projects },
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
  import ProjectCard from "$lib/cards/ProjectCard.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import PageAnim from "$lib/animations/PageAnim.svelte";
  import { getItemId } from "$lib/components/Carousel.svelte";
  import { page } from "$app/stores";

  export let projects;
  let colors = ["red", "blue", "green", "yellow", "orange", "purple"];
  console.log(projects);

  const items = projects.map((props, i) => ({
    props: { title: props.title.rendered, number: i + 1 },
    component: ProjectCard,
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
</script>

<PageAnim>
  <Header bar_color="{'rgb(28 25 23)'}">
    <span slot="number">03</span>
    <span slot="sub-t">Our Approach</span>
    <span slot="heading">Our Projects</span>
    <span slot="sub-b">Our Mission</span>
  </Header>

  <div class="w-full px-6 bg-stone-900">
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
