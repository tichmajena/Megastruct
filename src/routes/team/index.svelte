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
  export let teams;
</script>

<div>
  {teams.title.rendered}
</div>
