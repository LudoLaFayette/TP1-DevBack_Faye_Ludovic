<script setup lang="ts">
import CardMaison from "../components/card.vue";
import maisons from "@/assets/Maisons.json";

const maisonns = [{
  image: "/images/maison2.png",
  nom: "BeverlyHills",
  price: 2500,
  adress: "2821 lake seville, Palm Harbor, TX",
  beds: 6,
  bathroom: 2,
  dimension: 66,
  favori:false,
},
{
  image: "/images/maison2.png",
  nom: "BeverlyHillsette",
  price: 1500,
  adress: "2821 lake sevillessss, Palm Harbor, TX",
  beds: 3,
  bathroom: 1,
  dimension: 55,
  favori:true
}];
console.log(maisonns);

</script>

<template>

  <div>
        <p>Liste</p>
        <!-- <CardMaison v-bind="maison[0]"/>
        <CardMaison v-bind="maison[1]"/> -->
        <CardMaison v-for="uneMaison of maisonns " :key="uneMaison.nom" v-bind="uneMaison"/>
    </div>
</template>