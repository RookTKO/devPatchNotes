import { Server as IOServer } from "socket.io";
import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "@/types/next";

// Minimal Socket.IO server handler
export default function handler(req: NextApiRequest, res: NextApiResponseServerIO) {
    if (!res.socket.server.io) {
        const io = new IOServer(res.socket.server);
        res.socket.server.io = io;
        // TODO: Add event listeners for game events
    }
    res.end();
}

// TODO: Add types/next.ts for NextApiResponseServerIO type
