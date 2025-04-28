'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 0, 1, 2],
    [0, 0, 0, 0, 0, 2, 1, 2],
    [0, 0, 0, 0, 1, 2, 1, 2],
    [0, 0, 0, 2, 1, 2, 1, 2],
    [2, 0, 1, 2, 1, 2, 1, 2],
    [1, 2, 2, 1, 2, 1, 2, 1],
  ]);
  const clickHandler = (x: number, y: number) => {
    const newBoard = structuredClone(board);
    // if (board[y + 1] === undefined) return;

    console.log(x, y);

    if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor)
      if (board[y + 2] === undefined) {
        return;
      } else if (board[y + 2][x] === turnColor) {
        newBoard[y + 1][x] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (board[y + 2][x] === 3 - turnColor && board[y + 3][x] === turnColor) {
        newBoard[y + 1][x] = turnColor;
        newBoard[y + 2][x] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y + 2][x] &&
        board[y + 3][x] === 3 - turnColor &&
        board[y + 4][x] === turnColor
      ) {
        newBoard[y + 1][x] = turnColor;
        newBoard[y + 2][x] = turnColor;
        newBoard[y + 3][x] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y + 2][x] &&
        board[y + 3][x] &&
        board[y + 4][x] === 3 - turnColor &&
        board[y + 5][x] === turnColor
      ) {
        newBoard[y + 1][x] = turnColor;
        newBoard[y + 2][x] = turnColor;
        newBoard[y + 3][x] = turnColor;
        newBoard[y + 4][x] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y + 2][x] &&
        board[y + 3][x] &&
        board[y + 4][x] &&
        board[y + 5][x] === 3 - turnColor &&
        board[y + 6][x] === turnColor
      ) {
        newBoard[y + 1][x] = turnColor;
        newBoard[y + 2][x] = turnColor;
        newBoard[y + 3][x] = turnColor;
        newBoard[y + 4][x] = turnColor;
        newBoard[y + 5][x] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y + 2][x] &&
        board[y + 3][x] &&
        board[y + 4][x] &&
        board[y + 5][x] &&
        board[y + 6][x] === 3 - turnColor &&
        board[y + 7][x] === turnColor
      ) {
        newBoard[y + 1][x] = turnColor;
        newBoard[y + 2][x] = turnColor;
        newBoard[y + 3][x] = turnColor;
        newBoard[y + 4][x] = turnColor;
        newBoard[y + 5][x] = turnColor;
        newBoard[y + 6][x] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      }
    
  };
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={` ${x}-${y} `} onClick={() => clickHandler(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
