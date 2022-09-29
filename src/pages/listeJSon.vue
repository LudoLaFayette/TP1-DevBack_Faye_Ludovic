<script setup>
import CardMaison from "../components/card.vue";
import maisons from "@/assets/Maisons.json";
</script>
            
        <template>
            <div>
                <div class="p-2">Page liste avec données JSON</div>
            </div>
            <div >
                <CardMaison  v-for="uneMaison of maisons " :key="uneMaison.nom" v-bind="uneMaison"/>
            </div>
    
    
        </template>