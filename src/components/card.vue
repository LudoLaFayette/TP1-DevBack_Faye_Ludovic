<script setup lang="ts">
import Bathroom from "@/components/Bathroom.vue";
import Heart from "@/components/Heart.vue";
import Dimension from "@/components/Dimension.vue";
import Bed from "@/components/Bed.vue";
defineProps({
  nom: String,
  adress:String,
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
    <!-- Pour changer la valeur d'un attribut on utilise un "binding" :
    https://vuejs.org/guide/essentials/template-syntax.html#attribute-bindings 
    Ici on affecte à l'attribut 'src' la 'props' "image" -->
    <img class="w-full h-48 object-cover" :src="image" alt="" />
    <figcaption
      class="relative flex flex-col border-2 border-t-0 border-indigo-100"
    >
      <!-- Pour changer une classe CSS en fonction d'un booléen : 
      https://vuejs.org/guide/essentials/class-and-style.html#binding-html-classes -->
      <heart :class="{ 'fill-red-300': favori }" />

      <!-- Pour afficher du contenu textuel, simplement utiliser l'interpolation par double accolades (qui contiendront le JS dont l'interpretation donne le résultat affiché). -->
      <div class="text-2xl font-bold text-indigo-500 pr-1">${{ prix }}</div>

      <h3 class="text-2xl text-gray-900">{{ nom }}</h3>
      <h3 class="text-2xl text-gray-900">{{ adress }}</h3>

      <hr class="border-indigo-100 border-t-2 my-4" />
      <div class="flex gap-5">
      <div><bathroom class="inline-block pr-1" />{{ nbrSDB }}</div>
      <div><bed class="inline-block pr-1" />{{ nbrBeds }}</div>
      <div><dimension class="inline-block pr-1" />{{ dimension }}</div>
      </div>

      
    </figcaption>
  </figure>
</template>