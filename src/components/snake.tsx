"use client";

import { KeyboardEvent } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Grid_size = 15;

type Point = {
    x: number;
    y: number;
};

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

export default function Snake() {
    const [snake, setSnake] = useState<Point[]>([
        { y: 4, x: 5 },
        { y: 4, x: 4 },
        { y: 4, x: 3 },
    ]);
    const [apple, setApple] = useState<Point>({ x: 0, y: 0 })
    const [direction, setDirection] = useState<Direction>("RIGHT")
    const [gameOver, setGameOver] = useState<boolean>(false)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [score, setScore] = useState<number>(0)
    //forhindre flere bevegelse i samme "tick"/framme for å ungå selvkollisjon
    const [canChangeDirection, setCanChangeDirection] = useState<boolean>(true);
    //tvinge autofokus ved start av spill
    const gridRef = useRef<HTMLDivElement>(null);



    const generateApple = () => {
        let x: number;
        let y: number;
        do {
            x = Math.floor(Math.random() * Grid_size)
            y = Math.floor(Math.random() * Grid_size)
        } while (snake.some((SnakePart) => SnakePart.x === x && SnakePart.y === y))
        setApple({ x, y })
    };

    const moveSnake = () => {
        if (!isPlaying || gameOver) return;
        setCanChangeDirection(true);
        const newSnake = [...snake]
        const snakeHead = { ...newSnake[0] };

        if (direction === "UP") {
            snakeHead.y -= 1
        }
        if (direction === "DOWN") {
            snakeHead.y += 1
        }

        if (direction === "RIGHT") {
            snakeHead.x += 1
        }

        if (direction === "LEFT") {
            snakeHead.x -= 1
        }

        if (
            snakeHead.x < 0 ||
            snakeHead.x >= Grid_size ||
            snakeHead.y < 0 ||
            snakeHead.y >= Grid_size ||
            newSnake.some((snakePart) => snakePart.x === snakeHead.x && snakePart.y == snakeHead.y)

        ) {
            setGameOver(true);
            setIsPlaying(false);
            return;
        }

        if (snakeHead.x === apple.x && snakeHead.y === apple.y) {
            generateApple();
            setScore(score + 1)
        } else {
            newSnake.pop();
        }

        newSnake.unshift(snakeHead);
        setSnake(newSnake);
    };
    //bevege slange
    useEffect(() => {
        let snakeMoveSpeed: NodeJS.Timeout | null = null;
        if (isPlaying && !gameOver) {
            snakeMoveSpeed = setInterval(moveSnake, 45);
        }
        return () => {
            if (snakeMoveSpeed) clearInterval(snakeMoveSpeed);
        };
    }, [isPlaying, gameOver, snake, direction]);

    //spawner eple på brett
    useEffect(() => {
        generateApple();
    }, []);

    //autofokuser spillet ved start av spill
    useEffect(() => {
        if (isPlaying && !gameOver && gridRef.current) {
            gridRef.current.focus();
        }
    }, [isPlaying, gameOver]);

    const KeyEvents = (event: KeyboardEvent<HTMLDivElement>) => {
        if (!isPlaying || gameOver) return;
        if (!canChangeDirection) return;

        if (event.key === "ArrowUp" && direction !== "DOWN") {
            setDirection("UP");
            setCanChangeDirection(false);
        }

        if (event.key === "ArrowDown" && direction !== "UP") {
            setDirection("DOWN");
            setCanChangeDirection(false);
        }

        if (event.key === "ArrowLeft" && direction !== "RIGHT") {
            setDirection("LEFT");
            setCanChangeDirection(false);
        }

        if (event.key === "ArrowRight" && direction !== "LEFT") {
            setDirection("RIGHT");
            setCanChangeDirection(false);
        }
    }

    const startGame = () => {
        setSnake([
            { y: 4, x: 6 },
            { y: 4, x: 5 },
            { y: 4, x: 4 },
        ]);
        setDirection("RIGHT");
        setGameOver(false);
        generateApple();
        setIsPlaying(true);
        setCanChangeDirection(true);
        setScore(0)
    };

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="p-1 bg-gradient-to-r from-emerald-500 via-purple-500 to-emerald-900 rounded">
                <div
                    ref={gridRef}
                    onKeyDown={KeyEvents}
                    tabIndex={0}
                    autoFocus
                    className="relative grid grid-cols-15 grid-rows-15 bg-[#121212] overflow-hidden box-border focus:outline-none ">
                    {gameOver && (
                        <div className=" absolute inset-0 flex flex-col justify-center items-center font-bold text-white overflow-hidden">
                            <p className="font-sans">Prøv igjen eller kontakt meg for tips og triks!</p>
                            <p className="font-sans text-3xl">Din poengsum: {score}</p>
                        </div>
                    )}

                    {Array.from({ length: Grid_size }).map((_, y) => (
                        <div className="flex" key={y}>
                            {Array.from({ length: Grid_size }).map((_, x) => (
                                <div key={x} className={`w-7 h-7  border-slate-700 border-opacity-25 border b
                    ${snake.some((snakePart) => snakePart.x === x && snakePart.y === y) && "bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-600 rounded-lg"}
                    ${apple.x === x && apple.y === y && "bg-gradient-to-r from-rose-500 via-rose-900 to-rose-500 rounded-full"}
                    `}> </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="pt-3">
                {!isPlaying && (
                    <button
                        onClick={startGame}
                        className="mb-4 bg-neutral-800 hover:bg-neutral-600 text-white px-12 py-2 rounded-full "
                    >
                        Spill
                    </button>
                )}
            </div>
        </div>
    );
}