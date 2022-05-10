<!-- <script context="module">
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
</script> -->
<script>
  import Header from "$lib/components/Header.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import TeamCard from "$lib/cards/TeamCard.svelte";
  import PageAnim from "$lib/animations/PageAnim.svelte";
  import { getItemId } from "$lib/components/Carousel.svelte";
  import { page } from "$app/stores";
  import CarouselNav from "$lib/components/CarouselNav.svelte";

  export let teams;
  let colors = ["red", "blue", "green", "yellow", "orange", "purple"];
  let hashes = {};
  const items = teams.map((props, i) => ({
    props: {
      name: props.title.rendered,
      content: props.content.rendered,
      position: props.position,
      fimg_url: props.fimg_url,
    },
    component: TeamCard,
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
    <span slot="number">04</span>
    <span slot="sub-t">The Experts</span>
    <span slot="heading">Our Team</span>
    <span slot="sub-b">Corporate Profiles</span>
  </Header>

  <div class="w-full ">
    <div class="mx-auto py-8">
      <!--  -->
      <Carousel name={"team"} {items} />

      <div class="flex w-3/4 mx-auto -mt-60 pt-20 px-5 relative z-30">
        <CarouselNav name={"team"} {items}>
          <button slot="previous" class="py-4 px-2 text-red-600"
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

          <button slot="next" class="py-4 px-2 text-red-600"
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
        </CarouselNav>

        <!-- {#key $page.url}
          {#if -1 < getPrev("team", $page.url.hash)}
            <a href="#{prevurl('team', $page.url.hash)}">
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
          {#if teams.length > getNext("team", $page.url.hash)}
            <a href="#{nexturl('team', $page.url.hash)} ">
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
        {/key} -->
      </div>
    </div>
  </div>
  <Footer />
</PageAnim>
