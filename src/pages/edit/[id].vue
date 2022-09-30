<script setup lang="ts">
import FormulaireOffreMaison from "../../components/FormulaireOffreMaison.vue";
import { supabase } from "@/supabase";
defineProps({
  id: String,
});

</script>

<template>
    <div>
        <p>Edit</p>
        <FormulaireOffreMaison :id="id"/>
    </div>
</template>