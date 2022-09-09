<script setup lang="ts">
import CardMaison from "../components/card.vue";

const unObjet = {
  image: "../../assets/images/maison1.png",
  nom: "BeverlyHills",
  price: 2500,
  adress: "2821 lake seville, Palm Harbor, TX",
  beds: 6,
  bathroom: 2,
  dimension: 66,
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
        <CardMaison/>
        <CardMaison v-bind="{nom: 'bonjour', price:'300 000', adress:'Une bonne adresse', beds:'8', bathroom: '3', dimension:'87'}" />
        <CardMaison v-bind="unObjet"/>
    </div>
</template>