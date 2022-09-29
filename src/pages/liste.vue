<script setup lang="ts">
import CardMaison from "../components/card.vue";


const maisonns = [{
  image: "/images/maison2.png",
  nom: "BeverlyHills",
  prix: 2500,
  adress: "2821 lake seville, Palm Harbor, TX",
  nbrBeds: 6,
  nbrSDB: 2,
  dimension: 66,
  favori:false,
},
{
  image: "/images/maison2.png",
  nom: "BeverlyHillsette",
  prix: 1500,
  adress: "2821 lake sevillessss, Palm Harbor, TX",
  nbrBeds: 3,
  nbrSDB: 1,
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