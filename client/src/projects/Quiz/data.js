import debilana from "./miroljub-slike/debilana.jpg"
import gusle from "./miroljub-slike/gusle.jpg"
import heroin from "./miroljub-slike/heroin.jpg"
import manekenke from "./miroljub-slike/manekenke.jpg"
import opcije from "./miroljub-slike/opcije.jpg"

import croatia from "./geography-pictures/croatia.jpg"
import paris from "./geography-pictures/paris.jpg"
import himalayas from "./geography-pictures/himalayas.png"
import budapest from "./geography-pictures/budapest.jpg"
import amazon from "./geography-pictures/amazon.jpg"

import batman from "./movies-pictures/batman.jpg"
import godfather from "./movies-pictures/godfather.jpg"
import harrison from "./movies-pictures/harrison.jpg"
import terminator from "./movies-pictures/batman.jpg"
import anakin from "./movies-pictures/anakin.png"

export const questions = [
  {
		question: "Gdje možemo steći obrazovanje?",
		answers: ["U osnovnoj školi","U srednjoj školi","Na fakultetu","Kod stručnjaka"],
		correctAnswer: "Kod stručnjaka",
    prize: 1,
    img: debilana   
  },
  {
		question: "Koji je najbolji glazbeni instrument?",
		answers: ["Gitara","Gusle","Bubnjevi","Violina"],
		correctAnswer: "Gusle",
    prize: 1,
    img: gusle    
  },
  {
		question: "Koja je najgora droga?",
		answers: ["Kokain","Heroin","Kamenjarke","Marihuana"],
		correctAnswer: "Kamenjarke",
    prize: 1,
    img: heroin    
  },
  {
		question: "Gdje je najbolja škola za manekenke?",
		answers: ["Zagreb","Beograd","Novi Sad","Trik pitanje"],
		correctAnswer: "Trik pitanje",
    prize: 1,
    img: manekenke    
  },
  {
		question: "Koje opcije ima peder?",
		answers: ["Da se liječi","Da se seli","Da ide pod mač","Sve navedeno"],
		correctAnswer: "Sve navedeno",
    prize: 1,
    img: opcije    
  },
  {
		question: "Koje opcije ima peder?",
		answers: ["Da se liječi","Da se seli","Da ide pod mač","Sve navedeno"],
		correctAnswer: "Sve navedeno",
    prize: 1,
    img: opcije    
  },
]
export const razine = ["0","Buzdovan","Pilićar","Domaćin","Vitez","Vojvoda"]

export const geography = [
  {
		question: "Where is Croatia?",
		answers: ["Asia","North America","Africa","Europe"],
		correctAnswer: "Europe",
    prize: 5000,
    img: croatia  
  },
  {
		question: "What is the capitol of France?",
		answers: ["Paris","London","Tokio","Sao Paolo"],
		correctAnswer: "Paris",
    prize: 10000,
    img: paris    
  },
  {
		question: "Where is the Amazon river?",
		answers: ["North America","Africa","South Amerika","Asia"],
		correctAnswer: "South Amerika",
    prize: 85000,
    img: amazon    
  },
  {
		question: "Where are the Himalayas?",
		answers: ["Africa","Australia","Asia","North America"],
		correctAnswer: "Asia",
    prize: 400000,
    img: himalayas    
  },
  {
		question: "What is the capitol of Hungary?",
		answers: ["Budapest","Graz","Berlin","Prague"],
		correctAnswer: "Budapest",
    prize: 500000,
    img: budapest    
  },
  {
		question: "Koje opcije ima peder?",
		answers: ["Da se liječi","Da se seli","Da ide pod mač","Sve navedeno"],
		correctAnswer: "Sve navedeno",
    prize: 1,
    img: opcije    
  },
]
export const levels = ["0","Novice","Intermediate","Advanced","Expert","Pro"]
 
export const movies = [
  {
		question: "When was the Godfather released?",
		answers: ["2002","1992","1982","1972"],
		correctAnswer: "1972",
    prize: 5000,
    img: godfather  
  },
  {
		question: "Who is the leading actor in Bladerunner 1982?",
		answers: ["Michael Jackson","Bruce Willis","Harrison Ford","The Rock"],
		correctAnswer: "Harrison Ford",
    prize: 10000,
    img: harrison  
  },
  {
		question: "What was Darth Vaders real name?",
		answers: ["Lucky Luke","Bono","Anakin Skywalker","Jessie James"],
		correctAnswer: "Anakin Skywalker",
    prize: 85000,
    img: anakin    
  },
  {
		question: "What is Batmans true identity?",
		answers: ["Pablo Escobar","Stevie Wonder","Bruce Wayne","Karen"],
		correctAnswer: "Bruce Wayne",
    prize: 400000,
    img: batman    
  },
  {
		question: "Who is the Terminator?",
		answers: ["Arnold Schwarzenegger","Tom Hanks","Leonardo DiCaprio","Samuel L Jackson"],
		correctAnswer: "Arnold Schwarzenegger",
    prize: 500000,
    img: terminator    
  },
  {
		question: "Koje opcije ima peder?",
		answers: ["Da se liječi","Da se seli","Da ide pod mač","Sve navedeno"],
		correctAnswer: "Sve navedeno",
    prize: 1,
    img: opcije    
  },
]