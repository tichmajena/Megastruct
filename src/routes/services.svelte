<!-- <script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/services.json");

    if (res.ok) {
      const jsonData = await res.json();
      const services = await jsonData;

      console.log(services);

      return {
        props: { services },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
</script> -->
<script>
  import Header from "$lib/components/Header.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ServiceCard from "$lib/cards/ServiceCard.svelte";
  import PageAnim from "$lib/animations/PageAnim.svelte";
  import { getItemId } from "$lib/components/Carousel.svelte";
  import { page } from "$app/stores";

  export let services;
  let hashes = {};
  let colors = ["red", "blue", "green", "yellow", "orange", "purple"];
  const items = services.map((props, i) => ({
    props: { service: props.title.rendered, content: props.content.rendered },
    component: ServiceCard,
  }));

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
    console.log(name, hash);
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
  <Header>
    <span slot="number">03</span>
    <span slot="sub-t">What we do</span>
    <span slot="heading">Our Services</span>
    <span slot="sub-b">OurExpertise</span>
  </Header>

  <div class="w-full px-6">
    <div class="max-w-screen-lg mx-auto py-8">
      <!--  -->
      <Carousel name={"services"} {items} />

      <!-- <nav>
      {#each colors as item, i}
        <li>
          <a href="#{getItemId('colors', i)}">{item}</a>
        </li>{/each}
    </nav> -->
      <div class="flex w-3/4 mx-auto -mt-60 pt-20">
        {#key $page.url}
          {#if -1 < getPrev("services", $page.url.hash)}
            <a href="#{prevurl('services', $page.url.hash)}">
              <button class="py-4 px-2 text-red-600"
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg></button
              >
            </a>
          {/if}
          {#if services.length > getNext("services", $page.url.hash)}
            <a href="#{nexturl('services', $page.url.hash)} ">
              <button class="py-4 px-2 text-red-600"
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg></button
              >
            </a>
          {/if}
        {/key}
      </div>
    </div>
  </div>
  <Footer />
</PageAnim>
