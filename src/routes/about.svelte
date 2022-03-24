<script context="module">
  import { browser, dev } from "$app/env";

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
</script>

<script>
  import Header from "$lib/components/Header.svelte";
  import PageAnim from "$lib/animations/PageAnim.svelte";
  import TextBlock from "$lib/components/TextBlock.svelte";
  import TextImageBlock from "$lib/components/TextImageBlock.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ObjectivesCard from "$lib/cards/ObjectivesCard.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import HeadingTwo from "$lib/components/HeadingTwo.svelte";
  import { getItemId } from "$lib/components/Carousel.svelte";
  import { page } from "$app/stores";

  let objectives = [
    "To change the way clients think about the cost of having premium engineering designs prepared by highly trained experts by delivering premium designs at radically fair prices.",
    "To provide a flexible, simplified and affordable engineering design process that makes clients confident that they have invested in a project that will continue to be beneficial for future generations.",
    "To design simple and innovative technically viable engineering solutions responsive to clients' needs and an ever evolving environment.",
    "To develop and uphold a reputation for excellence and always delivering projects on time.",
    "To foster creativity in all processes and lead the industry in technical innovation",
  ];

  let hashes = {};

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

  const items = objectives.map((props, i) => ({
    props: { content: props, number: i + 1 },
    component: ObjectivesCard,
  }));
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<PageAnim>
  <Header>
    <span slot="number">02</span>
    <span slot="sub-t">Our Approach</span>
    <span slot="heading">About us</span>
    <span slot="sub-b">Our Mission</span>
  </Header>
  <div class="w-full min-h-screen flex items-center">
    <TextBlock>
      <span slot="heading"> Who we are </span>
      <span slot="content">
        <p class="mb-8">
          MegaStruct Consulting Engineers (Private) Limited is a dynamic,
          innovative and steadily growing Zimbabwean engineering consultancy
          operating under the Zimbabwean Company Laws. We are a locally owned
          and committed to maintaining a diverse and highly skilled team that
          provides timely and professional services of the highest standards.
          Our expertise lies in the following sectors: civil engineering;
          structural engineering; water and wastewater treatment and
          reticulation; and construction management.
        </p>
        <p>
          We collaborate with clients to design and implement superior and
          durable solutions that draw on out past successes to meet all civil
          and structural engineering needs. We develop solutions within client
          budgets without compromising on quality and provide project management
          services from initiation to completion. The MegaStruct guarantee is
          that we produce remarkable results within deadlines through
          cost-effective and viable design solutions and economical construction
          methods that adhere to current construction codes and specifications.
        </p>
      </span>
    </TextBlock>
  </div>
  <div class="w-full min-h-screen flex items-center bg-stone-200">
    <TextImageBlock>
      <span slot="heading">Our Approach</span>
      <span slot="content">
        <p>
          MegaStruct leverages cutting edge engineering and technical theory to
          provide clients with the latest in innovative, cost effective and
          sustainable design solutions. Our highly trained and professionally
          registered staff members are experienced to cover all aspects of
          engineering and project management. We use our years of engineering
          experience to manage and execute complex projects in challenging
          environments. These include; roads, water and sewer reticulation,
          bridges, dams, water reservoirs, and sewage treatment plants.
        </p>
      </span>
    </TextImageBlock>
  </div>
  <div class="w-full min-h-screen flex flex-col justify-center">
    <div class="flex w-3/4 mx-auto -mb-60">
      <!-- <div class="w-1/4"></div> -->
      <HeadingTwo>Our Objectives</HeadingTwo>
    </div>
    <Carousel name="{'objectives'}" items="{items}" />

    <!-- <nav>
      {#each objectives as item, i}
        <li>
          <a href="#{getItemId('objectives', i)}">{item}</a>
        </li>{/each}
    </nav> -->
    <div class="flex w-3/4 mx-auto -mt-60 pt-20">
      {#key $page.url}
        {#if -1 < getPrev("objectives", $page.url.hash)}
          <a href="#{prevurl('objectives', $page.url.hash)}">
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg></button
            >
          </a>
        {/if}
        {#if objectives.length > getNext("objectives", $page.url.hash)}
          <a href="#{nexturl('objectives', $page.url.hash)} ">
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg></button
            >
          </a>
        {/if}
      {/key}
    </div>
  </div>
  <Footer />
</PageAnim>
