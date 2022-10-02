<script setup lang ="ts">
import { supabase } from "@/supabase";
import { ref } from "@vue/reactivity";
import CardMaison from "./card.vue";
import { useRouter } from "vue-router";
import { label } from "@formkit/inputs";

const router = useRouter();
const maison = ref({});

const props = defineProps(["id"]);
if (props.id) {
    // On charge les données de la maison
    let { data, error } = await supabase
        .from("Maison")
        .select("*")
        .eq("id_maison", props.id);
    if (error || !data)
        console.log("n'a pas pu charger le table Maison :", error);
    else maison.value = data[0];
}

async function upsertMaison(dataForm, node) {
    const { data, error } = await supabase.from("Maison").upsert(dataForm);
    if (error || !data) node.setErrors([error.message]);
    else {
        node.setErrors([]);
        router.push({ name: "edit-id", params: { id: data[0].id_maison } });
    }
}
const { data: dataQuartierCommune, error } = await supabase
  .from("quartiercommune")
  .select("*");
if (error) console.log("n'a pas pu charger la vue quartiercommune :", error);
</script>

<template>
    <div class="flex flex-row-reverse justify-center">
        <div class="p-2 ">
            <h2 class="text - 2xl "> Resulat (Prévisualisation)</h2>
            <CardMaison v-bind="maison" />
        </div>
        <div class="p-2 border-2 mt-20 bg-indigo-50 rounded-2xl">
            <FormKit type="form" v-model="maison" @submit="upsertMaison"
                :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }">
                <FormKit name="nom" label="nom" :config="{
                classes: {
                input: 'p-1 rounded border-gray-300 shadow-sm border',
                label: 'text-gray-600',
                },
                }" />
                <FormKit type="file" name="image" label="image" accept=".png,.jpeg,.svg,.web,.jpg,.pdf"
                    help="Formats autorisés:.png,.jpeg,.svg,.web,.jpg,.pdf" multiple :config="{
                    classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600',
                    },
                    }" />
                <FormKit name="adress" label="adress" :config="{
                classes: {
                input: 'p-1 rounded border-gray-300 shadow-sm border',
                label: 'text-gray-600',
                },
                }" />
                <FormKit name="prix" label="prix" type="number" :config="{
                classes: {
                input: 'p-1 rounded border-gray-300 shadow-sm border',
                label: 'text-gray-600',
                },
                }" />
                <FormKit name="nbrBeds" label="nbrBeds" type="number" :config="{
                classes: {
                input: 'p-1 rounded border-gray-300 shadow-sm border',
                label: 'text-gray-600',
                },
                }" />
                <FormKit name="nbrSDB" label="nbrSDB" type="number" :config="{
                classes: {
                input: 'p-1 rounded border-gray-300 shadow-sm border',
                label: 'text-gray-600',
                },
                }" />
                <FormKit name="dimension" label="dimension" :config="{
                classes: {
                input: 'p-1 rounded border-gray-300 shadow-sm border',
                label: 'text-gray-600',
                },
                }" />
                <FormKit name="favori" label="mettre en valeur" type="checkbox" wrapper-class="flex" :config="{
                classes: {
                label: 'text-gray-600',
                },
                }" />
                <FormKit name="code_Quartier" label="Quartier" type="select">
                    <option value="" :disabled="true">Choisir un quartier...</option>
                    <!-- À vous : deux petits `v-for` partant d'un `groupBy` pour produire :
    https://formkit.com/inputs/select#default-slot
  -->
                </FormKit>
            </FormKit>
        </div>
    </div>
</template>

  

