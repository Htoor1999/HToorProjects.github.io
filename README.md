Sportle – Sports Guessing Game

Sportle is a browser-based guessing game inspired by Wordle, designed for sports fans.  
Players must guess a mystery athlete using hints based on league, age, position, and country.

The game features popular athletes from NHL,  NBA,  and Premier League 

- A random mystery athlete is selected at the start of the game  
- You have 5 guesses to identify the player  
- Enter the last name of an athlete  
- After each guess, feedback is provided via a Color matching system:

Green: Attribute matches the mystery player
Red: Attribute does not match

Attributes include:
- League  
- Age  
- Position  
- Country  

If you guess correctly, You win  
If you run out of guesses, You lose and a new player is generated  

Additional game mode:
Selecting hard Mode
- Adds a random 30–40 second timer
- Forces faster decision-making
- Game ends when time runs out

Languages used

- HTML – structure  
- CSS – styling and layout  
- JavaScript – game logic and interactivity  

Features
-  Random player selection  
- 📊Dynamic guess table with color feedback  
- Timed “Hard Mode”  
- Player list modal (How-to-play + dataset preview)  
- Reset / regenerate game functionality  

---
To run project
in terminal
git clone https://github.com/Htoor1999/HToorProjects.github.io.git
cd HToorProjects.github.io

Then open index.html in your browser.

TODO:
1. Seperate the CSS and html code
2. Add dropdown/autocomplete - Allow full name or partial match
3. Switch from alerts to UI to show message on page of incorrect guesses
4. Deploy live
5. Move data of player list to JSON file and load from js
6. Daily challenge player
7. Save progress to local storage

Potential Improvements/updates
- Add autocomplete / dropdown for player guesses
- Expand list of players (NFL, MLB, more leagues)
- Implement mobile app
- Add animations and transitions
 - Deploy live version with custom domain
