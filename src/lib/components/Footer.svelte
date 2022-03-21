<script>
  import bg_img from "$lib/assets/sacred-heart-college-01.jpg";
  import logo_icon from "$lib/assets/megastruct_logo_icon_white-01.svg";
  //  style="background-image: url('{bg_img}');"
</script>

<div
  class=" w-full bg-cover bg-center bg-red-500 relative bg-opacity-50 overflow-clip"
>
  <img
    src={bg_img}
    alt=""
    class=" absolute inset-0 top-1/2 -translate-y-1/3 object-cover w-full"
  />
  <div class="mix-blend-multiply bg-gray-900 absolute inset-0" />
  <div class="container min-h-80 relative flex flex-col md:flex-row pt-16">
    <div class="relative w-1/4 mb-8">
      <img src={logo_icon} alt="" class="w-16" />
    </div>
    <div class="relative w-1/4 mb-8">
      <span class="font-gotham font-bold text-xl">Menu</span>
      <ul class="font-gotham mt-4">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/team">Team</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <div class="relative w-1/4 mb-8">
      <span class="font-gotham font-bold text-xl">Services</span>
      <ul class="font-gotham mt-4">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/team">Team</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <div class="relative w-1/4 mb-8">
      <span class="font-gotham font-bold text-xl">Contact us</span>
      <ul class="font-gotham mt-4">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/team">Team</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </div>
</div>
<div class="w-full bg-black">
  <div
    class="max-w-screen-lg w-full mx-auto flex flex-col md:flex-row py-2 justify-between "
  >
    <div class="font-gotham text-sm text-gray-600 my-2">
      Copyright Megastruct 2022
    </div>
    <div class="font-gotham text-sm text-gray-600 my-2">
      Developed by Imajenation Media
    </div>
  </div>
</div>
