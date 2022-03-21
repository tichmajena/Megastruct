<script>
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
  import Nav from "$lib/components/Nav.svelte";
</script>

<Nav>
  <main>
    <slot />
  </main>
</Nav>
<footer />
