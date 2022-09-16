<script setup lang="ts">
import CardMaison from "../components/card.vue";

const unObjet = {
  image: "/images/maison1.png",
  nom: "BeverlyHills",
  prix: 2500,
  adress: "2821 lake seville, Palm Harbor, TX",
  nbrBeds: 6,
  nbrSDB: 2,
  dimension: 66,
};
const unObjet1 = {
  image: "/images/maison2.png",
  nom: "BeverlyHillsette",
  prix: 1500,
  adress: "2821 lake sevillessss, Palm Harbor, TX",
  nbrBeds: 3,
  nbrSDB: 1,
  dimension: 55,
};
console.log(unObjet);
 /*
    defineProps({
      name : {type: String, default:'Tarpon Bat'                                },
      price: {type:Number, default:'4800'                                        },
      adresse: {type: String, default: '103 Lake Shores, Michigan, IN'          },
      bed: {type:Number , default: 8                                           },
      bathroom: {type:Number , default: 2                                       },
      mcarre: {type:String , default: '6x7.5'                                    },
      });
*/
</script>

<template>
  <!-- <div>
    <CardMaison
      :image="Card.image"
      :nom="Card.nom"
      :price="Card.price"
      :adress="Card.adress"
      :beds="Card.beds"
      :bathroom="Card.bathroom"
      :dimension="Card.dimension"
    />
  </div> -->
  <div>
        <p>Simple</p>
        <!-- <CardMaison v-bind="{nom: 'bonjour', price:'300 000', adress:'Une bonne adresse', beds:'8', bathroom: '3', dimension:'87'}" /> -->
        <CardMaison v-bind="unObjet"/>
        <CardMaison v-bind="unObjet1"/>
    </div>
</template>