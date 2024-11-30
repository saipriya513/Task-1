import tkinter as tk

# Function to update the display when a button is pressed
def button_click(value):
    current = display.get()
    display.delete(0, tk.END)  # Clear the current display
    display.insert(tk.END, current + value)

# Function to evaluate the expression when "=" is pressed
def calculate():
    try:
        result = eval(display.get())  # Evaluate the expression
        display.delete(0, tk.END)
        display.insert(tk.END, result)  # Show the result
    except Exception as e:
        display.delete(0, tk.END)
        display.insert(tk.END, "Error")

# Function to clear the display when "C" is pressed
def clear():
    display.delete(0, tk.END)

# Create the main window
root = tk.Tk()
root.title("Calculator")

# Create an entry widget for the display
display = tk.Entry(root, width=25, borderwidth=5, font=("Arial", 16), justify="right")
display.grid(row=0, column=0, columnspan=4)

# Create buttons for numbers and operations
buttons = [
    ('7', 1, 0), ('8', 1, 1), ('9', 1, 2), ('/', 1, 3),
    ('4', 2, 0), ('5', 2, 1), ('6', 2, 2), ('*', 2, 3),
    ('1', 3, 0), ('2', 3, 1), ('3', 3, 2), ('-', 3, 3),
    ('0', 4, 0), ('C', 4, 1), ('=', 4, 2), ('+', 4, 3)
]

# Add buttons to the window
for (text, row, col) in buttons:
    if text == "=":
        button = tk.Button(root, text=text, width=5, height=2, font=("Arial", 16), command=calculate)
    elif text == "C":
        button = tk.Button(root, text=text, width=5, height=2, font=("Arial", 16), command=clear)
    else:
        button = tk.Button(root, text=text, width=5, height=2, font=("Arial", 16), command=lambda value=text: button_click(value))
    button.grid(row=row, column=col)

# Run the Tkinter event loop
root.mainloop()
