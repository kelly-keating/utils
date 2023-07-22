// Code taken from https://stackoverflow.com/questions/1880198/how-to-execute-shell-command-in-javascript

/*

Make sure you have babel:
npm i babel-cli -g

Install latest preset:
npm i babel-preset-latest

Run it via:
babel-node --presets latest speak.js

*/

import { exec } from 'child_process';

async function sh(cmd) {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

async function speak(voice, phrase) {
    await sh(`say -v "${voice}" ${phrase}`) 
}

async function bottles(voice, num) {
    await sh(`say -v "${voice}" ${num} bottles of beer on the wall, ${num} bottles of beer, take one down pass it around, ${num - 1} bottles of beer on the wall`) 
    if ( num > 1 ) {
        setTimeout(() => bottles(voice, num-1), 500)
    } else {
        await sh(`say -v "${voice}" aww`)
    }
}


// speak("Cellos", "Do do do do do do do do do do do do do do do do do do do do do do do do do do do do do do do do do do do do")
// speak("Moira", "These unicorns have balloons for horns but what good is a deflated horn?")
bottles("Cellos", 99)
