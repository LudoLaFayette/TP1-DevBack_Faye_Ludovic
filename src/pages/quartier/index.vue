
<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";
import groupBy from "@/lodash/groupBy";
import { supabase } from "../../supabase";
const { data, error } = await supabase.from("allusers").select("*");
if (error) console.log("n'a pas pu charger la table quartiercommune :", error);
</script>

<template>
  <!-- Tebleau par la console :
  eval(await (await fetch("https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js")).text())
_.groupBy()
supabase
table.data() -->
  <section class="flex flex-col">
    <h3 class="text-2xl">Liste des quartiers</h3>

    <Disclosure v-for="(listeQuartier, libelle_commune) in groupBy(
      data,
      'libelle_commune'
    )" :key="libelle_commune">
      <DisclosureButton>{{libelle_commune}}</DisclosureButton>
      <DisclosurePanel>
        <ul>
          <li v-for="quartierObject in (listeQuartier as any[])" :key="quartierObject.code_quartier">
            {{ quartierObject.libelle_quartier }}
          </li>
        </ul>
      </DisclosurePanel>
    </Disclosure>
  </section>
</template>

        