<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/service.json");

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
</script>

<div>
  {services.title.rendered}
</div>
