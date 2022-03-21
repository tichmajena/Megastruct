<script context="module">
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
</script>

<script>
  import Header from "$lib/components/Header.svelte";
  export let services;
  console.log(services);
</script>

<Header>
  <span slot="number">03</span>
  <span slot="sub-t">What we do</span>
  <span slot="heading">Our Services</span>
  <span slot="sub-b">OurExpertise</span>
</Header>

<div>
  {#each services as service}
    {service.title.rendered}
  {/each}
</div>
