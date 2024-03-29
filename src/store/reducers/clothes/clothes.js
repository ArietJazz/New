import {createSlice} from "@reduxjs/toolkit";

const clothesSlice = createSlice({
    name: 'clothes',
    initialState: {
        data: [
            {
                "id": 1,
                "title": "Hoody Chess",
                "price": 415,
                "priceSale": 200,
                "image": {
                    "black": "Shop/hoody1.jpg",
                    "red": "Shop/hoody1-red.jpg",
                    "white": "Shop/hoody1-white.jpg",
                    "blue": "Shop/hoody1-blue.jpg"
                },
                "category": "hoody",
                "size": [
                    "s",
                    "m",
                    "l",
                    "xl",
                    "xxl",
                    "xs"
                ],
                "colors": [
                    "red",
                    "blue",
                    "white",
                    "black"
                ],
                "inStock": 15
            },
            {
                "id": 2,
                "title": "Hoody Harley Queen",
                "price": 400,
                "priceSale": 300,
                "image": {
                    "black": "Shop/hoody2.jpg",
                    "white": "Shop/hoody2-white.jpg"
                },
                "category": "hoody",
                "size": [
                    "s",
                    "m",
                    "xl"
                ],
                "colors": [
                    "black",
                    "white"
                ],
                "inStock": 21
            },
            {
                "id": 3,
                "title": "Hoody Anime",
                "price": 519,
                "priceSale": 400,
                "image": {
                    "black": "Shop/hoody3.jpg",
                    "white": "Shop/hoody3-white.jpg",
                    "grey": "Shop/hoody3-grey.jpg"
                },
                "category": "hoody",
                "size": [
                    "s",
                    "m",
                    "l",
                    "xl"
                ],
                "colors": [
                    "white",
                    "black",
                    "grey"
                ],
                "inStock": 23
            },
            {
                "id": 4,
                "title": "Hoody Wendy",
                "price": 75,
                "image": {
                    "black": "Shop/hoody4.jpg",
                    "white": "Shop/hoody4-white.jpg",
                    "red": "Shop/hoody4-red.jpg",
                    "grey": "Shop/hoody4-grey.jpg"
                },
                "category": "hoody",
                "size": [
                    "s",
                    "m",
                    "xl"
                ],
                "colors": [
                    "red",
                    "grey",
                    "black",
                    "white"
                ],
                "inStock": 25,
                "priceSale": ""
            },
            {
                "id": 5,
                "title": "Hoody Rick and Morty",
                "price": 339,
                "image": {
                    "black": "Shop/hoody5.jpg",
                    "white": "Shop/hoody5-white.jpg",
                    "grey": "Shop/hoody5-grey.jpg"
                },
                "category": "hoody",
                "size": [
                    "s",
                    "m",
                    "l",
                    "xl"
                ],
                "colors": [
                    "white",
                    "black",
                    "grey"
                ],
                "inStock": 10
            },
            {
                "id": 6,
                "title": "Sport Suit STAMINA1",
                "price": 279,
                "image": {
                    "black": "Shop/sportsuit1-black.jpg",
                    "white": "Shop/sportsuit1-white.jpg",
                    "red": "Shop/sportsuit1-red.jpg",
                    "pink": "Shop/sportsuit1-pink.jpg",
                    "grey": "Shop/sportsuit1-grey.jpg",
                    "beige": "Shop/sportsuit1-beige.jpg",
                    "blue": "Shop/sportsuit1.jpg"
                },
                "category": "sportsuit",
                "size": [
                    "s",
                    "m",
                    "xl"
                ],
                "colors": [
                    "beige",
                    "black",
                    "white",
                    "red",
                    "blue",
                    "pink",
                    "grey"
                ],
                "inStock": 33
            },
            {
                "id": 7,
                "title": "Sport Suit STAMINA2",
                "price": 279,
                "image": {
                    "black": "Shop/sportsuit2.jpg",
                    "white": "Shop/sportsuit2-white.jpg",
                    "red": "Shop/sportsuit2-red.jpg",
                    "pink": "Shop/sportsuit2-pink.jpg",
                    "grey": "Shop/sportsuit2-grey.jpg",
                    "beige": "Shop/sportsuit2-almond.jpg",
                    "blue": "Shop/sportsuit2-blue.jpg"
                },
                "category": "sportsuit",
                "size": [
                    "s",
                    "m",
                    "l",
                    "xl"
                ],
                "colors": [
                    "beige",
                    "black",
                    "white",
                    "red",
                    "blue",
                    "pink",
                    "grey"
                ],
                "inStock": 12
            },
            {
                "id": 8,
                "title": "Sport Suit Milk",
                "price": 229,
                "image": {
                    "black": "Shop/sportsuit3-blue.jpg",
                    "white": "Shop/sportsuit3.jpg",
                    "red": "Shop/sportsuit3-red.jpg",
                    "pink": "Shop/sportsuit3-pink.jpg",
                    "grey": "Shop/sportsuit3-grey.jpg",
                    "beige": "Shop/sportsuit3-beige.jpg"
                },
                "category": "sportsuit",
                "size": [
                    "s",
                    "m",
                    "xl"
                ],
                "colors": [
                    "beige",
                    "black",
                    "white",
                    "red",
                    "pink",
                    "grey"
                ],
                "inStock": 9
            },
            {
                "id": 9,
                "title": "Sport Suit WarmHeart",
                "price": 259,
                "image": {
                    "black": "Shop/sportsuit4.jpg",
                    "blue": "Shop/sportsuit4-blue.jpg",
                    "white": "Shop/sportsuit4-white.jpg",
                    "red": "Shop/sportsuit4-red.jpg",
                    "pink": "Shop/sportsuit4-pink.jpg",
                    "grey": "Shop/sportsuit4-grey.jpg",
                    "beige": "Shop/sportsuit4-beige.jpg"
                },
                "category": "sportsuit",
                "size": [
                    "s",
                    "m",
                    "l",
                    "xl"
                ],
                "colors": [
                    "beige",
                    "black",
                    "white",
                    "red",
                    "pink",
                    "grey",
                    "blue"
                ],
                "inStock": 31
            },
            {
                "id": 10,
                "title": "Sport Suit Flow",
                "price": 290,
                "priceSale": 150,
                "image": {
                    "black": "Shop/sportsuit5-black.jpg",
                    "blue": "Shop/sportsuit5-blue.jpg",
                    "white": "Shop/sportsuit5-white.jpg",
                    "red": "Shop/sportsuit5-red.jpg",
                    "pink": "Shop/sportsuit5.jpg",
                    "grey": "Shop/sportsuit5-grey.jpg",
                    "beige": "Shop/sportsuit5-beige.jpg"
                },
                "category": "sportsuit",
                "size": [
                    "s",
                    "m",
                    "xl"
                ],
                "colors": [
                    "beige",
                    "black",
                    "white",
                    "red",
                    "pink",
                    "grey",
                    "blue"
                ],
                "inStock": 6
            },
            {
                "id": 11,
                "title": "Sweatshirt Jinx LOL",
                "price": 300,
                "image": {
                    "black": "Shop/sweatshirt5.jpg",
                    "white": "Shop/sweatshirt5-white.jpg",
                    "red": "Shop/sweatshirt5-red.jpg",
                    "grey": "Shop/sweatshirt5-grey.jpg"
                },
                "category": "sweatshirt",
                "size": [
                    "s",
                    "m",
                    "l",
                    "xl"
                ],
                "colors": [
                    "grey",
                    "red",
                    "black",
                    "white"
                ],
                "inStock": 45
            },
            {
                "id": 12,
                "title": "Sweatshirt Dragon",
                "price": 200,
                "image": {
                    "black": "Shop/sweatshirt4-black.jpg",
                    "white": "Shop/sweatshirt4-white.jpg",
                    "red": "Shop/sweatshirt4-red.jpg",
                    "grey": "Shop/sweatshirt4-grey.jpg"
                },
                "category": "sweatshirt",
                "size": [
                    "s",
                    "m",
                    "xl"
                ],
                "colors": [
                    "grey",
                    "black",
                    "white",
                    "red"
                ],
                "inStock": 52
            },
            {
                "id": 13,
                "title": "Sweatshirt Rabbit",
                "price": 230,
                "image": {
                    "pink": "Shop/sweatshirt3-pink.jpg",
                    "white": "Shop/sweatshirt3-white.jpg",
                    "blue": "Shop/sweatshirt3-blue.jpg",
                    "red": "Shop/sweatshirt3-red.jpg",
                    "khaki": "Shop/sweatshirt3-khaki.jpg",
                    "beige": "Shop/sweatshirt3-beige.jpg",
                    "grey": "Shop/sweatshirt3-grey.jpg",
                    "aqua": "Shop/sweatshirt3-aqua.jpg",
                    "black": "Shop/sweatshirt3.jpg"
                },
                "category": "sweatshirt",
                "size": [
                    "s",
                    "m",
                    "l",
                    "xl"
                ],
                "colors": [
                    "pink",
                    "white",
                    "black",
                    "red",
                    "khaki",
                    "beige",
                    "grey",
                    "aqua",
                    "blue"
                ],
                "inStock": 44
            },
            {
                "id": 14,
                "title": "Sweatshirt Cat",
                "price": 250,
                "image": {
                    "pink": "Shop/sweatshirt2.jpg",
                    "white": "Shop/sweatshirt2-white.jpg",
                    "blue": "Shop/sweatshirt2-blue.jpg",
                    "red": "Shop/sweatshirt2-red.jpg",
                    "khaki": "Shop/sweatshirt2-khaki.jpg",
                    "beige": "Shop/sweatshirt2-beige.jpg",
                    "grey": "Shop/sweatshirt2-grey.jpg",
                    "aqua": "Shop/sweatshirt2-aqua.jpg",
                    "black": "Shop/sweatshirt2-black.jpg"
                },
                "category": "sweatshirt",
                "size": [
                    "s",
                    "m",
                    "xl"
                ],
                "colors": [
                    "pink",
                    "white",
                    "black",
                    "red",
                    "khaki",
                    "beige",
                    "grey",
                    "aqua",
                    "blue"
                ],
                "inStock": 15
            },
            {
                "id": 15,
                "title": "Sweatshirt Euphoria",
                "price": 200,
                "image": {
                    "black": "Shop/sweatshirt1.jpg",
                    "white": "Shop/sweatshirt1-white.jpg",
                    "red": "Shop/sweatshirt1-red.jpg",
                    "grey": "Shop/sweatshirt1-grey.jpg"
                },
                "category": "sweatshirt",
                "size": [
                    "s",
                    "m",
                    "l",
                    "xl"
                ],
                "colors": [
                    "white",
                    "grey",
                    "black",
                    "red"
                ],
                "inStock": 16
            },
            {
                "id": 16,
                "title": "Футболка Монализа",
                "price": 540,
                "image": {
                    "black": "Shop/tshort1.jpg",
                    "beige": "Shop/tshort1-beige.jpg",
                    "blue": "Shop/tshort1-blue.jpg",
                    "brown": "Shop/tshort1-brown.jpg",
                    "grey": "Shop/tshort1-grey.jpg",
                    "orange": "Shop/tshort1-orange.jpg",
                    "pink": "Shop/tshort1-pink.jpg",
                    "red": "Shop/tshort1-red.jpg",
                    "white": "Shop/tshort1-white.jpg"
                },
                "category": "tshort",
                "size": [
                    "s",
                    "m",
                    "xl"
                ],
                "colors": [
                    "pink",
                    "black",
                    "brown",
                    "beige",
                    "red",
                    "orange",
                    "white",
                    "blue",
                    "grey"
                ],
                "inStock": 27
            },
            {
                "id": 17,
                "title": "Футболка девочка",
                "price": 520,
                "image": {
                    "beige": "Shop/tshort2-beige.jpg",
                    "brown": "Shop/tshort2-brown.jpg",
                    "black": "Shop/tshort2-grey.jpg",
                    "pink": "Shop/tshort2-pink.jpg",
                    "red": "Shop/tshort2-red.jpg",
                    "white": "Shop/tshort2.jpg"
                },
                "category": "tshort",
                "size": [
                    "s",
                    "m",
                    "l",
                    "xl"
                ],
                "colors": [
                    "pink",
                    "brown",
                    "beige",
                    "red",
                    "white",
                    "black"
                ],
                "inStock": 31,
                "priceSale": 416
            },
            {
                "id": 18,
                "title": "Футболка Japan",
                "price": 350,
                "image": {
                    "black": "Shop/tshort3-black.jpg",
                    "beige": "Shop/tshort3-beige.jpg",
                    "blue": "Shop/tshort3-blue.jpg",
                    "brown": "Shop/tshort3-brown.jpg",
                    "grey": "Shop/tshort3-grey.jpg",
                    "orange": "Shop/tshort3-orange.jpg",
                    "pink": "Shop/tshort3-pink.jpg",
                    "red": "Shop/tshort3-red.jpg",
                    "white": "Shop/tshort3.jpg"
                },
                "category": "tshort",
                "size": [
                    "s",
                    "m",
                    "xl"
                ],
                "colors": [
                    "pink",
                    "black",
                    "brown",
                    "beige",
                    "red",
                    "orange",
                    "white",
                    "blue",
                    "grey"
                ],
                "inStock": 20,
                "priceSale": 350
            },
            {
                "id": 19,
                "title": "Футболка Бегемотик",
                "price": 490,
                "image": {
                    "beige": "Shop/tshort4-beige.jpg",
                    "black": "Shop/tshort4-blue.jpg",
                    "brown": "Shop/tshort4.jpg",
                    "grey": "Shop/tshort4-grey.jpg",
                    "orange": "Shop/tshort4-orange.jpg",
                    "pink": "Shop/tshort4-pink.jpg"
                },
                "category": "tshort",
                "size": [
                    "s",
                    "m",
                    "l",
                    "xl"
                ],
                "colors": [
                    "pink",
                    "brown",
                    "beige",
                    "orange",
                    "black",
                    "grey"
                ],
                "inStock": 19
            },
            {
                "id": 20,
                "title": "Футболка Киллуа",
                "price": 500,
                "image": {
                    "black": "Shop/tshort5.jpg",
                    "beige": "Shop/tshort5-beige.jpg",
                    "blue": "Shop/tshort5-blue.jpg",
                    "brown": "Shop/tshort5-brown.jpg",
                    "grey": "Shop/tshort5-grey.jpg",
                    "orange": "Shop/tshort5-orange.jpg",
                    "pink": "Shop/tshort5-pink.jpg",
                    "red": "Shop/tshort5-red.jpg",
                    "white": "Shop/tshort5.jpg"
                },
                "category": "tshort",
                "size": [
                    "s",
                    "m",
                    "xl"
                ],
                "colors": [
                    "pink",
                    "black",
                    "brown",
                    "beige",
                    "red",
                    "orange",
                    "white",
                    "blue",
                    "grey"
                ],
                "inStock": 14
            }
        ],
        status: 'idle',
        error: null
    },
    reducers: {}
})


export default clothesSlice.reducer