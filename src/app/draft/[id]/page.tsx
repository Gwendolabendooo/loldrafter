"use client"

import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';

import { socket, SocketContext } from '@/app/socketProvider';

// Créez une fonction de composant React
function Page({ params }: { params: { id: string } }) {
	const { lobbyInfos } = useContext(SocketContext);

	const champDatas = [
		{
		  "id": -1,
		  "name": "None",
		  "alias": "None",
		  "squarePortraitPath": "/out/-1.png",
		  "roles": []
		},
		{
		  "id": 1,
		  "name": "Annie",
		  "alias": "Annie",
		  "squarePortraitPath": "/out/1.png",
		  "roles": ["mage"]
		},
		{
		  "id": 2,
		  "name": "Olaf",
		  "alias": "Olaf",
		  "squarePortraitPath": "/out/2.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 3,
		  "name": "Galio",
		  "alias": "Galio",
		  "squarePortraitPath": "/out/3.png",
		  "roles": ["tank", "mage"]
		},
		{
		  "id": 4,
		  "name": "Twisted Fate",
		  "alias": "TwistedFate",
		  "squarePortraitPath": "/out/4.png",
		  "roles": ["mage"]
		},
		{
		  "id": 5,
		  "name": "Xin Zhao",
		  "alias": "XinZhao",
		  "squarePortraitPath": "/out/5.png",
		  "roles": ["fighter", "assassin"]
		},
		{
		  "id": 6,
		  "name": "Urgot",
		  "alias": "Urgot",
		  "squarePortraitPath": "/out/6.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 7,
		  "name": "LeBlanc",
		  "alias": "Leblanc",
		  "squarePortraitPath": "/out/7.png",
		  "roles": ["assassin", "mage"]
		},
		{
		  "id": 8,
		  "name": "Vladimir",
		  "alias": "Vladimir",
		  "squarePortraitPath": "/out/8.png",
		  "roles": ["mage"]
		},
		{
		  "id": 9,
		  "name": "Fiddlesticks",
		  "alias": "FiddleSticks",
		  "squarePortraitPath": "/out/9.png",
		  "roles": ["mage", "support"]
		},
		{
		  "id": 10,
		  "name": "Kayle",
		  "alias": "Kayle",
		  "squarePortraitPath": "/out/10.png",
		  "roles": ["fighter", "support"]
		},
		{
		  "id": 11,
		  "name": "Master Yi",
		  "alias": "MasterYi",
		  "squarePortraitPath": "/out/11.png",
		  "roles": ["assassin", "fighter"]
		},
		{
		  "id": 12,
		  "name": "Alistar",
		  "alias": "Alistar",
		  "squarePortraitPath": "/out/12.png",
		  "roles": ["tank", "support"]
		},
		{
		  "id": 13,
		  "name": "Ryze",
		  "alias": "Ryze",
		  "squarePortraitPath": "/out/13.png",
		  "roles": ["mage", "fighter"]
		},
		{
		  "id": 14,
		  "name": "Sion",
		  "alias": "Sion",
		  "squarePortraitPath": "/out/14.png",
		  "roles": ["tank", "fighter"]
		},
		{
		  "id": 15,
		  "name": "Sivir",
		  "alias": "Sivir",
		  "squarePortraitPath": "/out/15.png",
		  "roles": ["marksman"]
		},
		{
		  "id": 16,
		  "name": "Soraka",
		  "alias": "Soraka",
		  "squarePortraitPath": "/out/16.png",
		  "roles": ["support", "mage"]
		},
		{
		  "id": 17,
		  "name": "Teemo",
		  "alias": "Teemo",
		  "squarePortraitPath": "/out/17.png",
		  "roles": ["marksman", "assassin"]
		},
		{
		  "id": 18,
		  "name": "Tristana",
		  "alias": "Tristana",
		  "squarePortraitPath": "/out/18.png",
		  "roles": ["marksman", "assassin"]
		},
		{
		  "id": 19,
		  "name": "Warwick",
		  "alias": "Warwick",
		  "squarePortraitPath": "/out/19.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 20,
		  "name": "Nunu & Willump",
		  "alias": "Nunu",
		  "squarePortraitPath": "/out/20.png",
		  "roles": ["tank", "fighter"]
		},
		{
		  "id": 21,
		  "name": "Miss Fortune",
		  "alias": "MissFortune",
		  "squarePortraitPath": "/out/21.png",
		  "roles": ["marksman"]
		},
		{
		  "id": 22,
		  "name": "Ashe",
		  "alias": "Ashe",
		  "squarePortraitPath": "/out/22.png",
		  "roles": ["marksman", "support"]
		},
		{
		  "id": 23,
		  "name": "Tryndamere",
		  "alias": "Tryndamere",
		  "squarePortraitPath": "/out/23.png",
		  "roles": ["fighter", "assassin"]
		},
		{
		  "id": 24,
		  "name": "Jax",
		  "alias": "Jax",
		  "squarePortraitPath": "/out/24.png",
		  "roles": ["fighter", "assassin"]
		},
		{
		  "id": 25,
		  "name": "Morgana",
		  "alias": "Morgana",
		  "squarePortraitPath": "/out/25.png",
		  "roles": ["mage", "support"]
		},
		{
		  "id": 26,
		  "name": "Zilean",
		  "alias": "Zilean",
		  "squarePortraitPath": "/out/26.png",
		  "roles": ["support", "mage"]
		},
		{
		  "id": 27,
		  "name": "Singed",
		  "alias": "Singed",
		  "squarePortraitPath": "/out/27.png",
		  "roles": ["tank", "fighter"]
		},
		{
		  "id": 28,
		  "name": "Evelynn",
		  "alias": "Evelynn",
		  "squarePortraitPath": "/out/28.png",
		  "roles": ["assassin", "mage"]
		},
		{
		  "id": 29,
		  "name": "Twitch",
		  "alias": "Twitch",
		  "squarePortraitPath": "/out/29.png",
		  "roles": ["marksman", "assassin"]
		},
		{
		  "id": 30,
		  "name": "Karthus",
		  "alias": "Karthus",
		  "squarePortraitPath": "/out/30.png",
		  "roles": ["mage"]
		},
		{
		  "id": 31,
		  "name": "Cho'Gath",
		  "alias": "Chogath",
		  "squarePortraitPath": "/out/31.png",
		  "roles": ["tank", "mage"]
		},
		{
		  "id": 32,
		  "name": "Amumu",
		  "alias": "Amumu",
		  "squarePortraitPath": "/out/32.png",
		  "roles": ["tank", "mage"]
		},
		{
		  "id": 33,
		  "name": "Rammus",
		  "alias": "Rammus",
		  "squarePortraitPath": "/out/33.png",
		  "roles": ["tank", "fighter"]
		},
		{
		  "id": 34,
		  "name": "Anivia",
		  "alias": "Anivia",
		  "squarePortraitPath": "/out/34.png",
		  "roles": ["mage", "support"]
		},
		{
		  "id": 35,
		  "name": "Shaco",
		  "alias": "Shaco",
		  "squarePortraitPath": "/out/35.png",
		  "roles": ["assassin"]
		},
		{
		  "id": 36,
		  "name": "Dr. Mundo",
		  "alias": "DrMundo",
		  "squarePortraitPath": "/out/36.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 37,
		  "name": "Sona",
		  "alias": "Sona",
		  "squarePortraitPath": "/out/37.png",
		  "roles": ["support", "mage"]
		},
		{
		  "id": 38,
		  "name": "Kassadin",
		  "alias": "Kassadin",
		  "squarePortraitPath": "/out/38.png",
		  "roles": ["assassin", "mage"]
		},
		{
		  "id": 39,
		  "name": "Irelia",
		  "alias": "Irelia",
		  "squarePortraitPath": "/out/39.png",
		  "roles": ["fighter", "assassin"]
		},
		{
		  "id": 40,
		  "name": "Janna",
		  "alias": "Janna",
		  "squarePortraitPath": "/out/40.png",
		  "roles": ["support", "mage"]
		},
		{
		  "id": 41,
		  "name": "Gangplank",
		  "alias": "Gangplank",
		  "squarePortraitPath": "/out/41.png",
		  "roles": ["fighter"]
		},
		{
		  "id": 42,
		  "name": "Corki",
		  "alias": "Corki",
		  "squarePortraitPath": "/out/42.png",
		  "roles": ["marksman"]
		},
		{
		  "id": 43,
		  "name": "Karma",
		  "alias": "Karma",
		  "squarePortraitPath": "/out/43.png",
		  "roles": ["mage", "support"]
		},
		{
		  "id": 44,
		  "name": "Taric",
		  "alias": "Taric",
		  "squarePortraitPath": "/out/44.png",
		  "roles": ["support", "fighter"]
		},
		{
		  "id": 45,
		  "name": "Veigar",
		  "alias": "Veigar",
		  "squarePortraitPath": "/out/45.png",
		  "roles": ["mage"]
		},
		{
		  "id": 48,
		  "name": "Trundle",
		  "alias": "Trundle",
		  "squarePortraitPath": "/out/48.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 50,
		  "name": "Swain",
		  "alias": "Swain",
		  "squarePortraitPath": "/out/50.png",
		  "roles": ["mage", "fighter"]
		},
		{
		  "id": 51,
		  "name": "Caitlyn",
		  "alias": "Caitlyn",
		  "squarePortraitPath": "/out/51.png",
		  "roles": ["marksman"]
		},
		{
		  "id": 53,
		  "name": "Blitzcrank",
		  "alias": "Blitzcrank",
		  "squarePortraitPath": "/out/53.png",
		  "roles": ["tank", "fighter"]
		},
		{
		  "id": 54,
		  "name": "Malphite",
		  "alias": "Malphite",
		  "squarePortraitPath": "/out/54.png",
		  "roles": ["tank", "fighter"]
		},
		{
		  "id": 55,
		  "name": "Katarina",
		  "alias": "Katarina",
		  "squarePortraitPath": "/out/55.png",
		  "roles": ["assassin", "mage"]
		},
		{
		  "id": 56,
		  "name": "Nocturne",
		  "alias": "Nocturne",
		  "squarePortraitPath": "/out/56.png",
		  "roles": ["assassin", "fighter"]
		},
		{
		  "id": 57,
		  "name": "Maokai",
		  "alias": "Maokai",
		  "squarePortraitPath": "/out/57.png",
		  "roles": ["tank", "mage"]
		},
		{
		  "id": 58,
		  "name": "Renekton",
		  "alias": "Renekton",
		  "squarePortraitPath": "/out/58.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 59,
		  "name": "Jarvan IV",
		  "alias": "JarvanIV",
		  "squarePortraitPath": "/out/59.png",
		  "roles": ["tank", "fighter"]
		},
		{
		  "id": 60,
		  "name": "Elise",
		  "alias": "Elise",
		  "squarePortraitPath": "/out/60.png",
		  "roles": ["mage", "fighter"]
		},
		{
		  "id": 61,
		  "name": "Orianna",
		  "alias": "Orianna",
		  "squarePortraitPath": "/out/61.png",
		  "roles": ["mage", "support"]
		},
		{
		  "id": 62,
		  "name": "Wukong",
		  "alias": "MonkeyKing",
		  "squarePortraitPath": "/out/62.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 63,
		  "name": "Brand",
		  "alias": "Brand",
		  "squarePortraitPath": "/out/63.png",
		  "roles": ["mage"]
		},
		{
		  "id": 64,
		  "name": "Lee Sin",
		  "alias": "LeeSin",
		  "squarePortraitPath": "/out/64.png",
		  "roles": ["fighter", "assassin"]
		},
		{
		  "id": 67,
		  "name": "Vayne",
		  "alias": "Vayne",
		  "squarePortraitPath": "/out/67.png",
		  "roles": ["marksman", "assassin"]
		},
		{
		  "id": 68,
		  "name": "Rumble",
		  "alias": "Rumble",
		  "squarePortraitPath": "/out/68.png",
		  "roles": ["fighter", "mage"]
		},
		{
		  "id": 69,
		  "name": "Cassiopeia",
		  "alias": "Cassiopeia",
		  "squarePortraitPath": "/out/69.png",
		  "roles": ["mage"]
		},
		{
		  "id": 72,
		  "name": "Skarner",
		  "alias": "Skarner",
		  "squarePortraitPath": "/out/72.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 74,
		  "name": "Heimerdinger",
		  "alias": "Heimerdinger",
		  "squarePortraitPath": "/out/74.png",
		  "roles": ["mage", "support"]
		},
		{
		  "id": 75,
		  "name": "Nasus",
		  "alias": "Nasus",
		  "squarePortraitPath": "/out/75.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 76,
		  "name": "Nidalee",
		  "alias": "Nidalee",
		  "squarePortraitPath": "/out/76.png",
		  "roles": ["assassin", "mage"]
		},
		{
		  "id": 77,
		  "name": "Udyr",
		  "alias": "Udyr",
		  "squarePortraitPath": "/out/77.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 78,
		  "name": "Poppy",
		  "alias": "Poppy",
		  "squarePortraitPath": "/out/78.png",
		  "roles": ["tank", "fighter"]
		},
		{
		  "id": 79,
		  "name": "Gragas",
		  "alias": "Gragas",
		  "squarePortraitPath": "/out/79.png",
		  "roles": ["fighter", "mage"]
		},
		{
		  "id": 80,
		  "name": "Pantheon",
		  "alias": "Pantheon",
		  "squarePortraitPath": "/out/80.png",
		  "roles": ["fighter", "assassin"]
		},
		{
		  "id": 81,
		  "name": "Ezreal",
		  "alias": "Ezreal",
		  "squarePortraitPath": "/out/81.png",
		  "roles": ["marksman", "mage"]
		},
		{
		  "id": 82,
		  "name": "Mordekaiser",
		  "alias": "Mordekaiser",
		  "squarePortraitPath": "/out/82.png",
		  "roles": ["fighter"]
		},
		{
		  "id": 83,
		  "name": "Yorick",
		  "alias": "Yorick",
		  "squarePortraitPath": "/out/83.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 84,
		  "name": "Akali",
		  "alias": "Akali",
		  "squarePortraitPath": "/out/84.png",
		  "roles": ["assassin"]
		},
		{
		  "id": 85,
		  "name": "Kennen",
		  "alias": "Kennen",
		  "squarePortraitPath": "/out/85.png",
		  "roles": ["mage", "marksman"]
		},
		{
		  "id": 86,
		  "name": "Garen",
		  "alias": "Garen",
		  "squarePortraitPath": "/out/86.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 89,
		  "name": "Leona",
		  "alias": "Leona",
		  "squarePortraitPath": "/out/89.png",
		  "roles": ["tank", "support"]
		},
		{
		  "id": 90,
		  "name": "Malzahar",
		  "alias": "Malzahar",
		  "squarePortraitPath": "/out/90.png",
		  "roles": ["mage", "assassin"]
		},
		{
		  "id": 91,
		  "name": "Talon",
		  "alias": "Talon",
		  "squarePortraitPath": "/out/91.png",
		  "roles": ["assassin"]
		},
		{
		  "id": 92,
		  "name": "Riven",
		  "alias": "Riven",
		  "squarePortraitPath": "/out/92.png",
		  "roles": ["fighter", "assassin"]
		},
		{
		  "id": 96,
		  "name": "Kog'Maw",
		  "alias": "KogMaw",
		  "squarePortraitPath": "/out/96.png",
		  "roles": ["marksman", "mage"]
		},
		{
		  "id": 98,
		  "name": "Shen",
		  "alias": "Shen",
		  "squarePortraitPath": "/out/98.png",
		  "roles": ["tank"]
		},
		{
		  "id": 99,
		  "name": "Lux",
		  "alias": "Lux",
		  "squarePortraitPath": "/out/99.png",
		  "roles": ["mage", "support"]
		},
		{
		  "id": 101,
		  "name": "Xerath",
		  "alias": "Xerath",
		  "squarePortraitPath": "/out/101.png",
		  "roles": ["mage"]
		},
		{
		  "id": 102,
		  "name": "Shyvana",
		  "alias": "Shyvana",
		  "squarePortraitPath": "/out/102.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 103,
		  "name": "Ahri",
		  "alias": "Ahri",
		  "squarePortraitPath": "/out/103.png",
		  "roles": ["mage", "assassin"]
		},
		{
		  "id": 104,
		  "name": "Graves",
		  "alias": "Graves",
		  "squarePortraitPath": "/out/104.png",
		  "roles": ["marksman"]
		},
		{
		  "id": 105,
		  "name": "Fizz",
		  "alias": "Fizz",
		  "squarePortraitPath": "/out/105.png",
		  "roles": ["assassin", "fighter"]
		},
		{
		  "id": 106,
		  "name": "Volibear",
		  "alias": "Volibear",
		  "squarePortraitPath": "/out/106.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 107,
		  "name": "Rengar",
		  "alias": "Rengar",
		  "squarePortraitPath": "/out/107.png",
		  "roles": ["assassin", "fighter"]
		},
		{
		  "id": 110,
		  "name": "Varus",
		  "alias": "Varus",
		  "squarePortraitPath": "/out/110.png",
		  "roles": ["marksman", "mage"]
		},
		{
		  "id": 111,
		  "name": "Nautilus",
		  "alias": "Nautilus",
		  "squarePortraitPath": "/out/111.png",
		  "roles": ["tank", "support"]
		},
		{
		  "id": 112,
		  "name": "Viktor",
		  "alias": "Viktor",
		  "squarePortraitPath": "/out/112.png",
		  "roles": ["mage"]
		},
		{
		  "id": 113,
		  "name": "Sejuani",
		  "alias": "Sejuani",
		  "squarePortraitPath": "/out/113.png",
		  "roles": ["tank", "fighter"]
		},
		{
		  "id": 114,
		  "name": "Fiora",
		  "alias": "Fiora",
		  "squarePortraitPath": "/out/114.png",
		  "roles": ["fighter", "assassin"]
		},
		{
		  "id": 115,
		  "name": "Ziggs",
		  "alias": "Ziggs",
		  "squarePortraitPath": "/out/115.png",
		  "roles": ["mage"]
		},
		{
		  "id": 117,
		  "name": "Lulu",
		  "alias": "Lulu",
		  "squarePortraitPath": "/out/117.png",
		  "roles": ["support", "mage"]
		},
		{
		  "id": 119,
		  "name": "Draven",
		  "alias": "Draven",
		  "squarePortraitPath": "/out/119.png",
		  "roles": ["marksman"]
		},
		{
		  "id": 120,
		  "name": "Hecarim",
		  "alias": "Hecarim",
		  "squarePortraitPath": "/out/120.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 121,
		  "name": "Kha'Zix",
		  "alias": "Khazix",
		  "squarePortraitPath": "/out/121.png",
		  "roles": ["assassin"]
		},
		{
		  "id": 122,
		  "name": "Darius",
		  "alias": "Darius",
		  "squarePortraitPath": "/out/122.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 126,
		  "name": "Jayce",
		  "alias": "Jayce",
		  "squarePortraitPath": "/out/126.png",
		  "roles": ["fighter", "marksman"]
		},
		{
		  "id": 127,
		  "name": "Lissandra",
		  "alias": "Lissandra",
		  "squarePortraitPath": "/out/127.png",
		  "roles": ["mage"]
		},
		{
		  "id": 131,
		  "name": "Diana",
		  "alias": "Diana",
		  "squarePortraitPath": "/out/131.png",
		  "roles": ["fighter", "mage"]
		},
		{
		  "id": 133,
		  "name": "Quinn",
		  "alias": "Quinn",
		  "squarePortraitPath": "/out/133.png",
		  "roles": ["marksman", "assassin"]
		},
		{
		  "id": 134,
		  "name": "Syndra",
		  "alias": "Syndra",
		  "squarePortraitPath": "/out/134.png",
		  "roles": ["mage"]
		},
		{
		  "id": 136,
		  "name": "Aurelion Sol",
		  "alias": "AurelionSol",
		  "squarePortraitPath": "/out/136.png",
		  "roles": ["mage"]
		},
		{
		  "id": 141,
		  "name": "Kayn",
		  "alias": "Kayn",
		  "squarePortraitPath": "/out/141.png",
		  "roles": ["fighter", "assassin"]
		},
		{
		  "id": 142,
		  "name": "Zoe",
		  "alias": "Zoe",
		  "squarePortraitPath": "/out/142.png",
		  "roles": ["mage", "support"]
		},
		{
		  "id": 143,
		  "name": "Zyra",
		  "alias": "Zyra",
		  "squarePortraitPath": "/out/143.png",
		  "roles": ["mage", "support"]
		},
		{
		  "id": 145,
		  "name": "Kai'Sa",
		  "alias": "Kaisa",
		  "squarePortraitPath": "/out/145.png",
		  "roles": ["marksman"]
		},
		{
		  "id": 147,
		  "name": "Seraphine",
		  "alias": "Seraphine",
		  "squarePortraitPath": "/out/147.png",
		  "roles": ["mage", "support"]
		},
		{
		  "id": 150,
		  "name": "Gnar",
		  "alias": "Gnar",
		  "squarePortraitPath": "/out/150.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 154,
		  "name": "Zac",
		  "alias": "Zac",
		  "squarePortraitPath": "/out/154.png",
		  "roles": ["tank", "fighter"]
		},
		{
		  "id": 157,
		  "name": "Yasuo",
		  "alias": "Yasuo",
		  "squarePortraitPath": "/out/157.png",
		  "roles": ["fighter", "assassin"]
		},
		{
		  "id": 161,
		  "name": "Vel'Koz",
		  "alias": "Velkoz",
		  "squarePortraitPath": "/out/161.png",
		  "roles": ["mage"]
		},
		{
		  "id": 163,
		  "name": "Taliyah",
		  "alias": "Taliyah",
		  "squarePortraitPath": "/out/163.png",
		  "roles": ["mage", "support"]
		},
		{
		  "id": 164,
		  "name": "Camille",
		  "alias": "Camille",
		  "squarePortraitPath": "/out/164.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 166,
		  "name": "Akshan",
		  "alias": "Akshan",
		  "squarePortraitPath": "/out/166.png",
		  "roles": ["marksman", "assassin"]
		},
		{
		  "id": 200,
		  "name": "Bel'Veth",
		  "alias": "Belveth",
		  "squarePortraitPath": "/out/200.png",
		  "roles": ["fighter"]
		},
		{
		  "id": 201,
		  "name": "Braum",
		  "alias": "Braum",
		  "squarePortraitPath": "/out/201.png",
		  "roles": ["support", "tank"]
		},
		{
		  "id": 202,
		  "name": "Jhin",
		  "alias": "Jhin",
		  "squarePortraitPath": "/out/202.png",
		  "roles": ["marksman", "mage"]
		},
		{
		  "id": 203,
		  "name": "Kindred",
		  "alias": "Kindred",
		  "squarePortraitPath": "/out/203.png",
		  "roles": ["marksman"]
		},
		{
		  "id": 221,
		  "name": "Zeri",
		  "alias": "Zeri",
		  "squarePortraitPath": "/out/221.png",
		  "roles": ["marksman"]
		},
		{
		  "id": 222,
		  "name": "Jinx",
		  "alias": "Jinx",
		  "squarePortraitPath": "/out/222.png",
		  "roles": ["marksman"]
		},
		{
		  "id": 223,
		  "name": "Tahm Kench",
		  "alias": "TahmKench",
		  "squarePortraitPath": "/out/223.png",
		  "roles": ["support", "tank"]
		},
		{
		  "id": 233,
		  "name": "Briar",
		  "alias": "Briar",
		  "squarePortraitPath": "/out/233.png",
		  "roles": ["fighter", "assassin"]
		},
		{
		  "id": 234,
		  "name": "Viego",
		  "alias": "Viego",
		  "squarePortraitPath": "/out/234.png",
		  "roles": ["assassin", "fighter"]
		},
		{
		  "id": 235,
		  "name": "Senna",
		  "alias": "Senna",
		  "squarePortraitPath": "/out/235.png",
		  "roles": ["marksman", "support"]
		},
		{
		  "id": 236,
		  "name": "Lucian",
		  "alias": "Lucian",
		  "squarePortraitPath": "/out/236.png",
		  "roles": ["marksman"]
		},
		{
		  "id": 238,
		  "name": "Zed",
		  "alias": "Zed",
		  "squarePortraitPath": "/out/238.png",
		  "roles": ["assassin"]
		},
		{
		  "id": 240,
		  "name": "Kled",
		  "alias": "Kled",
		  "squarePortraitPath": "/out/240.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 245,
		  "name": "Ekko",
		  "alias": "Ekko",
		  "squarePortraitPath": "/out/245.png",
		  "roles": ["assassin", "fighter"]
		},
		{
		  "id": 246,
		  "name": "Qiyana",
		  "alias": "Qiyana",
		  "squarePortraitPath": "/out/246.png",
		  "roles": ["assassin", "fighter"]
		},
		{
		  "id": 254,
		  "name": "Vi",
		  "alias": "Vi",
		  "squarePortraitPath": "/out/254.png",
		  "roles": ["fighter", "assassin"]
		},
		{
		  "id": 266,
		  "name": "Aatrox",
		  "alias": "Aatrox",
		  "squarePortraitPath": "/out/266.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 267,
		  "name": "Nami",
		  "alias": "Nami",
		  "squarePortraitPath": "/out/267.png",
		  "roles": ["support", "mage"]
		},
		{
		  "id": 268,
		  "name": "Azir",
		  "alias": "Azir",
		  "squarePortraitPath": "/out/268.png",
		  "roles": ["mage", "marksman"]
		},
		{
		  "id": 350,
		  "name": "Yuumi",
		  "alias": "Yuumi",
		  "squarePortraitPath": "/out/350.png",
		  "roles": ["support", "mage"]
		},
		{
		  "id": 360,
		  "name": "Samira",
		  "alias": "Samira",
		  "squarePortraitPath": "/out/360.png",
		  "roles": ["marksman"]
		},
		{
		  "id": 412,
		  "name": "Thresh",
		  "alias": "Thresh",
		  "squarePortraitPath": "/out/412.png",
		  "roles": ["support", "fighter"]
		},
		{
		  "id": 420,
		  "name": "Illaoi",
		  "alias": "Illaoi",
		  "squarePortraitPath": "/out/420.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 421,
		  "name": "Rek'Sai",
		  "alias": "RekSai",
		  "squarePortraitPath": "/out/421.png",
		  "roles": ["fighter"]
		},
		{
		  "id": 427,
		  "name": "Ivern",
		  "alias": "Ivern",
		  "squarePortraitPath": "/out/427.png",
		  "roles": ["support", "mage"]
		},
		{
		  "id": 429,
		  "name": "Kalista",
		  "alias": "Kalista",
		  "squarePortraitPath": "/out/429.png",
		  "roles": ["marksman"]
		},
		{
		  "id": 432,
		  "name": "Bard",
		  "alias": "Bard",
		  "squarePortraitPath": "/out/432.png",
		  "roles": ["support", "mage"]
		},
		{
		  "id": 497,
		  "name": "Rakan",
		  "alias": "Rakan",
		  "squarePortraitPath": "/out/497.png",
		  "roles": ["support"]
		},
		{
		  "id": 498,
		  "name": "Xayah",
		  "alias": "Xayah",
		  "squarePortraitPath": "/out/498.png",
		  "roles": ["marksman"]
		},
		{
		  "id": 516,
		  "name": "Ornn",
		  "alias": "Ornn",
		  "squarePortraitPath": "/out/516.png",
		  "roles": ["tank", "fighter"]
		},
		{
		  "id": 517,
		  "name": "Sylas",
		  "alias": "Sylas",
		  "squarePortraitPath": "/out/517.png",
		  "roles": ["mage", "assassin"]
		},
		{
		  "id": 518,
		  "name": "Neeko",
		  "alias": "Neeko",
		  "squarePortraitPath": "/out/518.png",
		  "roles": ["mage", "support"]
		},
		{
		  "id": 523,
		  "name": "Aphelios",
		  "alias": "Aphelios",
		  "squarePortraitPath": "/out/523.png",
		  "roles": ["marksman"]
		},
		{
		  "id": 526,
		  "name": "Rell",
		  "alias": "Rell",
		  "squarePortraitPath": "/out/526.png",
		  "roles": ["tank", "support"]
		},
		{
		  "id": 555,
		  "name": "Pyke",
		  "alias": "Pyke",
		  "squarePortraitPath": "/out/555.png",
		  "roles": ["support", "assassin"]
		},
		{
		  "id": 711,
		  "name": "Vex",
		  "alias": "Vex",
		  "squarePortraitPath": "/out/711.png",
		  "roles": ["mage"]
		},
		{
		  "id": 777,
		  "name": "Yone",
		  "alias": "Yone",
		  "squarePortraitPath": "/out/777.png",
		  "roles": ["assassin", "fighter"]
		},
		{
		  "id": 875,
		  "name": "Sett",
		  "alias": "Sett",
		  "squarePortraitPath": "/out/875.png",
		  "roles": ["fighter", "tank"]
		},
		{
		  "id": 876,
		  "name": "Lillia",
		  "alias": "Lillia",
		  "squarePortraitPath": "/out/876.png",
		  "roles": ["fighter", "mage"]
		},
		{
		  "id": 887,
		  "name": "Gwen",
		  "alias": "Gwen",
		  "squarePortraitPath": "/out/887.png",
		  "roles": ["fighter", "assassin"]
		},
		{
		  "id": 888,
		  "name": "Renata Glasc",
		  "alias": "Renata",
		  "squarePortraitPath": "/out/888.png",
		  "roles": ["support", "mage"]
		},
		{
		  "id": 895,
		  "name": "Nilah",
		  "alias": "Nilah",
		  "squarePortraitPath": "/out/895.png",
		  "roles": ["fighter", "assassin"]
		},
		{
		  "id": 897,
		  "name": "K'Sante",
		  "alias": "KSante",
		  "squarePortraitPath": "/out/897.png",
		  "roles": ["tank", "fighter"]
		},
		{
		  "id": 901,
		  "name": "Smolder",
		  "alias": "Smolder",
		  "squarePortraitPath": "/out/901.png",
		  "roles": ["marksman"]
		},
		{
		  "id": 902,
		  "name": "Milio",
		  "alias": "Milio",
		  "squarePortraitPath": "/out/902.png",
		  "roles": ["support"]
		},
		{
		  "id": 910,
		  "name": "Hwei",
		  "alias": "Hwei",
		  "squarePortraitPath": "/out/910.png",
		  "roles": ["mage"]
		},
		{
		  "id": 950,
		  "name": "Naafiri",
		  "alias": "Naafiri",
		  "squarePortraitPath": "/out/950.png",
		  "roles": ["assassin"]
		}
	  ]

	  const [hoveredChampion, setHoveredChampion] = useState<string | null>(null);

  // État pour stocker l'id du champion survolé
  const [hoveredChampionId, setHoveredChampionId] = useState<number | null>(null);

  // Fonction de gestion pour définir l'id du champion survolé
  const handleMouseEnter = (championId: number) => {
    setHoveredChampionId(championId);
  };

  // Fonction de gestion pour réinitialiser l'id du champion survolé lorsque la souris quitte l'image
  const handleMouseLeave = () => {
    setHoveredChampionId(null);
  };
  console.log(lobbyInfos)

  const Champion = ({ champion }) => {
	return (
		<div className='relative'>
	  <div className='imageStyling cursor-pointer' onMouseEnter={() => setHoveredChampion(champion.name)}>
		<Image width={100} height={100} style={{filter: 'none', objectFit: 'cover'}} src={champion.squarePortraitPath} alt={champion.name} />
	  </div>
		{hoveredChampion === champion.name && <div className='absolute p-3 rounded bg-black bg-opacity-75' style={{zIndex: 100, transform: 'translate(-50%, -50%)', top: -30, left: '50%', width: 'auto', whiteSpace: 'nowrap'}}>{champion.name}</div>}

		</div>
	)
	}
	
  const ListeChampions = ({ champions }) => {
	return (
	  <div className='flex flex-row flex-wrap gap-5'>
		{champions.map((champion) => (
		  <Champion key={champion.id} champion={champion} />
		))}
	  </div>
	);
  };

  // Utilisez une boucle pour afficher chaque image avec son nom de champion
  return (
	<div className='flex flex-row justify-between'>
		<div className='w-[300px] shrink-0'>
			<h2>
				{lobbyInfos.blueTeam.name}
			</h2>
			<div className='w-[200px] bg-black'>
test
			</div>
		</div>
		<div>
			<div className='flex gap-8 flex-row'>
			<Image width={50} height={50} src={"/roles/top.webp"} />
				<Image width={50} height={50} src={"/roles/jungle.webp"} />
			<Image width={50} height={50} src={"/roles/mid.webp"} />

				<Image width={50} height={50} src={"/roles/adc.webp"} />
				<Image width={50} height={50} src={"/roles/supp.webp"} />
			</div>
		<ListeChampions champions={champDatas} />
		</div>
<div className='w-[300px] shrink-0'>
	<h2>
	{lobbyInfos.redTeam.name}
	</h2>
			blueside
		</div>
	</div>
  );
}

// Exportez le composant
export default Page;