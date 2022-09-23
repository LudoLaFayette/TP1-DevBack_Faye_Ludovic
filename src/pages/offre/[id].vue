<script setup lang="ts">
import Maisons from '../../assets/maisons.json'
import card from '../../components/card.vue'

defineProps ({
    id:String,
})
</script>

<template>
    <div>
        <p>{{id}}</p>
        <Card :prix="Maisons[id].prix"
              :image="Maisons[id].image"
              :nom="Maisons[id].nom"
              :adress="Maisons[id].adress/>
    </div>
</template>