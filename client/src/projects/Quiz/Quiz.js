import React,{useState,useEffect} from 'react'
import "./quiz.css"
import image from "./normal-slike/drEvil.jpg"
import {questions} from "./data"
import {razine} from "./data"
import {geography} from "./data"
import {movies} from "./data"
import {levels} from "./data"

export const Quiz = () => {
	const [choice,setChoice] = useState(false)
	const [setOfQuestions,setSetOfQuestions] = useState(geography)
	const [levelOfKnowledge,setLevelOfKnowledge] = useState(razine)
	const [index,setIndex] = useState(0)
	const [cash,setCash] = useState(0)
	const [wrongAnswer,setWrongAnswer] = useState(false)
	const [znanje,setZnanje] = useState(levels)
	const handleClickAnswer = (e) => {
		const condition = e.target.innerHTML
		if(condition === setOfQuestions[index].correctAnswer && index < setOfQuestions.length - 1){			
			setIndex(index + 1)
			setCash(cash + setOfQuestions[index].prize)			
		}if(condition !== setOfQuestions[index].correctAnswer){
			setWrongAnswer(true)
		}
	}
	useEffect(() => {
		setWrongAnswer(false)
		setZnanje(levelOfKnowledge[index])
	},[index, levelOfKnowledge])
	const handleGeography = () => {
		setSetOfQuestions(geography)
		setLevelOfKnowledge(levels)
		setChoice(true)
	}
	const handleMiroljub = () => {
		setSetOfQuestions(questions)
		setLevelOfKnowledge(razine)
		setChoice(true)
	}
	const handleMovies = () => {
		setSetOfQuestions(movies)
		setLevelOfKnowledge(levels)
		setChoice(true)
	}
	const handleCategory = () => {
		setIndex(0)
		setCash(0)
		setChoice(false)
		setSetOfQuestions([])
		setWrongAnswer(false)
	}

  return (
    <>      
      <section className="quiz">
				{choice ? (
					<div>
						{wrongAnswer ? (<img className="wrongAnswer" src={setOfQuestions[index].img} alt="miroljub"/>) : (
				<article>
					{index === setOfQuestions.length-1 ? (
				<div className="">
					<h1>CONGRATULATIONS!!!!</h1>
					<img className="wrongAnswer" src={image} alt="#"/>
				</div>) : 
				(
				<main className="quiz-question">
					<header className="quiz-header">
						<h1>Question {index +1}/{setOfQuestions.length-1}</h1>
					</header>
					<h2>{setOfQuestions[index].question}</h2>
					{setOfQuestions[index].answers.map((answer,index) => {
						return (
							<>
								<button key={index} onClick={handleClickAnswer} className="quiz-button">{answer}</button>
							</>
						)
					})}
				</main>
				)}
				</article>)}				
				<footer className="quiz-footer">
					<h1>Prize money: {cash}$</h1> 
				<h1 className="znanje">Level: {znanje}</h1>	
					<button className="quiz-button" onClick={() => {
						setIndex(0)
						setCash(0)
						setWrongAnswer(false)
					}}>Tray again</button>
					<button onClick={handleCategory} className="quiz-button">Choose a category</button>
				</footer>
					</div>
				) : (
					<div className="choose-buttons">
						<h1>Choose a category: </h1>
						<button className="quiz-button" onClick={handleMiroljub}>Miroljub</button>
						<button className="quiz-button" onClick={handleGeography}>Geography</button>
						<button className="quiz-button" onClick={handleMovies}>Movies</button>
				</div>
				)}
				
				
				   
      </section>
    </>
  )
}
