'use client';

import { use, useCallback, useEffect, useState } from 'react';
import styles from './page.module.css';
import { useAmp } from 'next/amp';

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
] as const;
export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
  const [psm, setpsm] = useState<{ x: number; y: number }[]>([]);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const checker = useCallback((board:number[][]): {x:number;y:number}[] =>{
    const moves: { x: number; y: number }[] = [];

    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        if (board[y][x] !== 0) continue;

        const psp = directions.some(([dx, dy]) => {
          let cx = x + dx,
            cy = y + dy;
          let pps = false;

          while (cx >= 0 && cx < 8 && cy >= 0 && cy < 8 && board[cy][cx] !== 0) {
            if (board[cy][cx] === 3 - turnColor) {
              pps = true;
            } else if (board[cy][cx] === turnColor) {
              return pps;
            } else {
              break;
            }
            cx += dx;
            cy += dy;
          }
          return false;
        });
        if (psp) moves.push({ x, y });
      }
    }
    return moves;
  },[turnColor]);

  useEffect(() => {
    setpsm(checker(board));
  },[board,checker]);

  const clickHandler = (x: number, y: number) => {
    if (!psm.some((move) => move.x === x && move.y === y)) return;

    const newBoard = structuredClone(board);
    let ps = false;

    for (const [ dx, dy ] of directions) {
      const tt: { x: number; y: number }[] = [];
      let cx = x + dx,
        cy = y + dy;

      while (cx >= 0 && cx < 8 && cy >= 0 && cy < 8 && newBoard[cy][cx] === 3 - turnColor) {
        tt.push({ x: cx, y: cy });
        cx += dx;
        cy += dy;
      }
      if (tt.length && cx >= 0 && cx < 8 && cy >= 0 && cy < 8 && newBoard[cy][cx] === turnColor) {
        tt.forEach(({ x, y }) => (newBoard[y][x] = turnColor));
        ps = true;
      }
    }
    if (ps) {
      newBoard[y][x] = turnColor;
      setBoard(newBoard);
      setTurnColor(3 - turnColor);
    }

    console.log(x, y);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => {
            const ischecker = psm.some(move => move.x === x && move.y === y);
            return(
            <div className={styles.cell} key={` ${x}-${y} `} onClick={() => clickHandler(x, y)}>
              {ischecker && color === 0 && <div className={styles.valid} />}
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          );
        })
        )}
      </div>
    </div>
  );
}
