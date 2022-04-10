<script context="module">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`,
      },
    };
  }
</script>

<script>
  export let title;
</script>

<div class="h-screen w-full flex justify-center items-center">
  <h1 class="text-stone-400 font-gotham font-bold text-4xl">{title}</h1>
</div>
