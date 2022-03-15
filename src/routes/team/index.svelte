<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/project.json");

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
  export let teams;
  console.log(teams);
</script>

<div class="bg-transparent">
  {#each teams as team}
    {team.title.rendered}
  {/each}
</div>
