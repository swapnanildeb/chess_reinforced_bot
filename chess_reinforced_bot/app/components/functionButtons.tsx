import React, { FC } from 'react';


interface Props {
  game: any
  gamePosition: any
  setGamePosition: any
}

const FunctionButtons: React.FC<Props> = ({game, gamePosition, setGamePosition}) => {
	return (
		
		<div className="inline-flex">

		  <button 
		  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
		  onClick={() => {
		          game.reset();
		          console.log(game.fen())
		          console.log(gamePosition)
		          setGamePosition(game.fen());
		        }}
		   >
		    New game
		  </button>

		  <button 
		  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
		  onClick={() => {
	          game.undo();
	          game.undo();
	          setGamePosition(game.fen());
	        }}
	      >
		    Undo
		  </button>

		</div>

	  )
}

export default FunctionButtons