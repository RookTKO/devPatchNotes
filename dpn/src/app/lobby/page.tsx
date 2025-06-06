import { Button } from "@/components/ui/Button";

export default function LobbyPage() {
    // TODO: Fetch and display players, chat, and lobby controls
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Lobby</h1>
            <Button>Start Game</Button>
            {/* TODO: Add player list, chat, etc */}
        </main>
    );
}
