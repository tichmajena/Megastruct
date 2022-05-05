<script>
  import { onMount } from "svelte";
  let section_2;
  let index = 1;
  let autoscroll;

  let divArray = [];
  let colors = ["bg-green-300", "bg-blue-300", "bg-pink-300"];

  onMount(() => {
    console.log(divArray);
    autoscroll = setInterval(scrolla, 2000);
  });

  function scrolla() {
    let i = index;
    console.table({ div: divArray[i], index: i });

    if (index > divArray.length - 1) {
      //log
      index = 0;
      i = 0;
      // clearInterval(autoscroll);

      // return;
    }
    divArray[i].scrollIntoView({
      behavior: "smooth",
    });
    console.log(index, divArray.length);

    index++;
  }
</script>

<button on:click={scrolla} class="btn fixed top-2 left-2">Scroll</button>
{#each [1, 2, 3] as slide, i}
  <div
    bind:this={divArray[i]}
    id="section_{i + 1}"
    class="{colors[i]} w-full h-screen"
  />
{/each}
