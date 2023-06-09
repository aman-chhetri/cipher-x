// Script File

function cipher(encode = true) {
  let output = "";
  let input = document.getElementById("input").value;
  let key = parseInt(document.getElementById("key").value); // Cipher Key Value
  if (isNaN(key)) document.getElementById("key").value = key = 3;
  if (!encode) key = -key;

  let chars = document.getElementById("charset").value;
  if (chars.length === 26) input = input.toUpperCase();
  if (document.getElementById("include-space").checked) chars += " ";

  input.split("").forEach(function (c) {
    let currPlace = chars.indexOf(c);
    if (currPlace === -1) output += c;
    else {
      let spot = (currPlace + key) % chars.length;
      if (spot < 0) spot += chars.length;
      output += chars.charAt(spot);
    }
  });

  document.getElementById("output").value = output;
}

function copy() {
  document.getElementById("output").select();
  document.execCommand("copy");
}

function apply() {
  document.getElementById("input").value = document.getElementById("output").value;
}
