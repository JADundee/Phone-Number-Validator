const userInput = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");



const validNumber = input => {
  if (input === '') {
    alert("Please provide a phone number");
    return;
  }
  
const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );
  const p = document.createElement("p")
  p.className = "results-text"
p.appendChild(
  document.createTextNode( 
    `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
  )
)
result.appendChild(p)



};

check.addEventListener("click", () => {
  validNumber(userInput.value);
  userInput.value = "";
  })

userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    validNumber(userInput.value);
    userInput.value = '';
  }; 
});

clear.addEventListener("click", () => {
  result.textContent = ""
}) 