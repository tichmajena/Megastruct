<script>
  import HeroNav from "$lib/components/HeroNav.svelte";
  import { hide_menu, scroll_y } from "$lib/js/store";
  import logo_white from "$lib/assets/megastruct_logo_white.svg";

  export let number = 1;
  export let content;
  export let id = "";

  //   setTimeout(() => {
  //         error = false;
  //       }, 3000);
</script>

<li {id}>
  <div
    class="w-screen  hover:scale-500 bg-cover  bg-center bg-red-500 relative bg-opacity-50 overflow-hidden max-h-screen h-screen"
  >
    <img
      src={content.image}
      alt=""
      class="w-full absolute inset-0 top-1/2 -translate-y-1/2 object-cover h-full "
    />
    <div class="mix-blend-multiply bg-gray-500 absolute inset-0" />

    <div class="container absolute bottom-60 md:right-20 top-60 md:top-36">
      <div class="md:flex md:justify-end w-full">
        <div class="opacity-50 text-5xl mt-8 p-2">0{number}</div>
      </div>
      <div class="md:flex md:justify-end relative">
        <div class=" border border-white md:w-1/3 md:-mr-40 w-1/2 " />
      </div>
      <div class="md:flex md:justify-end text-3xl p-2  ">
        <div class="md:flex md:justify-end w-12 text-right">
          {content.text}
        </div>
      </div>
    </div>
  </div>
</li>
