<script setup lang ="ts">
import {  supabase } from "@/supabase";
import {  ref } from "@vue/reactivity";
import {  useRouter } from "vue-router";
import {  label } from "@formkit/inputs";
import groupBy from "@/lodash/groupBy";

const router = useRouter();
const quartier = ref({});

const props = defineProps(["id"]);
if (props.id) {
  // On charge les données de la quartier
  let { data, error } = await supabase
    .from("quartier")
    .select("*")
    .eq("id_quartier", props.id);
  if (error || !data)
    console.log("n'a pas pu charger le table Maison :", error);
  else quartier.value = data[0];
}

async function upsertQuartier(dataForm, node) {
  const { data, error } = await supabase.from("quartier").upsert(dataForm);
  if (error || !data) node.setErrors([error.message]);
  else {
    node.setErrors([]);
    router.push({ name: "edit-id", params: { id: data[0].id_quartier } });
  }
}
</script>

<template>
    <div class="flex flex-row-reverse justify-center">
        <div class = "p-2 ">
            <h2 class ="text - 2xl "> Resulat (Prévisualisation)</h2>
            <CardMaison v-bind="quartier"/>
        </div>
        <div class="p-2 border-2 mt-20 bg-indigo-50 rounded-2xl">
            <FormKit type="form" v-model="quartier"  @submit="upsertQuartier" :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }">
                <FormKit name="libelle_quartier" label="libelle"
                :config="{
                    classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600',
                    },
                    }"/>
                
            </FormKit>        
        </div>
    </div>
</template>

  
