'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
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
  const clickHandler = (x: number, y: number) => {
    const newBoard = structuredClone(board);
    south(x, y, newBoard);
    north(x, y, newBoard);
    west(x, y, newBoard);
    east(x, y, newBoard);
    norea(x, y, newBoard);
    souea(x, y, newBoard);
    norwe(x, y, newBoard);
    sorwe(x, y, newBoard);

    // if (board[y + 1] === undefined) return;

    console.log(x, y);
  };

  const south = (x: number, y: number, newBoard = structuredClone(board)) => {
    if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor && board[y][x] === 0) {
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
    }
  };
  const north = (x: number, y: number, newBoard = structuredClone(board)) => {
    if (board[y - 1] !== undefined && board[y - 1][x] === 3 - turnColor && board[y][x] === 0) {
      if (board[y - 2] === undefined) {
        return;
      } else if (board[y - 2][x] === turnColor) {
        newBoard[y - 1][x] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (board[y - 2][x] === 3 - turnColor && board[y - 3][x] === turnColor) {
        newBoard[y - 1][x] = turnColor;
        newBoard[y - 2][x] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y - 2][x] &&
        board[y - 3][x] === 3 - turnColor &&
        board[y - 4][x] === turnColor
      ) {
        newBoard[y - 1][x] = turnColor;
        newBoard[y - 2][x] = turnColor;
        newBoard[y - 3][x] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y - 2][x] &&
        board[y - 3][x] &&
        board[y - 4][x] === 3 - turnColor &&
        board[y - 5][x] === turnColor
      ) {
        newBoard[y - 1][x] = turnColor;
        newBoard[y - 2][x] = turnColor;
        newBoard[y - 3][x] = turnColor;
        newBoard[y - 4][x] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y - 2][x] &&
        board[y - 3][x] &&
        board[y - 4][x] &&
        board[y - 5][x] === 3 - turnColor &&
        board[y - 6][x] === turnColor
      ) {
        newBoard[y - 1][x] = turnColor;
        newBoard[y - 2][x] = turnColor;
        newBoard[y - 3][x] = turnColor;
        newBoard[y - 4][x] = turnColor;
        newBoard[y - 5][x] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y - 2][x] &&
        board[y - 3][x] &&
        board[y - 4][x] &&
        board[y - 5][x] &&
        board[y - 6][x] === 3 - turnColor &&
        board[y - 7][x] === turnColor
      ) {
        newBoard[y - 1][x] = turnColor;
        newBoard[y - 2][x] = turnColor;
        newBoard[y - 3][x] = turnColor;
        newBoard[y - 4][x] = turnColor;
        newBoard[y - 5][x] = turnColor;
        newBoard[y - 6][x] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      }
    }
  };
  const west = (x: number, y: number, newBoard = structuredClone(board)) => {
    if (board[x - 1] !== undefined && board[y][x - 1] === 3 - turnColor && board[y][x] === 0) {
      if (board[x - 2] === undefined) {
        return;
      } else if (board[y][x - 2] === turnColor) {
        newBoard[y][x - 1] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (board[y][x - 2] === 3 - turnColor && board[y][x - 3] === turnColor) {
        newBoard[y][x - 1] = turnColor;
        newBoard[y][x - 2] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y][x - 2] &&
        board[y][x - 3] === 3 - turnColor &&
        board[y][x - 4] === turnColor
      ) {
        newBoard[y][x - 1] = turnColor;
        newBoard[y][x - 2] = turnColor;
        newBoard[y][x - 3] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y][x - 2] &&
        board[y][x - 3] &&
        board[y][x - 4] === 3 - turnColor &&
        board[y][x - 5] === turnColor
      ) {
        newBoard[y][x - 1] = turnColor;
        newBoard[y][x - 2] = turnColor;
        newBoard[y][x - 3] = turnColor;
        newBoard[y][x - 4] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y][x - 2] &&
        board[y][x - 3] &&
        board[y][x - 4] &&
        board[y][x - 5] === 3 - turnColor &&
        board[y][x - 6] === turnColor
      ) {
        newBoard[y][x - 1] = turnColor;
        newBoard[y][x - 2] = turnColor;
        newBoard[y][x - 3] = turnColor;
        newBoard[y][x - 4] = turnColor;
        newBoard[y][x - 5] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y][x - 2] &&
        board[y][x - 3] &&
        board[y][x - 4] &&
        board[y][x - 5] &&
        board[y][x - 6] === 3 - turnColor &&
        board[y][x - 7] === turnColor
      ) {
        newBoard[y][x - 1] = turnColor;
        newBoard[y][x - 2] = turnColor;
        newBoard[y][x - 3] = turnColor;
        newBoard[y][x - 4] = turnColor;
        newBoard[y][x - 5] = turnColor;
        newBoard[y][x - 6] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      }
    }
  };
  const east = (x: number, y: number, newBoard = structuredClone(board)) => {
    if (board[x + 1] !== undefined && board[y][x + 1] === 3 - turnColor && board[y][x] === 0) {
      if (board[x + 2] === undefined) {
        return;
      } else if (board[y][x + 2] === turnColor) {
        newBoard[y][x + 1] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (board[y][x + 2] === 3 - turnColor && board[y][x + 3] === turnColor) {
        newBoard[y][x + 1] = turnColor;
        newBoard[y][x + 2] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y][x + 2] &&
        board[y][x + 3] === 3 - turnColor &&
        board[y][x + 4] === turnColor
      ) {
        newBoard[y][x + 1] = turnColor;
        newBoard[y][x + 2] = turnColor;
        newBoard[y][x + 3] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y][x + 2] &&
        board[y][x + 3] &&
        board[y][x + 4] === 3 - turnColor &&
        board[y][x + 5] === turnColor
      ) {
        newBoard[y][x + 1] = turnColor;
        newBoard[y][x + 2] = turnColor;
        newBoard[y][x + 3] = turnColor;
        newBoard[y][x + 4] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y][x + 2] &&
        board[y][x + 3] &&
        board[y][x + 4] &&
        board[y][x + 5] === 3 - turnColor &&
        board[y][x + 6] === turnColor
      ) {
        newBoard[y][x + 1] = turnColor;
        newBoard[y][x + 2] = turnColor;
        newBoard[y][x + 3] = turnColor;
        newBoard[y][x + 4] = turnColor;
        newBoard[y][x + 5] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y][x + 2] &&
        board[y][x + 3] &&
        board[y][x + 4] &&
        board[y][x + 5] &&
        board[y][x + 6] === 3 - turnColor &&
        board[y][x + 7] === turnColor
      ) {
        newBoard[y][x + 1] = turnColor;
        newBoard[y][x + 2] = turnColor;
        newBoard[y][x + 3] = turnColor;
        newBoard[y][x + 4] = turnColor;
        newBoard[y][x + 5] = turnColor;
        newBoard[y][x + 6] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      }
    }
  };
  const norea = (x: number, y: number, newBoard = structuredClone(board)) => {
    if (
      board[y + 1] &&
      board[x - 1] !== undefined &&
      board[y + 1][x - 1] === 3 - turnColor &&
      board[y][x] === 0
    ) {
      if (board[y + 2] && board[x - 2] === undefined) {
        return;
      } else if (board[y + 2][x - 2] === turnColor) {
        newBoard[y + 1][x - 1] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (board[y + 2][x - 2] === 3 - turnColor && board[y + 3][x - 3] === turnColor) {
        newBoard[y + 1][x - 1] = turnColor;
        newBoard[y + 2][x - 2] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y + 2][x - 2] &&
        board[y + 3][x - 3] === 3 - turnColor &&
        board[y + 4][x - 4] === turnColor
      ) {
        newBoard[y + 1][x - 1] = turnColor;
        newBoard[y + 2][x - 2] = turnColor;
        newBoard[y + 3][x - 3] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y + 2][x - 2] &&
        board[y + 3][x - 3] &&
        board[y + 4][x - 4] === 3 - turnColor &&
        board[y + 5][x - 5] === turnColor
      ) {
        newBoard[y + 1][x - 1] = turnColor;
        newBoard[y + 2][x - 2] = turnColor;
        newBoard[y + 3][x - 3] = turnColor;
        newBoard[y + 4][x - 4] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y + 2][x - 2] &&
        board[y + 3][x - 3] &&
        board[y + 4][x - 4] &&
        board[y + 5][x - 5] === 3 - turnColor &&
        board[y + 6][x - 6] === turnColor
      ) {
        newBoard[y + 1][x - 1] = turnColor;
        newBoard[y + 2][x - 2] = turnColor;
        newBoard[y + 3][x - 3] = turnColor;
        newBoard[y + 4][x - 4] = turnColor;
        newBoard[y + 5][x - 5] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y + 2][x - 2] &&
        board[y + 3][x - 3] &&
        board[y + 4][x - 4] &&
        board[y + 5][x - 5] &&
        board[y + 6][x - 6] === 3 - turnColor &&
        board[y + 7][x - 7] === turnColor
      ) {
        newBoard[y + 1][x - 1] = turnColor;
        newBoard[y + 2][x - 2] = turnColor;
        newBoard[y + 3][x - 3] = turnColor;
        newBoard[y + 4][x - 4] = turnColor;
        newBoard[y + 5][x - 5] = turnColor;
        newBoard[y + 6][x - 6] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      }
    }
  };
  const souea = (x: number, y: number, newBoard = structuredClone(board)) => {
    if (
      board[y - 1] &&
      board[x - 1] !== undefined &&
      board[y - 1][x - 1] === 3 - turnColor &&
      board[y][x] === 0
    ) {
      if (board[y - 2] && board[x - 2] === undefined) {
        return;
      } else if (board[y - 2][x - 2] === turnColor) {
        newBoard[y - 1][x - 1] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (board[y - 2][x - 2] === 3 - turnColor && board[y - 3][x - 3] === turnColor) {
        newBoard[y - 1][x - 1] = turnColor;
        newBoard[y - 2][x - 2] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y - 2][x - 2] &&
        board[y - 3][x - 3] === 3 - turnColor &&
        board[y - 4][x - 4] === turnColor
      ) {
        newBoard[y - 1][x - 1] = turnColor;
        newBoard[y - 2][x - 2] = turnColor;
        newBoard[y - 3][x - 3] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y - 2][x - 2] &&
        board[y - 3][x - 3] &&
        board[y - 4][x - 4] === 3 - turnColor &&
        board[y - 5][x - 5] === turnColor
      ) {
        newBoard[y - 1][x - 1] = turnColor;
        newBoard[y - 2][x - 2] = turnColor;
        newBoard[y - 3][x - 3] = turnColor;
        newBoard[y - 4][x - 4] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y - 2][x - 2] &&
        board[y - 3][x - 3] &&
        board[y - 4][x - 4] &&
        board[y - 5][x - 5] === 3 - turnColor &&
        board[y - 6][x - 6] === turnColor
      ) {
        newBoard[y - 1][x - 1] = turnColor;
        newBoard[y - 2][x - 2] = turnColor;
        newBoard[y - 3][x - 3] = turnColor;
        newBoard[y - 4][x - 4] = turnColor;
        newBoard[y - 5][x - 5] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y - 2][x - 2] &&
        board[y - 3][x - 3] &&
        board[y - 4][x - 4] &&
        board[y - 5][x - 5] &&
        board[y - 6][x - 6] === 3 - turnColor &&
        board[y - 7][x - 7] === turnColor
      ) {
        newBoard[y - 1][x - 1] = turnColor;
        newBoard[y - 2][x - 2] = turnColor;
        newBoard[y - 3][x - 3] = turnColor;
        newBoard[y - 4][x - 4] = turnColor;
        newBoard[y - 5][x - 5] = turnColor;
        newBoard[y - 6][x - 6] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      }
    }
  };
  const norwe = (x: number, y: number, newBoard = structuredClone(board)) => {
    if (
      board[y + 1] &&
      board[x + 1] !== undefined &&
      board[y + 1][x + 1] === 3 - turnColor &&
      board[y][x] === 0
    ) {
      if (board[y + 2] && board[x + 2] === undefined) {
        return;
      } else if (board[y + 2][x + 2] === turnColor) {
        newBoard[y + 1][x + 1] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (board[y + 2][x + 2] === 3 - turnColor && board[y + 3][x + 3] === turnColor) {
        newBoard[y + 1][x + 1] = turnColor;
        newBoard[y + 2][x + 2] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y + 2][x + 2] &&
        board[y + 3][x + 3] === 3 - turnColor &&
        board[y + 4][x + 4] === turnColor
      ) {
        newBoard[y + 1][x + 1] = turnColor;
        newBoard[y + 2][x + 2] = turnColor;
        newBoard[y + 3][x + 3] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y + 2][x + 2] &&
        board[y + 3][x + 3] &&
        board[y + 4][x + 4] === 3 - turnColor &&
        board[y + 5][x + 5] === turnColor
      ) {
        newBoard[y + 1][x + 1] = turnColor;
        newBoard[y + 2][x + 2] = turnColor;
        newBoard[y + 3][x + 3] = turnColor;
        newBoard[y + 4][x + 4] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y + 2][x + 2] &&
        board[y + 3][x + 3] &&
        board[y + 4][x + 4] &&
        board[y + 5][x + 5] === 3 - turnColor &&
        board[y + 6][x + 6] === turnColor
      ) {
        newBoard[y + 1][x + 1] = turnColor;
        newBoard[y + 2][x + 2] = turnColor;
        newBoard[y + 3][x + 3] = turnColor;
        newBoard[y + 4][x + 4] = turnColor;
        newBoard[y + 5][x + 5] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y + 2][x + 2] &&
        board[y + 3][x + 3] &&
        board[y + 4][x + 4] &&
        board[y + 5][x + 5] &&
        board[y + 6][x + 6] === 3 - turnColor &&
        board[y + 7][x + 7] === turnColor
      ) {
        newBoard[y + 1][x + 1] = turnColor;
        newBoard[y + 2][x + 2] = turnColor;
        newBoard[y + 3][x + 3] = turnColor;
        newBoard[y + 4][x + 4] = turnColor;
        newBoard[y + 5][x + 5] = turnColor;
        newBoard[y + 6][x + 6] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      }
    }
  };
  const sorwe = (x: number, y: number, newBoard = structuredClone(board)) => {
    if (
      board[y - 1] &&
      board[x + 1] !== undefined &&
      board[y - 1][x + 1] === 3 - turnColor &&
      board[y][x] === 0
    ) {
      if (board[y - 2] && board[x + 2] === undefined) {
        return;
      } else if (board[y - 2][x + 2] === turnColor) {
        newBoard[y - 1][x + 1] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (board[y - 2][x + 2] === 3 - turnColor && board[y - 3][x + 3] === turnColor) {
        newBoard[y - 1][x + 1] = turnColor;
        newBoard[y - 2][x + 2] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y - 2][x + 2] &&
        board[y - 3][x + 3] === 3 - turnColor &&
        board[y - 4][x + 4] === turnColor
      ) {
        newBoard[y - 1][x + 1] = turnColor;
        newBoard[y - 2][x + 2] = turnColor;
        newBoard[y - 3][x + 3] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y - 2][x + 2] &&
        board[y - 3][x + 3] &&
        board[y - 4][x + 4] === 3 - turnColor &&
        board[y - 5][x + 5] === turnColor
      ) {
        newBoard[y - 1][x + 1] = turnColor;
        newBoard[y - 2][x + 2] = turnColor;
        newBoard[y - 3][x + 3] = turnColor;
        newBoard[y - 4][x + 4] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y - 2][x + 2] &&
        board[y - 3][x + 3] &&
        board[y - 4][x + 4] &&
        board[y - 5][x + 5] === 3 - turnColor &&
        board[y - 6][x + 6] === turnColor
      ) {
        newBoard[y - 1][x + 1] = turnColor;
        newBoard[y - 2][x + 2] = turnColor;
        newBoard[y - 3][x + 3] = turnColor;
        newBoard[y - 4][x + 4] = turnColor;
        newBoard[y - 5][x + 5] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      } else if (
        board[y - 2][x + 2] &&
        board[y - 3][x + 3] &&
        board[y - 4][x + 4] &&
        board[y - 5][x + 5] &&
        board[y - 6][x + 6] === 3 - turnColor &&
        board[y - 7][x + 7] === turnColor
      ) {
        newBoard[y - 1][x + 1] = turnColor;
        newBoard[y - 2][x + 2] = turnColor;
        newBoard[y - 3][x + 3] = turnColor;
        newBoard[y - 4][x + 4] = turnColor;
        newBoard[y - 5][x + 5] = turnColor;
        newBoard[y - 6][x + 6] = turnColor;
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
        return;
      }
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
