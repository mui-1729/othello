'use client';

import { useCallback, useEffect, useState } from 'react';
import styles from './page.module.css';

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
];

export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
  const [pass, setpass] = useState(0);
  const [psm, setpsm] = useState<{ x: number; y: number }[]>([]);
  const [GO, setGO] = useState(false);
  const [ms, setms] = useState('');
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

  const count = () => {
    const black = board.flat().filter((cell) => cell === 1).length;
    const white = board.flat().filter((cell) => cell === 2).length;
    return { black, white };
  };

  const { black, white } = count();

  const checker = useCallback(
    (board: number[][]): { x: number; y: number }[] => {
      const moves: { x: number; y: number }[] = [];

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
          if (psput) moves.push({ x, y });
        }
      }
      return moves;
    },
    [turnColor],
  );

  useEffect(() => {
    const moves = checker(board);
    setpsm(moves);

    if (moves.length === 0 && GO === false) {
      if (pass === 1) {
        const win = (() => {
          if (black > white) return '黒の勝ち';
          if (black < white) return '白の勝ち';
          else return '同点';
        })();
        setms(`ゲーム終了!!\n黒:${black} 白:${white}\n${win}`);
        setGO(true);
        return;
      } else {
        setpass(1);
        setms('置く場所がないからスキップするよ!');
        setTurnColor(3 - turnColor);
        return;
      }
    } else {
      setpass(0);
    }

    if (ms) {
      setTimeout(() => {
        alert(ms);
        setms('');
      }, 0);
    }
  }, [board, turnColor, pass, ms, GO, white, black, checker]);

  const clickHandler = (x: number, y: number) => {
    if (!psm.some((move) => move.x === x && move.y === y)) return;
    colorChange(x, y);
  };

  const colorChange = (
    x: number,
    y: number,
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
    if (ps) {
      newBoard[y][x] = turnColor;
      setBoard(newBoard);
      setTurnColor(3 - turnColor);
    }
    return { newBoard, ps };
  };

  return (
    <div className={styles.container}>
      <State black={black} white={white} turnColor={turnColor} />
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => {
            const ischecker = psm.some((move) => move.x === x && move.y === y);
            return (
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
          }),
        )}
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
