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
  let hashes = {};
  let colors = ["red", "blue", "green", "yellow", "orange", "purple"];
  console.log(projects);

  const items = projects.map((props, i) => ({
    props: {
      title: props.title.rendered,
      image: props.project_images[0].guid,
      slides: props.project_images,
      number: i + 1,
    },
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
    <span slot="number">05</span>
    <span slot="sub-t">Our Approach</span>
    <span slot="heading">Our Projects</span>
    <span slot="sub-b">Our Mission</span>
  </Header>

  <div class="w-full px-6 bg-stone-900">
    <div class="flex gap-4 px-8">
      <div class="max-w-screen-lg mx-auto py-8">
        <!--  -->

        <Carousel name="{'project'}" items="{items}" />

        <div class="flex w-3/4 mx-auto">
          {#key $page.url}
            {#if -1 < getPrev("project", $page.url.hash)}
              <a href="#{prevurl('project', $page.url.hash)}">
                <button class="py-4 px-2 text-white"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg></button
                >
              </a>
            {/if}
            {#if projects.length > getNext("project", $page.url.hash)}
              <a href="#{nexturl('project', $page.url.hash)} ">
                <button class="py-4 px-2 text-white"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg></button
                >
              </a>
            {/if}
          {/key}
        </div>
      </div>
      <ul class="text-xs w-2/12 text-stone-400 pt-20 text-right">
        {#each projects as item, i}
          <li
            class:text-white="{`#${getItemId('project', i)}` ===
              $page.url.hash}"
            class="hover:text-stone-100 mb-1"
          >
            <a href="#{getItemId('project', i)}">{item.title.rendered}</a>
          </li>{/each}
      </ul>
    </div>
  </div>

  <Footer />
</PageAnim>
