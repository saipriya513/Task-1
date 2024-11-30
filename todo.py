import tkinter as tk
import time

# Stopwatch class
class Stopwatch:
    def __init__(self):
        self.running = False
        self.start_time = 0
        self.elapsed_time = 0
        self.update_interval = 10  # Update every 10 milliseconds
        
    def start(self):
        if not self.running:
            self.start_time = time.time() - self.elapsed_time  # Continue from where it was paused
            self.running = True
            self.update()  # Start the update loop
    
    def pause(self):
        if self.running:
            self.elapsed_time = time.time() - self.start_time
            self.running = False
    
