<script>
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
  import Nav from "$lib/components/Nav.svelte";
</script>

<header>
  <Nav />
</header>

<main>
  <slot />
</main>

<footer></footer>
