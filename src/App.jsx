
import { useState } from "react";


const productos = [
     {
    id: 0,
    nombre: "¿Quieres imprimir algo y tienes el archivo? ¡Mándamelo y lo cotizo!",
    categorias: ["Otros"],
    precio: 0,
    descripcion: "¿Quieres imprimir algo y tienes el archivo? ¡Mándamelo y lo cotizo!",
    imagen: "/public/hikari-logo.jpeg",
    },
  {
    id: 1,
    nombre: "Aros de One piece",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Aros de logo de one piece",
    imagen: "/Aros/aros1.jpg",
    imagenes: [
      "/Aros/aros1.jpg",
      "/Aros/aros2.jpg"
    ]
  },
  {
    id: 2,
    nombre: "Aros de Plataforma 9 3/4",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Aros de plataforma 9 3/4",
    imagen: "/Aros/aros2.jpg"
  },
  {
    id: 3,
    nombre: "Aros de Logo Baby Metal",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Aros de logo de baby metal",
    imagen: "/Aros/aros3.jpg"
  },
  {
    id: 4,
    nombre: "Aros Wayfinder",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Aros de Kingdom hearts wayfinder",
    imagen: "/Aros/aros4.jpg"
  },
  {
    id: 5,
    nombre: "Aros de Jack Skellington",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Aros del extraño mundo de Jack",
    imagen: "/Aros/aros5.jpg"
  },
  {
    id: 6,
    nombre: "Aros de Tairn y Adarna",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Aros de Alas de Sangre",
    imagen: "/Aros/aros6.jpg"
  },
  {
    id: 7,
    nombre: "Aros de Tairn y Adarna juntos",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Aros de Alas de Sangre",
    imagen: "/Aros/aros7.jpg"
  },
  {
    id: 8,
    nombre: "Aros de Tanjiro Kamado",
    categorias: ["Geek", "Accesorios"],
    precio: 4000,
    descripcion: "Aros de Kimetsu no Yaiba",
    imagen: "/Aros/aros8.jpg"
  },
  {
    id: 9,
    nombre: "Set Aros y llavero Baby Metal",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Aros y llavero de Baby Metal",
    imagen: "/Aros/setaros1.jpg"
  },
  {
    id: 10,
    nombre: "Set Aros y llavero de One piece",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Aros y llavero de One piece",
    imagen: "/Aros/setaros2.jpg"
  },
  {
    id: 11,
    nombre: "Set Aros y llavero de Sombrero de Luffy",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Aros y llavero de One piece",
    imagen: "/Aros/setaros3.jpg"
  },
  {
    id: 12,
    nombre: "LLavero Gorillaz",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "LLavero de Gorillaz",
    imagen: "/Llaveros/llavero1.jpg"
  },
  {
    id: 13,
    nombre: "Llavero Ado",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "LLavero de Ado, doble cara",
    imagen: "/Llaveros/llavero0.jpg"
  },
  {
    id: 14,
    nombre: "Llavero Slipknot",
    categorias: ["Geek", "Accesorios"],
    precio: 4000,
    descripcion: "Llavero de Slipknot",
    imagen: "/Llaveros/llavero2.jpg"
  },
  {
    id: 15,
    nombre: "Llavero AC/DC",
    categorias: ["Geek", "Accesorios"],
    precio: 4000,
    descripcion: "Llavero de AC/DC",
    imagen: "/Llaveros/llavero3.jpg"
  },
  {
    id: 16,
    nombre: "Llavero de Bts y Army",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero de Bts y Army, $3.000 cada uno",
    imagen: "/Llaveros/llavero4.jpg"
  },
  {
    id: 17,
    nombre: "Llaveros Kingdom Hearts ",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llaveros Kingdom Hearts simbolos, $3.000 cada uno ",
    imagen: "/Llaveros/llavero5.jpg"
  },
  {
    id: 18,
    nombre: "Llavero Kingdom Hearts Logo",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero de logo de Kingdom Hearts",
    imagen: "/Llaveros/llavero6.jpg"
  },
  {
    id: 19,
    nombre: "Llavero The Legend of Zelda",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero de The Legend of Zelda",
    imagen: "/Llaveros/llavero7.jpg"
  },
  {
    id: 20,
    nombre: "Llavero Escudo Hyliano",
    categorias: ["Geek", "Accesorios"],
    precio: 4000,
    descripcion: "Llavero del escudo de Hyrule",
    imagen: "/Llaveros/llavero8.jpg"
  },
  {
    id: 21,
    nombre: "Llavero Star Wars",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero de Star Wars, $3.000 cada uno",
    imagen: "/Llaveros/llavero9.jpg"
  },
  {
    id: 22,
    nombre: "Llaveros Naruto Sharingan ",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero de Naruto Sharingan, $3.000 cada uno",
    imagen: "/Llaveros/llavero10.jpg"
  },
   {
    id: 23,
    nombre: "Llavero Gundam",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero de Gundam",
    imagen: "/Llaveros/llavero11.jpg"
  },
   {
    id: 24,
    nombre: "Llavero Pokeball",
    categorias: ["Geek", "Accesorios"],
    precio: 4000,
    descripcion: "Llavero de Pokeball",
    imagen: "/Llaveros/llavero12.jpg"
  },
   {
    id: 25,
    nombre: "Llavero Tanjiro Kamado",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero de Tanjiro Kamado, Kimetsu no Yaiba",
    imagen: "/Llaveros/llavero13.jpg"
  },
   {
    id: 26,
    nombre: "Llavero Cubone",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero de Cubone, Pokémon",
    imagen: "/Llaveros/llavero14.jpg"
  },
   {
    id: 27,
    nombre: "Llavero One piece",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero de One piece",
    imagen: "/Llaveros/llavero15.jpg"
  },
   {
    id: 28,
    nombre: "Llavero de Sombrero de Luffy",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero de sombrero de Luffy, One piece",
    imagen: "/Llaveros/llavero16.jpg"
  },
   {
    id: 29,
    nombre: "Llavero Chimuelo y Furia Nocturna",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero de Chimuelo y Furia Nocturna, Cómo entrenar a tu dragón, cada uno a $3.000",
    imagen: "/Llaveros/llavero17.jpg",
    imagenes: [
      "/Llaveros/llavero17.jpg",
      "/Llaveros/llavero17-2.jpg"
    ]
  },
   {
    id: 30,
    nombre: "Llavero cabeza Darth Vader",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero de cabeza de Darth Vader, Star Wars",
    imagen: "/Llaveros/llavero18.jpg"
  },
   {
    id: 31,
    nombre: "Llavero de Harry Potter",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero de Harry Potter, cada uno a $3.000, Disponible en distintos colores, consultar",
    imagen: "/Llaveros/llavero19.jpg"
  },
   {
    id: 32,
    nombre: "Llaveros espadas Hora de Aventura",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llaveros de espadas de Hora de Aventura, cada uno a $3.000",
    imagen: "/Llaveros/llavero20.jpg"
  },
   {
    id: 33,
    nombre: "Llaveros Stranger Things",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llaveros de Stranger Things, cada uno a $3.000",
    imagen: "/Llaveros/llavero21.jpg"
  },
   {
    id: 34,
    nombre: "Llaveros Clicker Creeper, Minecraft",
    categorias: ["Geek", "Accesorios", "Funcional","Juguetes"],
    precio: 3000,
    descripcion: "Llaveros Clicker de Creeper, Minecraft, cada uno a $3.000",
    imagen: "/Llaveros/llavero22.jpg"
  },
   {
    id: 35,
    nombre: "Llavero giratorio de Animal Crossing",
    categorias: ["Geek", "Accesorios"],
    precio: 4000,
    descripcion: "Llavero giratorio de Animal Crossing",
    imagen: "/Llaveros/llavero23.jpg"
  },
     {
    id: 36,
    nombre: "Llavero Tairn y Adarna, Alas de Sangre",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero Tairn y Adarna, Alas de Sangre",
    imagen: "/Llaveros/llavero24.jpg"
  },
     {
    id: 37,
    nombre: "Llavero Consola Gameboy",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero de consola Gameboy, Disponible en distintos colores, consultar",
    imagen: "/Llaveros/llavero25.jpg"
  },
     {
    id: 38,
    nombre: "Llavero control NES",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero de control NES",
    imagen: "/Llaveros/llavero26.jpg"
  },
     {
    id: 39,
    nombre: "Llavero Flexi-Dragón",
    categorias: ["Geek", "Accesorios", "Funcional", "Juguetes"],
    precio: 3000,
    descripcion: "Llavero Flexi-Dragón, Disponible en distintos colores, consultar",
    imagen: "/Llaveros/llavero27.jpg"
  },
     {
    id: 40,
    nombre: "Llavero Dinosaurio",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero Dinosaurio,cada uno $3.000 , Disponible en distintos colores, consultar",
    imagen: "/Llaveros/llavero28.jpg",
    imagenes: [
      "/Llaveros/llavero28.jpg",
      "/Llaveros/llavero28-2.jpg"
    ]
  },
     {
    id: 41,
    nombre: "Llavero Flexi-Dino",
    categorias: ["Geek", "Accesorios", "Funcional", "Juguetes"],
    precio: 5000,
    descripcion: "Llavero Flexi-Dino,cada uno $5.000 Disponible en distintos colores, consultar",
    imagen: "/Llaveros/llavero29.jpg",
  },
     {
    id: 42,
    nombre: "Llavero Clicker queso",
    categorias: ["Geek", "Accesorios", "Funcional", "Juguetes"],
    precio: 3000,
    descripcion: "Llavero Clicker queso,Cada uno $3.000, Disponible en distintos colores, consultar",
    imagen: "/Llaveros/llavero30.jpg",
    imagenes: [
      "/Llaveros/llavero30.jpg",
      "/Llaveros/llavero30-2.jpg"
    ]
  },
     {
    id: 43,
    nombre: "Llavero Clicker",
    categorias: ["Geek", "Accesorios", "Funcional", "Juguetes"],
    precio: 3000,
    descripcion: "Llavero Clicker,cada uno $3.000, Disponible en distintos colores, consultar",
    imagen: "/Llaveros/llavero31.jpg",
    imagenes: [
      "/Llaveros/llavero31.jpg",
      "/Llaveros/llavero31-2.jpg"
    ]
  },
     {
    id: 44,
    nombre: "Llavero Abrelatas y tapa latas",
    categorias: ["Accesorios", "Funcional"],
    precio: 3000,
    descripcion: "Llavero Abrelatas y tapa latas, Disponible en distintos colores, consultar",
    imagen: "/Llaveros/llavero32.jpg"
  },
     {
    id: 45,
    nombre: "Llavero Abrelatas CocaCola",
    categorias: ["Geek", "Accesorios", "Funcional"],
    precio: 4000,
    descripcion: "Llavero Abrelatas CocaCola, cada uno $4.000, Disponible en distintos colores, consultar",
    imagen: "/Llaveros/llavero33.jpg"
  },
     {
    id: 46,
    nombre: "Llavero Mimir, God of War",
    categorias: ["Geek", "Accesorios"],
    precio: 3000,
    descripcion: "Llavero Mimir, God of War",
    imagen: "/Llaveros/llavero34.jpg",
    imagenes: [
      "/Llaveros/llavero34.jpg",
      "/Llaveros/llavero34-2.jpg"
    ]
  },
     {
    id: 47,
    nombre: "Llavero Logo Grand Theft Auto",
    categorias: ["Geek","Accesorios"],
    precio: 3000,
    descripcion: "Llavero Logo Grand Theft Auto",
    imagen: "/Llaveros/llavero35.jpeg",
  },
     {
    id: 48,
    nombre: "Llavero Wasted Grand Theft Auto",
    categorias: ["Geek","Accesorios"],
    precio: 3000,
    descripcion: "Llavero Wasted, Grand Theft Auto",
    imagen: "/Llaveros/llavero36.jpeg",
  },
     {
    id: 49,
    nombre: "Llavero Abrelatas Nuka Cola Fallout",
    categorias: ["Geek","Accesorios", "Funcional"],
    precio: 3000,
    descripcion: "Llavero Abrelatas Nuka Cola, Fallout",
    imagen: "/Llaveros/llavero37.jpeg",
  },
     {
    id: 50,
    nombre: "Wayfinder de Kingdom Hearts",
    categorias: ["Geek","Decoración", "Otros"],
    precio: 5000,
    descripcion: "Llavero Wayfinder de Kingdom Hearts, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro2.jpg",
    imagenes: [
      "/Otros/otro2.jpg",
      "/Otros/otro2-2.jpg",
      "/Otros/otro2-3.jpg"
    ]
  },
  {
    id: 51,
    nombre: "Flexi-Pulpo",
    categorias: ["Otros", "Funcional", "Juguetes"],
    precio: 5000,
    descripcion: "Flexi-Pulpo, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro1-2.jpg",
    imagenes: [
      "/Otros/otro1-2.jpg",
      "/Otros/otro1.jpg"
    ]
  },
  {
    id: 52,
    nombre: "Cartel QR",
    categorias: ["Funcional","Otros"],
    precio: 7000,
    descripcion: "Cartel QR, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro3.jpg"
  },
  {
    id: 53,
    nombre: "Caja gatito sorpresa",
    categorias: ["Decoración","Funcional","Otros"],
    precio: 4000,
    descripcion: "Caja gatito sorpresa, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro4.jpg"
  },
  {
    id: 54,
    nombre: "Macetero gato acostado",
    categorias: ["Decoración","Funcional","Otros"],
    precio: 5000,
    descripcion: "Macetero gato acostado,pequeño, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro5.jpg",
    imagenes: [
      "/Otros/otro5.jpg",
      "/Otros/otro5-2.jpg",
      "/Otros/otro5-3.jpg"
    ]
  },
  {
    id: 55,
    nombre: "Portalentes Pikachu",
    categorias: ["Geek", "Funcional", "Decoración"],
    precio: 5000,
    descripcion: "Portalentes Pikachu",
    imagen: "/Otros/otro6.jpg"
  },
  {
    id: 56,
    nombre: "Flexi-Gatito",
    categorias: ["Funcional","Otros", "Juguetes"],
    precio: 5000,
    descripcion: "Flexi-Gatito, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro7.jpg"
  },
  {
    id: 57,
    nombre: "Portalapices Hello Kitty",
    categorias: ["Geek", "Funcional","Decoración"],
    precio: 12000,
    descripcion: "Portalapices Hello Kitty, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro8.jpg",
    imagenes: [
      "/Otros/otro8.jpg",
      "/Otros/otro8-2.jpg",
      "/Otros/otro8-3.jpg",
      "/Otros/otro8-4.jpg"
    ]
  },
  {
    id: 58,
    nombre: "Relleno Mini Tin Pokemon",
    categorias: ["Geek","Funcional"],
    precio: 6000,
    descripcion: "Relleno Mini Tin Pokemon, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro9.jpg"
  },
  {
    id: 59,
    nombre: "Tapalatas",
    categorias: ["Funcional","Otros"],
    precio: 4000,
    descripcion: "Tapalatas, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro10.jpg",
    imagenes: [
      "/Otros/otro10.jpg",
      "/Otros/otro10-2.jpg",
    ]
  },
  {
    id: 60,
    nombre: "Dragón custodia joyas",
    categorias: ["Geek","Funcional","Decoración"],
    precio: 7000,
    descripcion: "Dragón custodia joyas, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro11.jpg"
  },
  {
    id: 61,
    nombre: "Lapicera/Maceta Perro",
    categorias: ["Funcional","Decoración"],
    precio: 12000,
    descripcion: "Lapicera/Maceta Perro, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro12.jpg"
  },
 {
    id: 62,
    nombre: "Lapicera/Maceta Gato",
    categorias: ["Funcional","Decoración"],
    precio: 10000,
    descripcion: "Lapicera/Maceta Gato, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro13.jpg"
  },
  {
    id: 63,
    nombre: "Contenedor cotonitos y petalos desmaquillantes",
    categorias: ["Funcional","Decoración"],
    precio: 8000,
    descripcion: "Contenedor cotonitos y petalos desmaquillantes, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro14.jpg",
    imagenes: [
      "/Otros/otro14.jpg",
      "/Otros/otro14-2.jpg",
    ]
  },
  {
    id: 64,
    nombre: "Portalabiales",
    categorias: ["Funcional","Decoración"],
    precio: 5000,
    descripcion: "Portalabiales, especialmente Nivea, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro15.jpg",
    imagenes: [
      "/Otros/otro15.jpg",
      "/Otros/otro15-2.jpg",
    ]
  },
  {
    id: 65,
    nombre: "Portalentes Hello Kitty",
    categorias: ["Geek","Funcional","Decoración"],
    precio: 6000,
    descripcion: "Portalentes Hello Kitty",
    imagen: "/Otros/otro16.jpg",
    imagenes: [
      "/Otros/otro16.jpg",
      "/Otros/otro16-2.jpg",
    ]
  },
  {
    id: 66,
    nombre: "Contenedor D&D",
    categorias: ["Geek","Funcional"],
    precio: 12000,
    descripcion: "Contenedor D&D, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro17.jpg"
  },
  {
    id: 67,
    nombre: "Identificador para mascotas",
    categorias: ["Funcional","Otros"],
    precio: 3000,
    descripcion: "Identificador para mascotas, puede incluir qr con número telefónico, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro18.jpg",
    imagenes: [
      "/Otros/otro18.jpg",
      "/Otros/otro18-2.jpg",
      "/Otros/otro18-3.jpg"
    ]
  },
  {
    id: 68,
    nombre: "Soporte PS4",
    categorias: ["Geek","Funcional"],
    precio: 4000,
    descripcion: "Soporte PS4, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro19.jpg"
  },
  {
    id: 69,
    nombre: "Soporte control ps4 Ditto",
    categorias: ["Geek","Funcional"],
    precio: 8000,
    descripcion: "Soporte control ps4 Ditto, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro20.jpg"
  },
  {
    id: 70,
    nombre: "Soporte control Xbox One Tentáculos",
    categorias: ["Geek","Funcional"],
    precio: 8000,
    descripcion: "Soporte control Xbox One Tentáculos, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro26.jpg"
  },
  {
    id: 71,
    nombre: "Corona y cuernos Cult of The Lamb",
    categorias: ["Geek","Accesorios"],
    precio: 15000,
    descripcion: "Corona y cuernos Cult of The Lamb",
    imagen: "/Otros/otro21.jpg"
  },
  {
    id: 72,
    nombre: "Diadema Murciélago",
    categorias: ["Geek","Accesorios"],
    precio: 5000,
    descripcion: "Diadema Murciélago, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro22.jpg"
  },
  {
    id: 73,
    nombre: "Varita mágica para pago sin contacto",
    categorias: ["Geek","Accesorios", "Funcional"],
    precio: 8000,
    descripcion: "Varita mágica para pago sin contacto, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro23.jpg"
  },
  {
    id: 74,
    nombre: "Clicker Reliquias Harry Potter",
    categorias: ["Geek","Funcional","Juguetes", "Otros" ],
    precio: 3000,
    descripcion: "Clicker Reliquias Harry Potter, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro24.jpg"
  },
  {
    id: 75,
    nombre: "Clicker Doble",
    categorias: ["Funcional","Juguetes", "Otros"],
    precio: 4000,
    descripcion: "Clicker Doble,$4.000 cada uno, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro25.jpg",
    imagenes: [
      "/Otros/otro25.jpg",
      "/Otros/otro25-2.jpg",
      "/Otros/otro25-3.jpg"
    ]
  },
  {
    id: 76,
    nombre: "Clicker m&m's",
    categorias: ["Geek","Funcional","Juguetes", "Otros"],
    precio: 3000,
    descripcion: "Clicker m&m's,$3.000 cada uno, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro31.jpg"
  },
  {
    id: 77,
    nombre: "Clicker Sonrisa",
    categorias: ["Funcional","Juguetes", "Otros"],
    precio: 3000,
    descripcion: "Clicker Sonrisa, $3.000 cada uno, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro30.jpg"
  },
  {
    id: 78,
    nombre: "Clicker Y/N Bluey",
    categorias: ["Geek","Funcional","Juguetes", "Otros"],
    precio: 5000,
    descripcion: "Clicker Y/N Bluey",
    imagen: "/Otros/otro34.jpg",
    imagenes: [
      "/Otros/otro34.jpg",
      "/Otros/otro34-2.jpg"
    ]
  },
  {
    id: 79,
    nombre: "Varita mágica pulpo giratorio",
    categorias: ["Funcional","Juguetes","Otros"],
    precio: 5000,
    descripcion: "Varita mágica con pulpo giratorio, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro33.jpg",
    imagenes: [
      "/Otros/otro33.jpg",
      "/Otros/otro33-2.jpg"
    ]
  },
  {
    id: 80,
    nombre: "Flexi-Tiburón",
    categorias: ["Funcional","Juguetes","Otros"],
    precio: 5000,
    descripcion: "Flexi-Tiburón, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro27.jpg",
    imagenes: [
      "/Otros/otro27.jpg",
      "/Otros/otro27-2.jpg"
    ]
  },
  {
    id: 81,
    nombre: "Inserto para juego de mesa One Piece Nakama",
    categorias: ["Geek","Funcional","Juguetes"],
    precio: 6000,
    descripcion: "Inserto para juego de mesa One Piece Nakama, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro28.jpg"
  },
  {
    id: 82,
    nombre: "Porta cepillo de dientes",
    categorias: ["Funcional","Otros"],
    precio: 8000,
    descripcion: "Porta cepillo de dientes, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro29.jpg",
    imagenes: [
      "/Otros/otro29.jpg",
      "/Otros/otro29-2.jpg"
    ]
  },
  {
    id: 83,
    nombre: "Flexi-Jake el Perro",
    categorias: ["Geek","Funcional","Juguetes"],
    precio: 3000,
    descripcion: "Flexi-Jake el Perro",
    imagen: "/Otros/otro32.jpg"
  },
  {
    id: 84,
    nombre: "Pelota antiestrés",
    categorias: ["Funcional","Juguetes","Otros"],
    precio: 2000,
    descripcion: "Pelota antiestrés, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro35.jpg"
  },
  {
    id: 85,
    nombre: "Flexi-Dragón adentro de Huevo",
    categorias: ["Funcional","Juguetes","Otros"],
    precio: 5000,
    descripcion: "Flexi-Dragón adentro de Huevo sopresa o a elección, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro36-3.jpg",
    imagenes: [
      "/Otros/otro36-3.jpg",
      "/Otros/otro36-3-2.jpg",
      "/Otros/otro36.jpg"
    ]
  },
  {
    id: 86,
    nombre: "Cubo infinito",
    categorias: ["Funcional","Juguetes","Otros"],
    precio: 5000,
    descripcion: "Cubo infinito, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro37.jpg",
    imagenes: [
      "/Otros/otro37.jpg",
      "/Otros/otro37-2.jpg"
    ]
  },
  {
    id: 87,
    nombre: "Fidget Anti estrés",
    categorias: ["Funcional","Juguetes","Otros"],
    precio: 4000,
    descripcion: "Fidget Anti estrés, Disponible en distintos colores, consultar",
    imagen: "/Otros/otro38.jpg",
    imagenes: [
      "/Otros/otro38.jpg",
      "/Otros/otro38-2.jpg"
    ]
  },
  {
    id: 88,
    nombre: "Figura Alien",
    categorias: ["Geek","Figuras"],
    precio: 8000,
    descripcion: "Figura de Xenomorfo Alien",
    imagen: "/Figuras grandes/figura1.jpg",
    imagenes: [
      "/Figuras grandes/figura1.jpg",
      "/Figuras grandes/figura1-2.jpg",
      "/Figuras grandes/figura1-3.jpg"
    ]
  },
   {
    id: 89,
    nombre: "Figura Hollow Knight",
    categorias: ["Geek","Figuras"],
    precio: 8000,
    descripcion: "Figura de Hollow Knight",
    imagen: "/Figuras grandes/figura2.jpg",
    imagenes: [
      "/Figuras grandes/figura2.jpg",
      "/Figuras grandes/figura2-2.jpg",
      "/Figuras grandes/figura2-3.jpg"
    ]
  },
   {
    id: 90,
    nombre: "Figura Cuervo sobre calavera",
    categorias: ["Geek","Figuras"],
    precio: 8000,
    descripcion: "Figura de Cuervo sobre calavera, grande",
    imagen: "/Figuras grandes/figura3.jpg",
    imagenes: [
      "/Figuras grandes/figura3.jpg",
      "/Figuras grandes/figura3-2.jpg"
    ]
  },
   {
    id: 91,
    nombre: "Figura Personalizada",
    categorias: ["Geek","Figuras"],
    precio: 7000,
    descripcion: "Figura personalizada en base a fotografía",
    imagen: "/Figuras grandes/figura4.jpg",
    imagenes: [
      "/Figuras grandes/figura4.jpg",
      "/Figuras grandes/figura4-2.jpg"
    ]
  },
   {
    id: 92,
    nombre: "Figura Dummy 13",
    categorias: ["Geek","Figuras"],
    precio: 10000,
    descripcion: "Figura Dummy 13, con set de manos incluida",
    imagen: "/Figuras grandes/figura5.jpg",
    imagenes: [
      "/Figuras grandes/figura5.jpg",
      "/Figuras grandes/figura5-2.jpg"
    ]
  },
   {
    id: 93,
    nombre: "Figura Metroide",
    categorias: ["Geek","Figuras"],
    precio: 4000,
    descripcion: "Figura Metroide, pintada en colores naranjo blanco y verde en $5.000",
    imagen: "/Figuras grandes/figura6.jpg",
    imagenes: [
      "/Figuras grandes/figura6.jpg",
      "/Figuras grandes/figura6-2.jpg"
    ]
  },
   {
    id: 94,
    nombre: "Figura Chopper",
    categorias: ["Geek","Figuras"],
    precio: 10000,
    descripcion: "Figura Chopper, One piece",
    imagen: "/Figuras grandes/figura7.jpg",
    imagenes: [
      "/Figuras grandes/figura7.jpg",
      "/Figuras grandes/figura7-2.jpg"
    ]
  },
   {
    id: 95,
    nombre: "Figura Cordero Cult of the Lamb",
    categorias: ["Geek","Figuras"],
    precio: 6000,
    descripcion: "Figura Cordero, Cult of the Lamb",
    imagen: "/Figuras grandes/figura8.jpg",
   
  },
   {
    id: 96,
    nombre: "Figura Big Daddy Bioshock",
    categorias: ["Geek","Figuras"],
    precio: 6000,
    descripcion: "Figura de Big Daddy , Bioshock",
    imagen: "/Figuras grandes/figura9.jpg",
  },
   {
    id: 97,
    nombre: "Estatua Lara Croft Tomb Rider",
    categorias: ["Geek","Figuras"],
    precio: 15000,
    descripcion: "Estatua Lara Croft, Tomb Rider",
    imagen: "/Figuras grandes/figura10.jpg",
    imagenes: [
      "/Figuras grandes/figura10.jpg",
      "/Figuras grandes/figura10-2.jpg",
      "/Figuras grandes/figura10-3.jpg"
    ]
  },
   {
    id: 98,
    nombre: "Estatua Cordero Cult of the Lamb",
    categorias: ["Geek","Figuras"],
    precio: 15000,
    descripcion: "Estatua Cordero Cult of the Lamb",
    imagen: "/Figuras grandes/figura11.jpg",
    imagenes: [
      "/Figuras grandes/figura11.jpg",
      "/Figuras grandes/figura11-2.jpg",
      "/Figuras grandes/figura11-3.jpg"
    ]
  },
   {
    id: 99,
    nombre: "Estatua Kratos God of War",
    categorias: ["Geek","Figuras"],
    precio: 20000,
    descripcion: "Estatua Kratos, God of War",
    imagen: "/Figuras grandes/figura12.jpg",
    imagenes: [
      "/Figuras grandes/figura12.jpg",
      "/Figuras grandes/figura12-2.jpg",
      "/Figuras grandes/figura12-3.jpg"
    ]
  },
   {
    id: 100,
    nombre: "Figura Godzilla",
    categorias: ["Geek","Figuras"],
    precio: 4000,
    descripcion: "Figura Godzilla",
    imagen: "/Figuras mini/figu1.jpg",
    imagenes: [
      "/Figuras mini/figu1.jpg",
      "/Figuras mini/figu1-2.jpg",
      "/Figuras mini/figu1-3.jpg"
    ]
  },
   {
    id: 101,
    nombre: "Figura Doom",
    categorias: ["Geek","Figuras"],
    precio: 6000,
    descripcion: "Figura Doom",
    imagen: "/Figuras mini/figu2.jpg",
  },
   {
    id: 102,
    nombre: "Figura Malenia Elden Ring",
    categorias: ["Geek","Figuras"],
    precio: 6000,
    descripcion: "Figura de Malenia, Elden Ring",
    imagen: "/Figuras mini/figu3.jpg",
  },
   {
    id: 103,
    nombre: "Figura Pomni Digital Circus",
    categorias: ["Geek","Figuras"],
    precio: 4000,
    descripcion: "Figura Pomni ,Digital Circus",
    imagen: "/Figuras mini/figu4.jpg",
  },
   {
    id: 104,
    nombre: "Figura Samus Metroid",
    categorias: ["Geek","Figuras"],
    precio: 5000,
    descripcion: "Figura Samus, Metroid",
    imagen: "/Figuras mini/figu5.jpg",
    imagenes: [
      "/Figuras mini/figu5.jpg",
      "/Figuras mini/figu5-2.jpg"
    ]
  },
   {
    id: 105,
    nombre: "Figura mini Iron Man",
    categorias: ["Geek","Figuras"],
    precio: 3000,
    descripcion: "Figura mini Iron Man",
    imagen: "/Figuras mini/figu6.jpg",
  },
   {
    id: 106,
    nombre: "Figura mini Batman",
    categorias: ["Geek","Figuras"],
    precio: 3000,
    descripcion: "Figura mini Batman",
    imagen: "/Figuras mini/figu7.jpg",
  },
   {
    id: 107,
    nombre: "Figura mini Pokemon",
    categorias: ["Geek","Figuras"],
    precio: 3000,
    descripcion: "Figura mini Pokemon, cada uno $3.000",
    imagen: "/Figuras mini/figu8.jpg",
    imagenes: [
      "/Figuras mini/figu8.jpg",
      "/Figuras mini/figu8-2.jpg",
      "/Figuras mini/figu8-3.jpg"
    ]
  },
   {
    id: 108,
    nombre: "Figura mini Stitch",
    categorias: ["Geek","Figuras"],
    precio: 3000,
    descripcion: "Figura mini Stitch, cada uno $3.000",
    imagen: "/Figuras mini/figu9.jpg",
  },
   {
    id: 109,
    nombre: "Figura mini Stitch corazón",
    categorias: ["Geek","Figuras"],
    precio: 3000,
    descripcion: "Figura mini Stitch corazón, cada uno $3.000",
    imagen: "/Figuras mini/figu10.jpg",
    imagenes: [
      "/Figuras mini/figu10.jpg",
      "/Figuras mini/figu10-2.jpg"
    ]
  },
   {
    id: 110,
    nombre: "Figura mini Dragón llavero",
    categorias: ["Geek","Figuras"],
    precio: 3000,
    descripcion: "Figura mini Dragón llavero, cada uno $3.000, disponible en distintos colores, consultar",
    imagen: "/Figuras mini/figu11.jpg",
  },
 {
  id: 111,
  nombre: "Figura TIV II",
  categorias: ["Geek", "Figuras"],
  precio: 8000,
  descripcion: "Figura TIV II",
  imagen: "/Figuras mini/figu12.jpg",
  imagenes: [
    "/Figuras mini/figu12.jpg",
    "/Figuras mini/figu12-2.jpg",
    "/Figuras mini/figu12-3.jpg"
  ]
},
   {
    id: 112,
    nombre: "Figura Chimuelo meme",
    categorias: ["Geek","Figuras"],
    precio: 4000,
    descripcion: "Figura Chimuelo meme",
    imagen: "/Figuras mini/figu13.jpg",
    imagenes: [
      "/Figuras mini/figu13.jpg",
      "/Figuras mini/figu13-2.jpg"
    ]
  },
   {
    id: 113,
    nombre: "Figura Dragón",
    categorias: ["Geek","Figuras"],
    precio: 4000,
    descripcion: "Figura Dragón, Disponible en distintos colores, consultar",
    imagen: "/Figuras mini/figu14.jpg",
  imagenes: [
      "/Figuras mini/figu14.jpg",
      "/Figuras mini/figu14-2.jpg"
    ]
  },
   {
    id: 114,
    nombre: "Figura Dragón",
    categorias: ["Geek","Figuras"],
    precio: 4000,
    descripcion: "Figura Dragón, Disponible en distintos colores, consultar",
    imagen: "/Figuras mini/figu15.jpg",
    imagenes: [
      "/Figuras mini/figu15.jpg",
      "/Figuras mini/figu15-2.jpg"
    ]
  },
   {
    id: 115,
    nombre: "Figura Godzilla",
    categorias: ["Geek","Figuras"],
    precio: 4000,
    descripcion: "Figura Godzilla, Disponible en distintos colores, consultar",
    imagen: "/Figuras mini/figu16.jpg",
    imagenes: [
      "/Figuras mini/figu16.jpg",
      "/Figuras mini/figu16-2.jpg"
    ]
    },
   {
    id: 116,
     nombre: "Figura King Ghidorah",
    categorias: ["Geek","Figuras"],
    precio: 4000,
    descripcion: "Figura King Ghidorah, Disponible en distintos colores, consultar",
    imagen: "/Figuras mini/figu17.jpg",
    imagenes: [
      "/Figuras mini/figu17.jpg",
      "/Figuras mini/figu17-2.jpg"
    ]
  },
   {
    id: 117,
     nombre: "Figura Mothra",
    categorias: ["Geek","Figuras"],
    precio: 4000,
    descripcion: "Figura Mothra, Disponible en distintos colores, consultar",
    imagen: "/Figuras mini/figu18.jpg",
    imagenes: [
      "/Figuras mini/figu18.jpg",
      "/Figuras mini/figu18-2.jpg"
    ]
  },
   {
    id: 118,
    nombre: "Figura Mecha Godzilla",
    categorias: ["Geek","Figuras"],
    precio: 4000,
    descripcion: "Figura Mecha Godzilla, Disponible en distintos colores, consultar",
    imagen: "/Figuras mini/figu19.jpg",
    imagenes: [
      "/Figuras mini/figu19.jpg",
      "/Figuras mini/figu19-2.jpg"
    ]
  },
     {
    id: 119,
    nombre: "Figura Rodan",
    categorias: ["Geek","Figuras"],
    precio: 4000,
    descripcion: "Figura Rodan, Disponible en distintos colores, consultar",
    imagen: "/Figuras mini/figu20.jpg",
    imagenes: [
      "/Figuras mini/figu20.jpg",
      "/Figuras mini/figu20-2.jpg"
    ]
  },   
    {
    id: 120,
    nombre: "Figura Cthulhu",
    categorias: ["Geek","Figuras"],
    precio: 4000,
    descripcion: "Figura Cthulhu, Disponible en distintos colores, consultar",
    imagen: "/Figuras mini/figu21.jpg",
    imagenes: [
      "/Figuras mini/figu21.jpg",
      "/Figuras mini/figu21-2.jpg"
    ]
    },
     {
    id: 121,
    nombre: "Figura Fortnite",
    categorias: ["Geek","Figuras"],
    precio: 3000,
    descripcion: "Figura Fortnite, cada uno $3.000, Disponible en distintos colores, consultar",
    imagen: "/Figuras mini/figu22.jpg",
    },
     {
    id: 122,
    nombre: "Figura Living jar Elden Ring",
    categorias: ["Geek","Figuras"],
    precio: 4000,
    descripcion: "Figura Living jar, Elden Ring, Disponible en distintos colores, consultar",
    imagen: "/Figuras mini/figu23.jpg",
    },
     {
    id: 123,
    nombre: "Marcapáginas Plataforma 9 3/4 Harry Potter",
    categorias: ["Geek","Otros"],
    precio: 2000,
    descripcion: "Marcapáginas PLataforma 9 3/4, Harry Potter, Disponible en distintos colores, consultar",
    imagen: "/Marcapaginas/marca1.jpg",
    },
     {
    id: 124,
    nombre: "Marcapáginas Jake el Perro",
    categorias: ["Geek","Funcional", "Otros"],
    precio: 3000,
    descripcion: "Marcapáginas Jake el Perro",
    imagen: "/Marcapaginas/marca2.jpg",
    imagenes: [
      "/Marcapaginas/marca2.jpg",
      "/Marcapaginas/marca2-2.jpg",
      "/Marcapaginas/marca2-3.jpg",
      "/Marcapaginas/marca2-4.jpg"
    ]
    },
     {
    id: 125,
    nombre: "Marcapáginas Tairn y Aadarna Alas de Sangre",
    categorias: ["Geek","Funcional", "Otros"],
    precio: 4000,
    descripcion: "Marcapáginas Tairn y Aadarna, Alas de Sangre",
    imagen: "/Figuras mini/figu21.jpg",
    imagenes: [
      "/Marcapaginas/marca3.jpg",
      "/Marcapaginas/marca3-2.jpg",
      "/Marcapaginas/marca3-3.jpg"
    ]
    },
     {
    id: 126,
    nombre: "Marcapáginas Harry Potter",
    categorias: ["Geek","Otros"],
    precio: 2000,
    descripcion: "Marcapáginas Harry Potter, Disponible en distintos colores, consultar",
    imagen: "/Marcapaginas/marca4.jpg",
    },
      {
    id: 127,
    nombre: "Figura Cubo de compañía Portal",
    categorias: ["Geek","Figura"],
    precio: 6000,
    descripcion: "Figura Cubo de compañía Portal",
    imagen: "/Figuras grandes/figura13.jpeg",
    },

   
 


];


const categorias = [
  "Todos",
  "Geek",
  "Accesorios",
  "Decoración",
  "Figuras",
  "Funcional",
  "Juguetes",
  "Otros"
];

const formatoPrecio = (precio) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(precio);

function App() {
  
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [indiceImagen, setIndiceImagen] = useState(0);

const productosFiltrados = productos.filter((producto) => {
  const categoriasProducto =
    producto.categorias || [producto.categoria];

  const coincideCategoria =
    categoriaActiva === "Todos" ||
    categoriasProducto.includes(categoriaActiva);

  const coincideBusqueda = producto.nombre
    .toLowerCase()
    .includes(busqueda.toLowerCase());

  return coincideCategoria && coincideBusqueda;
});

const cambiarImagen = (direccion) => {
  if (!imagenAmpliada) return;

  const imagenes = imagenAmpliada.imagenes || [
    imagenAmpliada.imagen
  ];

  setIndiceImagen((indiceActual) =>
    (indiceActual + direccion + imagenes.length) % imagenes.length
  );
};

  const whatsappNumber = "56978192670";

  return (
    <div className="app">
      <header className="navbar">
        <a href="#inicio">
          <img
            src="/Hikari3dstorelogo.png"
            alt="Hikari 3D"
            className="logo-image"
          />
        </a>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#nosotros">Sobre nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">

  <img
    src="/hikari-logo.jpeg"
    alt="Hikari 3D"
    className="hero-background-logo"
  />

  <p className="eyebrow">IMPRESIÓN 3D · HIKARI 3D</p>

  <h1>
    Pequeñas ideas,
    <br />
    <span>grandes creaciones.</span>
  </h1>

  <p className="hero-description">
    Descubre accesorios, decoración y productos
    inspirados en el mundo geek y la vida cotidiana.
  </p>

  <a className="main-button" href="#catalogo">
    Explorar catálogo
  </a>

</section>

        <section className="catalog" id="catalogo">
          <p className="eyebrow">DESCUBRE HIKARI 3D</p>
          <h2>Nuestro catálogo</h2>
          <p>Encuentra algo especial para ti.</p>

          <input
            className="search-input"
            type="search"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />

          <div className="category-filters">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className={
                  categoriaActiva === categoria
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setCategoriaActiva(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>

          <div className="product-grid">
  {productosFiltrados.map((producto) => (
    <article className="product-card" key={producto.id}>
      <img
        className="product-photo"
        src={producto.imagen}
        alt={producto.nombre}
        loading="lazy"
        onClick={() => {
  setImagenAmpliada(producto);
  setIndiceImagen(0);
}}
      />

                <div className="product-categories">
                   {(producto.categorias || [producto.categoria]).map((categoria) => (
                  <span className="product-category" key={categoria}>
                  {categoria}
                 </span>
                 ))}
                </div>

                <h3>{producto.nombre}</h3>

                <p>{producto.descripcion}</p>

                <strong className="product-price">
                  {formatoPrecio(producto.precio)}
                </strong>

                {whatsappNumber && (
                <a
                className="product-button"
                 href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `¡Hola! Me interesa el producto "${producto.nombre}" que vi en Hikari 3D. ¿Está disponible?`
                 )}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 >
                 Consultar producto
                 </a>
                )}
              </article>
            ))}
          </div>

          {productosFiltrados.length === 0 && (
            <div className="empty-catalog">
              <h3>
                {productos.length === 0
                  ? "¡Próximamente nuevos productos!"
                  : "No encontramos productos."}
              </h3>
              <p>
                {productos.length === 0
                  ? "Estamos preparando nuestro catálogo Hikari 3D."
                  : "Prueba con otra categoría o búsqueda."}
              </p>
            </div>
          )}
        </section>

        <section className="about" id="nosotros">
          <h2>Bienvenido al mundo Hikari 3D</h2>
          <p>
            Acercamos el mundo geek y la creatividad de la impresión 3D a tu día a día, 
            con accesorios, decoración y productos funcionales para todos los gustos.
          </p>

          <p>

            Somos de Chile y realizamos entrega en Rancagua y alrededores, además de envíos a todo el país.
          </p>
          
        </section>

        
<section id="contacto" className="contact">
  <h2>¡Hablemos!</h2>
  <p className="contact-description">
    ¿Te gustó alguno de nuestros productos?
    Escríbenos y conversemos.
  </p>

  <div className="contact-links">
    <a
      className="contact-button instagram-button"
      href="https://www.instagram.com/hikari3d_store/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/Instagramlogo.png"
        alt="Instagram"
        className="contact-icon"
      />
      <span>
        <strong>Instagram</strong>
        <small>@hikari3d_store</small>
      </span>
    </a>

    <a
      className="contact-button whatsapp-button"
      href="https://wa.me/56978192670?text=Hola%21%20Quisiera%20consultar%20por%20sus%20productos."
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/whatsapplogo.png"
        alt="WhatsApp"
        className="contact-icon"
      />
      <span>
        <strong>WhatsApp</strong>
        <small>Escríbenos directamente</small>
      </span>
    </a>
  </div>
</section>
      </main>

      {imagenAmpliada && (
  <div
    className="image-modal"
    onClick={() => setImagenAmpliada(null)}
  >
    <button
      className="image-modal-close"
      onClick={() => setImagenAmpliada(null)}
      aria-label="Cerrar imagen"
    >
      ×
    </button>

    <button
      className="image-modal-nav prev"
      onClick={(e) => {
        e.stopPropagation();
        cambiarImagen(-1);
      }}
      aria-label="Producto anterior"
    >
      ❮
    </button>

   <img
  src={
    (imagenAmpliada.imagenes || [imagenAmpliada.imagen])[indiceImagen]
  }
  alt={imagenAmpliada.nombre}
  className="image-modal-photo"
  onClick={(e) => e.stopPropagation()}
/>

    <button
      className="image-modal-nav next"
      onClick={(e) => {
        e.stopPropagation();
        cambiarImagen(1);
      }}
      aria-label="Producto siguiente"
    >
      ❯
    </button>

    <p>{imagenAmpliada.nombre}</p>
  </div>
)}

      <footer>
        <p>© 2026 Hikari 3D · Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
