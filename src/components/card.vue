<script setup lang="ts">
import Bathroom from "@/components/Bathroom.vue";
import Heart from "@/components/Heart.vue";
import Dimension from "@/components/Dimension.vue";
import Bed from "@/components/Bed.vue";
defineProps({
  nom: String,
  adress: String,
  prix: Number,
  favori: Boolean,
  image: String, // les images sont simplement l'URL absolue (depuis la racine, débute par '/' )
  nbrSDB: Number,
  nbrBeds: Number,
  dimension: Number,
});
</script>

<template>
  <figure>
    
    <img class="w-full h-48 object-cover mt-5 rounded-t-lg" :src="image" alt="" />
    <figcaption
      class="relative flex flex-col border-2 border-t-0 px-5 py-7 border-indigo-100" >    
      <h3 class="text-2xl text-gray-900">{{ nom }}</h3>
      <address class="my-2 not-italic text-gray-500">{{ adress }}</address>
      <hr class="my-2 border-t-2 border-indigo-100" />
      <div class="-order-1 flex items-center">
        <div class="text-2xl text-indigo-500">${{ prix.toLocaleString("en-US") }}</div>
        <div class="text text-gray-900">/months</div>
      </div>
      <div class="flex justify-between text-sm">
        <div><bed class="inline-block pr-1 align-top" /> {{ nbrBeds }} beds</div>
        <div><bathroom class="inline-block pr-1 align-top" /> {{ nbrSDB }} bathrooms</div>
        <div><dimension class="inline-block pr-1 align-top" /> {{ dimension }}</div>
      </div>
      <div class="absolute top-7 right-5 grid h-12 w-12 place-items-center rounded-full border-2 border-indigo-100">
        <heart :class="{ 'fill-red-400': true }" />
      </div>    
    </figcaption>
  </figure>
</template>