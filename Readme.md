## Tools You Need
Windows:
- [git](https://git-scm.com/download/win)
- [nodejs](https://nodejs.org/en/) (LTS version)
- [visual studio code](https://code.visualstudio.com/)

Mac:
- [homebrew](https://brew.sh/) (pacakge manager that we use at hexagon)
- Run in a terminal: `brew install git node visual-studio-code`

## Cloning This Repository
1) Run the following command in your development directory:  
`git clone https://github.com/HexagonITS/programming-challenges.git`
2) Open the project in vs-code, then open the integrated terminal by pressing:  
`ctrl`+`~` (windows) `cmd`+`~` (mac).  
3) Run `npm install` to install dependencies required for the project.

## Writing Your Solutions
Open the programming-challenges folder in vscode.  
Write your solutions in the provided functions under the `challenges` directory.  
Do not touch any other files.

## Checking Your Solutions
1) Open the vs-code integrated terminal.
2) Run `npm test` followed by the challenge number. So for challenge one you would run `npm test 01`

# Challenges

### 1. Generate Password
**Problem:**  
At hexagon, we want to provide a way for clients to log into a portal to view status updates. To accomplish this, we have a phone service that clients can call to get a one-time-password from a automated system. This password needs to be both secure, and easy for the phone bot to read.

**Challenge:**  
Write a function that generates a random, secure password. The length of the password should be equal to the `length` parameter. The built in node [randomInt](https://nodejs.org/api/crypto.html#cryptorandomintmin-max-callback) from the `crypto` library has been provided to help get a secure, random number (do not use a callback).
The password should be able to contain the following characters:
- `a-z`
- `A-Z` (uppercase)
- `0-9`
- the characters (`+ # _ -`)

### 2. Read Password
**Problem:**  
After generating the password from challenge 1, we provided your output to the phone service and realized we have a major problem. The phone bot is reading lowercase and uppercase letters the same, and special characters aren't being read at all! To fix this, we are going to need to make a function that translates our password string into an array of the phonetic spelling for each character.

**Challenge:**  
Write a function that translates each character from the input string, into its phonetic equivalent. The function should throw an error if the array contains something you cant translate.  
Here are some examples:
- `F` => `capital f`
- `-` => `dash`
- `#` => `pound`
- `f` => `f`
