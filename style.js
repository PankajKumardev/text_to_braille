const brailleMap = {
    "A": "⠁", "B": "⠃", "C": "⠉", "D": "⠙", "E": "⠑", "F": "⠋",
    "G": "⠛", "H": "⠓", "I": "⠊", "J": "⠚", "K": "⠅", "L": "⠇",
    "M": "🇲", "N": "⠝", "O": "⠕", "P": "⠏", "Q": "⠟", "R": "⠗",
    "S": "⠎", "T": "⠞", "U": "ユー", "V": "⠧", "W": "ᚹ", "X": "⠭",
    "Y": "យ", "Z": "⠺"
  };
  const small = document.getElementById("small");
  const medium = document.getElementById("medium");
  const big = document.getElementById("Big");
  const braille = document.getElementById("brailleOutput");

  function convertToBraille() {
    const inputText = document.getElementById("inputText").value.toUpperCase();
    let brailleOutput = "";
    for (let char of inputText) {
        if (brailleMap[char]) {
          brailleOutput += brailleMap[char];
        } else {
          brailleOutput += " "; 
        }
      }
      document.getElementById("brailleOutput").textContent = brailleOutput;
      braille.style.fontSize = "50px";
      braille.style.width = "100px";
        braille.style.height = "300px";
    }  

    small.addEventListener("click",()=>{
        braille.style.fontSize = "50px";
        braille.style.width = "100px";
        braille.style.height = "200px";
    })

    medium.addEventListener("click",()=>{
        braille.style.fontSize = "100px";
        braille.style.width = "100px";
        braille.style.height = "200px";
    })

    big.addEventListener("click",()=>{
        braille.style.fontSize = "150px";
        braille.style.width = "100px";
        braille.style.height = "200px";
    })