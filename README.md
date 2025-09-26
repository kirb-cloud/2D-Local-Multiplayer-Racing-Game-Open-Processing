# 2D-Local-Multiplayer-Racing-Game-Open-Processing
A JavaScript-based local multiplayer racing game where two players compete to be the first to cross the finish line. The game features interactive elements like traffic cars, environmental objects (trees, buildings, mountains), realistic physics for collisions and movement, and dynamic weather effects.  

## Features

- Two-player local multiplayer  
  - Player 1: W-A-S-D  
  - Player 2: Arrow Keys  
- Dynamic camera that zooms and follows both players  
- Procedurally generated world with trees, buildings, and mountains  
- Collision detection between cars and environmental objects  
- Day/night cycle with animated scenery  
- Snow weather effects  
- Start and end screens with themed visuals  

## How to Play

1. Open `index.html` in a web browser.  
2. Press **Enter** to start the game.  
3. Controls:  

**Player 1:**  
- W: Accelerate up  
- S: Accelerate down  
- A: Accelerate left  
- D: Accelerate right  

**Player 2:**  
- ↑: Accelerate up  
- ↓: Accelerate down  
- ←: Accelerate left  
- →: Accelerate right  

- Avoid obstacles and race to the finish line.  
- The first player to reach the end wins.

## Setup

1. Clone or download the project files.  
2. Ensure all JavaScript files are in the same directory.  
3. Open `index.html` in a modern web browser.  
4. An internet connection is required to load the **p5.js** libraries.  

## Game Mechanics

- **Physics:** Cars have acceleration, velocity, and friction.  
- **Collision:** Cars bounce off each other and environmental objects.  
- **Road vs. Off-road:** Different friction values affect movement.  
- **Scaling:** Objects scale based on their y-position for a pseudo-3D effect.  
- **Camera:** Automatically zooms and pans to keep both players in view.  

## File Descriptions

### Core Files
- **mySketch.js:** Main game loop, setup, and world management  
- **Car.js:** Car class with movement and collision logic  
- **keyboardControl.js:** Handles player input  

### Rendering Files
- **cars.js:** Draws car sprites  
- **buildings 1-2.js:** Building rendering functions  
- **mountains 1-4.js:** Mountain rendering variations  
- **tree 1-3.js:** Different tree types  
- **person.js:** Character animations  

### Object Classes
- **buildings.js:** Building object class  
- **mountains.js:** Mountain object class  
- **Plants (trees).js:** Plant object class  
- **SNOW.js:** Snow particle class  

### Scene Files
- **Scene01.js:** Start screen rendering  
- **moon.js:** Moon drawing function  

## Credits

- **p5.js** - JavaScript graphics library  
- **p5.collide2D** - Collision detection  

This game was developed as a creative coding project to demonstrate object-oriented programming, game physics, and interactive graphics.  

> **Note:** Best experienced on a desktop browser with a keyboard for two-player gameplay.
 


