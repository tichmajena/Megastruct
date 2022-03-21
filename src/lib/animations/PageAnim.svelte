<script>
  import { fly, slide, fade, scale } from "svelte/transition";
</script>

<div transition:slide>
  <slot />
</div>
