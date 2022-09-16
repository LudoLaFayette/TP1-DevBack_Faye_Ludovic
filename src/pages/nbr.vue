<script setup lang"ts">
import CardMaison from '../components/card.vue'
import maisons from "@/assets/Maisons.json";
defineProps<{ nbr:String}>{};
</script>
<template>
    <div>
        <CardMaison v-bind="maisons[Number(nbr)]"/>
    </div>
</template>