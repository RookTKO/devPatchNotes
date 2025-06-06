import { Button } from "@/components/ui/Button";

export default function GamePage() {
    // TODO: Display quiz questions, answers, and game state
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Quiz Game</h1>
            <Button>Submit Answer</Button>
            {/* TODO: Add question, answer options, timer, etc */}
        </main>
    );
}
