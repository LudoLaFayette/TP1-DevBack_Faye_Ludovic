<script setup>
// const res = await fetch("/public/jSon/maisons.json");
// const maisons = await res.json();

import Card from "../components/card.vue";
import { supabase } from "../supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const quartiers = []; // à remplacer par l'appel à Supabase


let { data: Maison, error } = await supabase
  .from('quartier')
  .select('*')
  

</script>
            
<template>
    <Card v-for="quartier in quartiers" :key="quartier.id" v-bind="quartier"/>       
</template>
// ok
        