"use client";

import { useState } from "react";
import { Container, Typography, Button } from "@mui/material";

export default function ReactionTimer() {
    const [gameState, setGameState] = useState("idle"); // 'idle', 'waiting', 'active', 'result'
    const [reactionTime, setReactionTime] = useState(null);
    const [startTime, setStartTime] = useState(0);
    let timeout = null;

    const startGame = () => {
        setGameState("waiting");
        setReactionTime(null);

        const randomDelay = Math.floor(Math.random() * 3000) + 2000; // Random delay between 2s - 5s

        timeout = setTimeout(() => {
            setGameState("active");
            setStartTime(Date.now());
        }, randomDelay);
    };

    const handleClick = () => {
        if (gameState === "waiting") {
            clearTimeout(timeout);
            setGameState("idle");
            alert("Too early! Wait for the button to appear.");
        } else if (gameState === "active") {
            const endTime = Date.now();
            setReactionTime(endTime - startTime);
            setGameState("result");
        }
    };

    return (
        <Container
            maxWidth="sm"
            style={{ textAlign: "center", marginTop: "50px" }}
        >
            <Typography variant="h4">Reaction Timer Game</Typography>

            {gameState === "idle" && (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={startGame}
                    style={{
                        marginTop: "20px",
                        fontSize: "20px",
                        padding: "15px 30px",
                    }}
                >
                    Start Game
                </Button>
            )}

            {gameState === "waiting" && (
                <Typography
                    variant="h6"
                    style={{ marginTop: "20px", color: "gray" }}
                >
                    Wait for the button to appear...
                </Typography>
            )}

            {gameState === "active" && (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                    style={{
                        marginTop: "20px",
                        fontSize: "20px",
                        padding: "15px 30px",
                    }}
                >
                    Click Me!
                </Button>
            )}

            {gameState === "result" && (
                <Typography variant="h6" style={{ marginTop: "20px" }}>
                    Your Reaction Time: <strong>{reactionTime}ms</strong>
                </Typography>
            )}
        </Container>
    );
}
