import { create } from 'zustand';

interface GameState {
    player: string | null;
    room: string | null;
    status: 'lobby' | 'game' | 'finished';
    // TODO: Add more state fields (score, questions, etc)
    setPlayer: (player: string) => void;
    setRoom: (room: string) => void;
    setStatus: (status: GameState['status']) => void;
}

export const useGameStore = create<GameState>((set) => ({
    player: null,
    room: null,
    status: 'lobby',
    setPlayer: (player) => set({ player }),
    setRoom: (room) => set({ room }),
    setStatus: (status) => set({ status }),
    // TODO: Add more actions
}));
