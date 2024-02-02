"use client";

import { useState, FormEvent } from "react";


const GuessTheNumberPage = () => {
    const [number, setNumber] = useState(Math.floor(Math.random() * 101));
    const [guess, setGuess] = useState("");
    const [guessedNumbers, setGuessedNumbers] = useState<number[]>([]);
    const [message, setMessage] = useState("");
    const [gameWon, setGameWon] = useState(false); // New state to control the game status

    const handleGuess = (e: FormEvent) => {
        e.preventDefault(); // Prevent the form from causing a page reload
        const numGuess = parseInt(guess);

        if (numGuess === number) {
            setMessage("Congratulations! You guessed the correct number! - " + number);
            setGameWon(true); // Update the game status
            setNumber(Math.floor(Math.random() * 101)); // Reset the number for the next game
            setGuessedNumbers([]); // Clear the guessed numbers for the next game
        } else {
            const msg = numGuess < number ? "Your guess is too low." : "Your guess is too high.";
            setMessage(msg);
            setGuessedNumbers((prev) => [...prev, numGuess]);
        }

        setGuess(""); // Reset guess input
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center">
                <h1>Guess the number</h1>
                <p>Welcome to the Guess the Number game!</p><br/>
                <p>The game is simple. You have to guess a number between 0 and 100. If you guess the number correctly, you win!</p><br/>
                {!gameWon && ( // Hide the form when the game is won
                    <form onSubmit={handleGuess}>
                        <label>
                            Try to guess it!
                        </label>
                        <div className="flex pt-4 gap-4">
                            <input
                                value={guess}
                                onChange={(e) => setGuess(e.target.value)}
                                type="number"
                                min="0"
                                max="100"
                            />
                            <button
                                className="border-2 rounded-2xl p-2 border-black"
                                type="submit"
                            >
                                Guess
                            </button>
                        </div>
                    </form>
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


export default GuessTheNumberPage