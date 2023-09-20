
'use client'
import ChessboardBox from './components/chessboardBox'
import React, { useState, useMemo } from 'react';
import { Chess } from 'chess.js'


export default function Home() {
  const game = React.useMemo(() => new Chess(), []);
  const [gamePosition, setGamePosition] = React.useState(game.fen());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ChessboardBox gamePosition = {gamePosition}/>
      <div>
        <button onClick={() => {
          game.reset();
          console.log(game.fen())
          console.log(gamePosition)
          setGamePosition(game.fen());
        }}
      >
        New game
      </button>
      
      <button
        onClick={() => {
          game.undo();
          game.undo();
          setGamePosition(game.fen());
        }}
      >
        Undo
      </button>
      </div>


    </main>
  )
}
