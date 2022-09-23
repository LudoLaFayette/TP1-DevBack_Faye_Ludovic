<script setup lang ="ts">
import {supabase} from '@/supabase';
import {ref} from "@vue/reactivity";
import CardMaison from "./card.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const maison = ref( { } );

const props = defineProps(["id"]);
if (props.id) {
 // On charge les données de la maison
 let { data, error } = await supabase
 .from("Maison")
 .select("*")
 .eq("id", props.id);
 if (error || !data) console.log("n'a pas pu charger le table Maison :", error);
 else maison.value = data[0];
}

async function upsertMaison(dataForm, node) {
 const { data, error } = await supabase.from("Maison").upsert(dataForm);
 if (error) node.setErrors([error.message])
 else {
 node.setErrors([]);
 router.push({ name: "edit-id", params: { id: data[0].id } });
 }
}
</script>

<template>
    <div>
        <div class = "p-2 ">
            <h2 class ="text - 2xl "> Resulat (Prévisualisation)</h2>
            <CardMaison v-bind="maison"/>
        </div>
        <div class="p-2">
            <FormKit type="form" v-model="maison"  @submit="upsertMaison" :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }">
                <FormKit name="nom" label="nom"
                :config="{
                    classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600',
                    },
                    }"/>
                <FormKit name = "prix" label="prix" type = "number"
                :config="{
                    classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600',
                    },
                    }"/>
                <FormKit name = "favori"   label = "mettre en valeur" type ="checkbox" wrapper-class="flex"/>
            </FormKit>        
        </div>
    </div>
</template>

  

