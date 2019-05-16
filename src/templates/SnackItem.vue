<template>
  <div class="flex flex-row justify-between w-5/6">
    <div class="leading-normal shadow-lg bg-white rounded flex">
      <!-- <div class="h-48 w-48 flex-none bg-cover rounded-t text-center" style="background-image: url('https://nuts.com/images/auto/801x534/assets/8ba593eb1bec237d.jpg')" title="Gummy Bears">
      </div>-->

      <g-image
        class="h-full max-w-sm"
        src="$page.snack.image"
        alt="$page.snack.title"
      >

      <div class="w-1/3 flex flex-col p-4">
        <div class="text-indigo-darker font-bold font-sans text-xl mb-2">{{ $page.snack.title }}</div>
        <p class="text-indigo text-sm font-sans">{{ $page.snack.description }}</p>
      </div>

      <div class="flex flex-col items-center content-center self-center align-middle p-4">
        <div class>
          <a href>
            <svg
              class="h-6 w-6 fill-current stroke-current text-indigo-darker inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"></path>
            </svg>
          </a>
        </div>

        <div class>
          <a href>
            <svg
              class="h-6 w-6 fill-current stroke-current text-indigo-darker inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>


<page-query>
query SnackByPath($path: String!) {
  snack: contentfulSnack(path: $path ) {
    title
    description
    categories
    votes
    image {
      file {
        url
      }
    }
  }
}
</page-query>

<script>

export default {
  name: "SnackItem",
  components: {
  },
  metaInfo () {
    return {
      title: this.$page.snack.title
    }
  }
}
</script>

#
Template 