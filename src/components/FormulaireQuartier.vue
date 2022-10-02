<script setup lang ="ts">
import { supabase } from "@/supabase";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { label } from "@formkit/inputs";
import groupBy from "lodash/groupBy";

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
    console.log("n'a pas pu charger le table quartier :", error);
  else quartier.value = data[0];
}

async function upsertQuartier(dataForm, node) {
  const { data, error } = await supabase.from("quartier").upsert(dataForm);
  if (error || !data) node.setErrors([error.message]);
  else {
    node.setErrors([]);
    router.push({ name: "quartier-id", params: { id: data[0].id_quartier } });
  }
}
async function supprimerQuartier() {
  const { data, error } = await supabase
    .from("Quartier")
    .delete()
    .match({ code_Quartier: quartierObject.value.code_Quartier });
  if (error) {
    console.error(
      "Erreur à la suppression de ",
      quartierObject.value,
      "erreur :",
      error
    );
  } else {
    router.push("/quartier");
  }
}
const { data: listeCommune, error } = await supabase
  .from("commune")
  .select("*");
if (error) console.log("n'a pas pu charger la table Commune :", error);
// Les convertir par `map` en un tableau d'objets {value, label} pour FormKit
const optionsCommune = listeCommune?.map((commune) => ({
  value: commune.code_commune,
  label: commune.libelle_commune,
}));

</script>

<template>
  <div class="flex flex-row-reverse justify-center">
    <div class="p-2 ">
      <h2 class="text - 2xl "> Resulat (Prévisualisation)</h2>
      <div><input type="text" name="libelle_quartier" id="libelle" v-bind="quartier"></div>
    </div>
    <div class="p-2 border-2 mt-20 bg-indigo-50 rounded-2xl">
      <FormKit type="form" v-model="quartier" @submit="upsertQuartier"
        :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }">
        <FormKit name="libelle_quartier" label="libelle" :config="{
        classes: {
        input: 'p-1 rounded border-gray-300 shadow-sm border',
        label: 'text-gray-600',
        },
        }" />
        <FormKit type="select" name="code_Commune" label="Commune" :options="optionsCommune" />

      </FormKit>
    </div>
    <button type="button" v-if="quartierObject.code_Quartier" @click="($refs.dialogSupprimer as any).showModal()"
      class="focus-style justify-self-end rounded-md bg-red-500 p-2 shadow-sm">
      Supprimer l'offre
    </button>
    <dialog ref="dialogSupprimer" @click="($event.currentTarget as any).close()">
      <button type="button" class="focus-style justify-self-end rounded-md bg-blue-300 p-2 shadow-sm">
        Annuler</button><button type="button" @click="supprimerQuartier()"
        class="focus-style rounded-md bg-red-500 p-2 shadow-sm">
        Confirmer suppression
      </button>
    </dialog>
  </div>
</template>

  
