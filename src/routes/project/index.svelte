<script context="module">
  export const prerender = true;
  export const load = async ({ fetch }) => {
    const res = await fetch("/project.json");

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
  export let projects;
</script>

<div>
  {projects.title}
</div>
