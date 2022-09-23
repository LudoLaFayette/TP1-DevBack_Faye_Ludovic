<script setup lang="ts">
import ForumulaireOffreMaison from "../../components/FormulaireOffreMaison.vue";
import { value supabase } from "../supabase";
defineProps({
  id: String,
});
const props = defineProps(["id"]);
</script>

<template>
    <div>
        <p>Edit</p>
        <FormulaireOffreMaison :id="id"/>
    </div>
</template>