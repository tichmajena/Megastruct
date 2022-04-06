<script context="module">
  import { browser } from "$app/env";
  export const prerender = true;
  export const router = browser;
</script>

<script>
  import PageAnim from "$lib/animations/PageAnim.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import TextBlock from "$lib/components/TextBlock.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ContactCard from "$lib/cards/ContactCard.svelte";
  //   import Animate from "$lib/components/Animate.svelte";
  //   import picture from "$lib/media/image1.jpeg";
  //   import mail_ic from "$lib/icons/mail-solid.svg";
  //   import phone_ic from "$lib/icons/phone-solid.svg";
  //   import place_ic from "$lib/icons/place-solid.svg";

  let email;
  let message;
  let sending = false;
  let ready = true;
  let success = false;
  let failed = false;
  let msg = "";

  $: body = {
    email,
    message,
    name: "Name",
    subject: "From Megastruct Website",
  };

  let apiURL =
    "https://www.megastruct.co.zw/cms/wp-json/contact-form-7/v1/contact-forms/4/feedback";

  async function sendForm() {
    ready = false;
    sending = true;

    let formData = new FormData();

    formData.append("your-name", body.name);
    formData.append("your-email", body.email);
    formData.append("your-subject", body.subject);
    formData.append("your-message", body.message);

    let res = await fetch(apiURL, {
      body: formData,
      method: "post",
    });

    let message = await res.json();
    if (message.status === "mail_sent") {
      sending = false;
      success = true;
    } else {
      sending = false;
      failed = true;

      msg = message.message;
    }
  }
</script>

<PageAnim>
  <div class="w-full h-full bg-stone-300 pt-16">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.871629631963!2d31.016035320936467!3d-17.770572396490657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931af975bff7df5%3A0xa0c20be32ceab3e!2sMegastruct%20Engineering%20Consultants!5e1!3m2!1sen!2szw!4v1648560173023!5m2!1sen!2szw"
      width="100%"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
  <div class="w-full px-6">
    <TextBlock>
      <span slot="heading">Contact us</span>
      <span slot="content"><ContactCard /></span>
    </TextBlock>
    <TextBlock>
      <span slot="heading">Send us a message</span>
      <span slot="content">
        <div class="w-full">
          <p class=" text-gray-600" />

          <div class="relative mb-4">
            <label for="email" class="hidden leading-7 text-sm text-gray-600"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              bind:value={email}
              placeholder="Your email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="hidden leading-7 text-sm text-gray-600"
              >Message</label
            >
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              bind:value={message}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="text-red-700 text-center text-sm py-2">
            {#if failed}
              {msg}
            {/if}
          </div>
          <button
            on:click={sendForm}
            class:bg-brandblue={ready}
            class:bg-green-600={success}
            class:bg-red-600={failed}
            class:bg-yellow-600={sending}
            class="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:text-brandgold rounded text-lg flex justify-center items-center"
            >{#if sending}
              <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg> Processing
            {:else if success}
              Received, thank you!
            {:else if failed}
              Somthing went wrong
            {:else if ready}
              Send
            {/if}</button
          >
        </div>
      </span>
    </TextBlock>
  </div>
  <Footer />
</PageAnim>
