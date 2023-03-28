import Ancestral from "./img/AncestralSpirit.png"
import Astel from "./img/Astel.jpg"
import Dragonkin from "./img/Dragonkin.png"
import EldenBeast from "./img/EldenBeast.jpg"
import FireGiant from "./img/FireGiant.jpg"
import Godrick from "./img/Godrick.jpg"
import MagmaWirm from "./img/MagmaWirm.png"
import Malenia from "./img/Malenia.jpg"
import Margit from "./img/Margit.jpg"
import Radagon from "./img/Radagon.jpg"
import Radahn from "./img/Radahn.jpg"
import Renala from "./img/Renala.jpg"

import uniqid from 'uniqid'

import { useState, useEffect } from "react";


function Card(props) {

    const [valSequence, setValSequence] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

    const {score, setScore, bestScore, setBestScore} = props

    const [charName, setCharName] = useState([

        "Ancestral Spirit",
        "Astel",
        "Dragonkin",
        "Elden Beast",
        "Fire Giant",
        "Godrick",
        "Magma Wirm",
        "Malenia",
        "Margit",
        "Radagon",
        "Radahn",
        "Renala"

    ]);

    const [avatar, setAvatar] = useState([

        Ancestral,
        Astel,
        Dragonkin,
        EldenBeast,
        FireGiant,
        Godrick,
        MagmaWirm,
        Malenia,
        Margit,
        Radagon,
        Radahn,
        Renala

    ]);

    const [pickedChar, setPickedChar] = useState([

        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,

    ]);

    function scorePoint(e, num) {
      console.log(e.target)
      if(pickedChar[num] === false) {
        setScore(score +1)
        const updatedPickedCharArray = pickedChar.map((entry,i) => {
          if(i === num) {
            return entry = true
          } else {
            return entry
          }
          
        })
        setPickedChar(updatedPickedCharArray)
      }
      
      
      
      
        randomizeVal()

    }




    let recordSet = []

    const randomizeVal = () => {


    
    recordSet = []; // our random array that sets the order of the cards


    let valSequenceCopy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // dummy array to be updated with new values


    valSequenceCopy.map((e, id) => {
      let number = Math.floor(Math.random() * (12)); // we rng a number between 0 and 11
      while (recordSet.includes(number)) {
        number = Math.floor(Math.random() * (12));
      } //  if the number is already in the array, we rng another one until we find one out of the 12 that's not yet in the array

      valSequenceCopy[id] = number; // we save the index of valSequenceCopy array we are currently on, in variable "number"


      recordSet.push(valSequenceCopy[id]); // we push the value to recordSet array


      return number;
    });

    setValSequence(recordSet); // we update our display array with the new random array.
    
  };

  return valSequence.map((num) => {
    return (
      
          <div className="image">
            <img
              onMouseDown={(e) => {
                scorePoint(e, num)
              } }
              alt=""
              src={avatar[num]}
              id={charName[num]}
            ></img>
          </div>
      
    );
  });
};

export default Card
