let pet = {
  hunger: 50,
  happiness: 50,
  energy: 50,
};

function updateAttributes() {
  document.getElementById("hunger-bar").style.width = pet.hunger + "%";
  document.getElementById("happiness-bar").style.width = pet.happiness + "%";
  document.getElementById("energy-bar").style.width = pet.energy + "%";
  updatePetImage();
}

function updatePetImage() {
  const petImg = document.getElementById("pet");
  if (pet.hunger < 30) {
    petImg.src = "Assets/hungry.png";
  } else if (pet.happiness < 30) {
    petImg.src = "Assets/sad.jpg";
  } else if (pet.energy < 30) {
    petImg.src = "Assets/tired.png";
  } else {
    petImg.src = "Assets/happy.jpg";
  }
}

function temporarilySetImage(imageSrc, callback) {
  const petImg = document.getElementById("pet");
  petImg.src = imageSrc;
  setTimeout(() => {
    callback();
    updatePetImage();
  }, 3000);
}

function feedPet() {
  pet.hunger = Math.min(pet.hunger + 20, 100);
  updateAttributes();
  temporarilySetImage("Assets/eating.jpg", () => {});
}

function playWithPet() {
  pet.happiness = Math.min(pet.happiness + 20, 100);
  pet.energy = Math.max(pet.energy - 10, 0);
  updateAttributes();
  temporarilySetImage("Assets/playing.png", () => {});
}

function putPetToSleep() {
  pet.energy = Math.min(pet.energy + 20, 100);
  updateAttributes();
  temporarilySetImage("Assets/sleeping.jpg", () => {});
}

function decreaseAttributesOverTime() {
  pet.hunger = Math.max(pet.hunger - 1, 0);
  pet.happiness = Math.max(pet.happiness - 1, 0);
  pet.energy = Math.max(pet.energy - 1, 0);
  updateAttributes();
  updatePetImage();
}

setInterval(decreaseAttributesOverTime, 3000);

window.onload = updateAttributes;
