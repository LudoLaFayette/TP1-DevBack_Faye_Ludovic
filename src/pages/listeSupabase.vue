<script setup>
// const res = await fetch("/public/jSon/maisons.json");
// const maisons = await res.json();

import Card from "../components/card.vue";
import { supabase } from "../supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const maisons = []; // à remplacer par l'appel à Supabase


let { data: Maison, error } = await supabase
  .from('Maison')
  .select('*')
  

</script>
            
<template>
    <Card v-for="maison in maisons" :key="maison.id" v-bind="maison"/>       
</template>
// ok
        