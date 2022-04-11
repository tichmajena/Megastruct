<script>
  import bg_img from "$lib/assets/laf.jpg";
  import logo_icon from "$lib/assets/megastruct_logo_icon_white-01.svg";
  import ContactCard from "$lib/cards/ContactCard.svelte";
  //  style="background-image: url('{bg_img}');"
</script>

<div
  class=" w-full bg-cover bg-center bg-red-500 relative bg-opacity-50 overflow-hidden text-stone-400"
>
  <img
    src={bg_img}
    alt=""
    class=" absolute inset-0 top-1/2 -translate-y-1/2 object-cover w-full h-full"
  />
  <div class="bg-red-600" />
  <div class="mix-blend-multiply bg-stone-900 absolute inset-0" />
  <div class="container min-h-80 relative flex flex-col md:flex-row pt-16">
    <div class="relative w-full md:w-1/4 pr-6 mb-8">
      <img src={logo_icon} alt="" class="w-16" />
    </div>
    <div class="relative w-full md:w-1/4 pr-6 mb-8">
      <span class="font-gotham font-bold text-xl text-stone-200">Menu</span>
      <ul class="font-gotham mt-4">
        <li><a class="hover:text-stone-200" href="/">Home</a></li>
        <li><a class="hover:text-stone-200" href="/about">About</a></li>
        <li><a class="hover:text-stone-200" href="/services">Services</a></li>
        <li><a class="hover:text-stone-200" href="/team">Team</a></li>
        <li><a class="hover:text-stone-200" href="/projects">Projects</a></li>
        <li><a class="hover:text-stone-200" href="/contact">Contact</a></li>
      </ul>
    </div>
    <div class="relative w-full md:w-1/4 pr-6 mb-8">
      <span class="font-gotham font-bold text-xl text-stone-200">Services</span>
      <ul class="font-gotham mt-4 list-disc pl-4">
        <li>
          <a class="hover:text-stone-200" href="/services#services-item-0"
            >Construction Management</a
          >
        </li>
        <li>
          <a class="hover:text-stone-200" href="/services#services-item-1"
            >Water And Waste Water Treatment And Reticulation</a
          >
        </li>
        <li>
          <a class="hover:text-stone-200" href="/services#services-item-2"
            >Civil Engineering</a
          >
        </li>
        <li>
          <a class="hover:text-stone-200" href="/services#services-item-3"
            >Structural Engineering
          </a>
        </li>
      </ul>
    </div>
    <div class="relative w-full md:w-1/4 pr-6 mb-8">
      <span class="font-gotham font-bold text-xl text-stone-200"
        >Contact us</span
      >
      <ContactCard />
    </div>
  </div>
</div>
<div class="w-full bg-black">
  <div
    class="container w-full mx-auto flex flex-col md:flex-row py-2 justify-between "
  >
    <div class="font-gotham text-sm text-stone-500 my-2">
      &copy; 2022 - MegaStruct Consulting Engineers (Pvt) Ltd
    </div>
    <div class="font-gotham text-sm text-stone-500 my-2">
      Handcrafted by Imajenation Media
    </div>
  </div>
</div>
