"use client";

import { useState, FormEvent } from "react";


const GuessMyNumberPage = () => {
    const [gameStart, setGameStart] = useState(false);
    const [number, setNumber] = useState(Math.floor(Math.random() * 101));
    const [guess, setGuess] = useState("");
    const [guessedNumbers, setGuessedNumbers] = useState<number[]>([]);
    const [message, setMessage] = useState("");
    const [gameWon, setGameWon] = useState(false); // New state to control the game status

    const handleGuess = (guessValue: string) => {
        const numGuess = parseInt(guessValue, 10); // Convert the guessValue to a number

        if (numGuess === 0) { // Assuming 0 means "Correct Guess"
            setMessage("Congratulations! You guessed the correct number!  " + number);
            setGameWon(true);
            setNumber(Math.floor(Math.random() * 101));
            setGuessedNumbers([]);
        } else {
            // Update the message based on the guess being too low or too high
            const computerGuessMessage = numGuess === -1 ? "Your guess was too low." : "Your guess was too high.";
            setNumber(Math.floor(Math.random() * 101));
            setMessage(computerGuessMessage); // Set the message to inform the user if their guess was too low or too high
            setGuessedNumbers((prev) => [...prev, number]); // Store the number that was guessed
        }
    };


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center">
                <h1>Guess My Number</h1>
                <p>Like NumberGuess - but the other way</p><br/>
                <p>The game is simple. You have to guess my number between 0 and 100. If you guess the number correctly, you win!</p><br/>
                <button
                    className="border-2 rounded-2xl p-2 border-black"
                    type="submit"
                    onClick={() => setGameStart(!gameStart) }
                >
                    {`${!gameStart ? 'Start the Game': 'Stop the Game'}`}
                </button>

                    {!gameWon && gameStart && (
                        <div className="flex gap-4 justify-between items-center">
                            <label className="flex items-center">
                                I'm guessing: {number}
                            </label>
                            <div className="flex pt-4">
                                <button
                                    className="border-2 rounded-2xl p-2 border-black"
                                    onClick={() => handleGuess("-1")}
                                >
                                    Too Low
                                </button>
                            </div>
                            <div className="flex pt-4">
                                <button
                                    className="border-2 rounded-2xl p-2 border-black"
                                    onClick={() => handleGuess("0")}
                                >
                                    Correct!
                                </button>
                            </div>
                            <div className="flex pt-4">
                                <button
                                    className="border-2 rounded-2xl p-2 border-black"
                                    onClick={() => handleGuess("1")}
                                >
                                    Too High
                                </button>
                            </div>
                        </div>
                    )}
                <div className="pt-4">
                    {guessedNumbers.map((num, index) => (
                        <p key={index}>You guessed {num}</p>
                    ))}
                    {message && <p><strong>{message}</strong></p>}
                </div>
            </div>
        </main>
    );
}


export default GuessMyNumberPage