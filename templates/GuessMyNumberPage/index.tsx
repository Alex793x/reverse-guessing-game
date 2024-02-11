"use client";
import { useState } from "react";

const GuessMyNumberPage = () => {
    const [gameStart, setGameStart] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(100);
    const [currentGuess, setCurrentGuess] = useState(Math.floor((0 + 100) / 2));
    const [guessedNumbers, setGuessedNumbers] = useState<number[]>([]);
    const [message, setMessage] = useState("");

    const updateGuess = (newStart: number, newEnd: number) => {
        const nextGuess = Math.floor((newStart + newEnd) / 2);
        setCurrentGuess(nextGuess);
        setStart(newStart);
        setEnd(newEnd);
        setGuessedNumbers(prev => [...prev, currentGuess]);
    };

    const handleGuess = (guessType: string) => {
        if (guessType === "tooLow") {
            updateGuess(currentGuess + 1, end);
            setMessage("Okay, trying a higher number...");
        } else if (guessType === "tooHigh") {
            updateGuess(start, currentGuess - 1);
            setMessage("Alright, going lower...");
        } else {
            // Correct guess
            setGameWon(true);
            setMessage(`I guessed your number! It was ${currentGuess}.`);
            // Optionally reset or handle game completion here
        }
    };

    const resetGame = () => {
        setGameStart(false);
        setGameWon(false);
        setStart(0);
        setEnd(100);
        setCurrentGuess(Math.floor((0 + 100) / 2));
        setGuessedNumbers([]);
        setMessage("");
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h1 className="text-2xl font-bold text-center mb-4">Guess My Number</h1>
                <p className="text-gray-600 text-center mb-8">Think of a number between 0 and 100, and I'll try to guess it!</p>
                {!gameStart && (
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out" onClick={() => setGameStart(true)}>
                        Start the Game
                    </button>
                )}

                {gameStart && !gameWon && (
                    <div className="text-center">
                        <p className="mb-6">Is your number {currentGuess}?</p>
                        <div className="flex justify-center gap-4 mb-6">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out" onClick={() => handleGuess("tooLow")}>Too Low</button>
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out" onClick={() => handleGuess("correct")}>Correct!</button>
                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out" onClick={() => handleGuess("tooHigh")}>Too High</button>
                        </div>
                    </div>
                )}

                {gameWon && (
                    <div className="text-center">
                        <p className="mb-6">{message}</p>
                        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out" onClick={resetGame}>Play Again</button>
                    </div>
                )}

                <div className="pt-4">
                    {guessedNumbers.map((num, index) => (
                        <p key={index} className="text-gray-600">I guessed {num}</p>
                    ))}
                </div>
                {message && !gameWon && <p className="text-center font-semibold">{message}</p>}
            </div>
        </main>
    );
};

export default GuessMyNumberPage;
