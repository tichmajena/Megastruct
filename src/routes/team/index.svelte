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
  export let teams;
  console.log(teams);
</script>

<Header>
  <span slot="number">03</span>
  <span slot="sub-t">Our Approach</span>
  <span slot="heading">Our Team</span>
  <span slot="sub-b">Corporate Profiles</span>
</Header>

<div class="bg-transparent">
  {#each teams as team}
    {team.title.rendered}
  {/each}
</div>
