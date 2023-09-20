import { Chessboard } from "react-chessboard";

	      // <Chessboard position = {gamePosition} id="BasicBoard"/>



export default function ChessboardBox(gamePosition: any) {
	  return (

	    <div className="flex w-5/12">
	      <Chessboard position = {gamePosition.gamePosition} id="BasicBoard"/>     

	    </div>

	  )

}
