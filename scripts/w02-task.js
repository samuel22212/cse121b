/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName ="Samuel Porter";
let currentYear =new Date().getFullYear();
let profilePicture = "cse121b/images/selfie.jpg";

/* Step 3 - Element Variables */
const nameElement = Document.getElementById('name');
const foodElement = Document.getElementById('food');
const yearElement = Document.querySelector('#year');
const imageElement = Document.getElementByTagName(picture);

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src',profilePicture);


/* Step 5 - Array */

const foods  = [];
foods.push("Sushi","Pizza","Burrito","Hamburger");
foodElement.setAttribute()

