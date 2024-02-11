import Link from "next/link";


const Home = () => {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center gap-11">
                <Link href="/guess-my-number">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Guess My Number
                    </button>
                </Link>
                <Link href="/guess-the-number">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Guess The Number
                    </button>
                </Link>
            </div>
        </main>
    );
}

export default Home;