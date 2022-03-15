<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/project.json");

    console.log(res);

    if (res.ok) {
      const jsonData = await res.json();
      const services = await jsonData;

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
  export let services;
  console.log(services);
</script>

<div>
  {#each services as service}
    {service.title.rendered}
  {/each}
</div>
