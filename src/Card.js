import Ancestral from "./img/AncestralSpirit.png"
import Astel from "./img/Astel.jpg"
import Dragonkin from "./img/Dragonkin.png"
import EldenBeast from "./img/AldenBeast.jpg"
import FireGiant from "./img/FireGiant.jpg"
import Godrick from "./img/Godrick.jpg"
import MagmaWirm from "./img/MagmaWirm.png"
import Malenia from "./img/Malenia.jpg"
import Margit from "./img/Margit.jpg"
import Radagon from "./img/Radagon.jpg"
import Radahn from "./img/Radahn.jpg"
import Renala from "./img/Renala.jpg"

import { useState, useEffect } from "react";

const [valSequence, setValSequence] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
const [isRandomized, setIsRandomized] = useState(false);