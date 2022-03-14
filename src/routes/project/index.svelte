<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/project.json");

    console.log(res);

    if (res.ok) {
      const jsonData = await res.json();
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
  export let projects;
</script>

<div>
  {projects.title}
</div>
