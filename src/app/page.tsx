'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

type Position = { x: number; y: number };

const directions: [number, number][] = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
];

const count = (board: number[][]): { black: number; white: number } => {
  return {
    black: board.flat().filter((cell) => cell === 1).length,
    white: board.flat().filter((cell) => cell === 2).length,
  };
};

const checker = (board: number[][], turnColor: number): Position[] => {
  const move: Position[] = [];

  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if (board[y][x] !== 0) continue;

      const psput = directions.some(([dx, dy]) => {
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
      if (psput) move.push({ x, y });
    }
  }
  return move;
};

const colorChange = (
  board: number[][],
  x: number,
  y: number,
  turnColor: number,
): {
  ps: boolean;
  newBoard: number[][];
} => {
  const newBoard = structuredClone(board);
  let ps = false;

  for (const [dx, dy] of directions) {
    const psd: { x: number; y: number }[] = [];
    let cx = x + dx,
      cy = y + dy;

    while (cx >= 0 && cx < 8 && cy >= 0 && cy < 8 && newBoard[cy][cx] === 3 - turnColor) {
      psd.push({ x: cx, y: cy });
      cx += dx;
      cy += dy;
    }
    if (psd.length && cx >= 0 && cx < 8 && cy >= 0 && cy < 8 && newBoard[cy][cx] === turnColor) {
      psd.forEach(({ x, y }) => (newBoard[y][x] = turnColor));
      ps = true;
    }
  }
  if (ps) newBoard[y][x] = turnColor;

  return { newBoard, ps };
};

const checkGO = (board: number[][], pass: number): { GO: boolean; ms: string } => {
  const { black, white } = count(board);
  if (pass === 2) {
    const winner = black > white ? '黒の勝ち' : black < white ? '白の勝ち' : '同点';
    return {
      GO: true,
      ms: `ゲーム終了!!\n黒: ${black} 白: ${white}\n${winner}`,
    };
  }
  return { GO: false, ms: '' };
};

const skipTrun = (turnColor: number): number => 3 - turnColor;

const nextTurn = (
  board: number[][],
  turnColor: number,
  pass: number,
): {
  nextColor: number;
  nextPass: number;
  go: boolean;
  messeage: string;
} => {
  const mymove = checker(board, turnColor);
  const opmove = checker(board, 3 - turnColor);

  if (mymove.length === 0 && opmove.length === 0) {
    const { black, white } = count(board);
    const winner = black > white ? '黒の勝ち' : black < white ? '白の勝ち' : '同点';
    return {
      nextColor: turnColor,
      nextPass: 2,
      go: true,
      messeage: `ゲーム終了!!\n黒: ${black} 白: ${white}\n${winner}`,
    };
  }

  if (mymove.length === 0) {
    return {
      nextColor: skipTrun(turnColor),
      nextPass: pass + 1,
      go: false,
      messeage: '置く場所がないからスキップするね!!',
    };
  }

  return {
    nextColor: turnColor,
    nextPass: 0,
    go: false,
    messeage: '',
  };
};
export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
  const [pass, setpass] = useState(0);
  const [GO, setGO] = useState(false);
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

  const psm = checker(board, turnColor);
  const { black, white } = count(board);

  useEffect(() => {
    if (GO) return;
    if (psm.length === 0) {
      const result = nextTurn(board, turnColor, pass);
      if (result.messeage) {
        setTimeout(() => alert(result.messeage), 0);
      }
      setTurnColor(result.nextColor);
      setpass(result.nextPass);
      setGO(result.go);
    }
  }, [board, turnColor, pass, GO, psm]);

  const clickHandler = (x: number, y: number) => {
    if (GO) return;
    if (board[y][x] !== 0) return;
    if (!psm.some((pos) => pos.x === x && pos.y === y)) return;

    const { newBoard, ps } = colorChange(board, x, y, turnColor);
    if (!ps) return;

    setBoard(newBoard);
    setTurnColor(3 - turnColor);
    setpass(0);
  };

  return (
    <div className={styles.container}>
      <State black={black} white={white} turnColor={turnColor} />
      <div className={styles.board}>
        {board.map((row, y) => (
          <div key={y} className={styles.row}>
            {row.map((color, x) => {
              const isValid = color === 0 && psm.some((m) => m.x === x && m.y === y);
              return (
                <div
                  key={`${x}-${y}`}
                  className={styles.cell}
                  onClick={isValid ? () => clickHandler(x, y) : undefined}
                >
                  {isValid && <div className={styles.valid} />}
                  {color !== 0 && (
                    <div
                      className={styles.stone}
                      style={{
                        background: color === 1 ? '#000' : '#fff',
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
type StateProp = {
  turnColor: number;
  black: number;
  white: number;
};

const State: React.FC<StateProp> = ({ turnColor, black, white }) => {
  return (
    <div>
      <div className={styles.now}>現在の手番 : {turnColor === 1 ? '黒' : '白'}</div>
      <div className={styles.piece}>
        黒:{black} 白:{white}
      </div>
    </div>
  );
};
