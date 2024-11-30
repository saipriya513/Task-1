import tkinter as tk
from tkinter import messagebox

class TicTacToe:
    def __init__(self, root):
        self.root = root
        self.root.title("Tic-Tac-Toe")

        # Initialize the game board
        self.board = [None] * 9  # A list to represent the 3x3 board
        self.current_player = "X"  # "X" starts the game

        # Create the grid of buttons
        self.buttons = [tk.Button(self.root, text="", font=("Arial", 20), width=5, height=2, 
                                  command=lambda idx=i: self.make_move(idx)) for i in range(9)]

        # Place buttons in the grid
        for i, button in enumerate(self.buttons):
            row = i // 3
            col = i % 3
            button.grid(row=row, column=col)

        # Reset button to restart the game
        self.reset_button = tk.Button(self.root, text="Reset", font=("Arial", 14), command=self.reset_game)
        self.reset_button.grid(row=3, column=0, columnspan=3)

    def make_move(self, idx):
        """Handles a player's move."""
        if self.board[idx] is None:  # Check if the cell is empty
            self.board[idx] = self.current_player
            self.buttons[idx].config(text=self.current_player)  # Update the button's text

            if self.check_winner():
                messagebox.showinfo("Tic-Tac-Toe", f"Player {self.current_player} wins!")
                self.reset_game()
            elif None not in self.board:
                messagebox.showinfo("Tic-Tac-Toe", "It's a draw!")
                self.reset_game()
            else:
                # Switch players
                self.current_player = "O" if self.current_player == "X" else "X"

    def check_winner(self):
        """Check if the current player has won."""
        # Check rows, columns, and diagonals for a winning combination
        winning_combinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Columns
        ]