
'use client'
import ChessboardBox from './components/chessboardBox'
import FunctionButtons from './components/functionButtons'


import React, { useState, useMemo } from 'react';
import { Chess } from 'chess.js'


export default function Home() {
  const game = React.useMemo(() => new Chess(), []);
  const [gamePosition, setGamePosition] = React.useState(game.fen());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ChessboardBox gamePosition = {gamePosition}/>
      <FunctionButtons game = {game} gamePosition = {gamePosition} setGamePosition = {setGamePosition} />
    </main>
  )
}
