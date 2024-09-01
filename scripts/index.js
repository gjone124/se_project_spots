const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },

  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },

  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },

  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },

  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },

  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },

  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
];

// Profile Elements
const editProfileModalButton = document.querySelector(".profile__edit-button");
const addCardModalButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

// Edit Profile Form Elements
const editProfileModal = document.querySelector("#edit-modal");
const editProfileFormElement = editProfileModal.querySelector(".modal__form");
const editProfileModalCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const editProfileModalNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileModalDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

// Add Card Form Elements
const addCardModal = document.querySelector("#add-card-modal");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const addCardModalCloseButton = addCardModal.querySelector(
  ".modal__close-button"
);
const addCardModalNameInput = addCardModal.querySelector(
  "#add-card-name-input"
);
const addCardModalLinkInput = addCardModal.querySelector(
  "#add-card-link-input"
);

// Preview Modal Elements
const previewModal = document.querySelector("#preview-modal");
const previewModalCaptionElement =
  previewModal.querySelector(".modal__caption");
const previewModalImageElement = previewModal.querySelector(".modal__image");
const previewModalCloseButton = previewModal.querySelector(
  ".modal__close-button"
);

// Card Related Elements
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function handleEditProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = editProfileModalNameInput.value;
  profileDescription.textContent = editProfileModalDescriptionInput.value;
  closeModal(editProfileModal);
}

function handleAddCardFormSubmit(event) {
  event.preventDefault();
  const inputValues = {
    name: addCardModalNameInput.value,
    link: addCardModalLinkInput.value,
  };
  const addCardElement = getCardElement(inputValues);
  cardsList.prepend(addCardElement);
  closeModal(addCardModal);
}

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameElement = cardElement.querySelector(".card__text");
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  //select the delete button
  //set the listener on the delete button
  //remove card from DOM using handler

  cardNameElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;

  // Like Button Event Listener
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_liked");
  });

  // Delete Button Event Listener
  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  // Card Image Event Listener
  cardImageElement.addEventListener("click", () => {
    openModal(previewModal);
    previewModalCaptionElement.textContent = data.name;
    previewModalImageElement.src = data.link;
    previewModalImageElement.alt = data.name;
  });

  return cardElement;
}

// Edit Profile Modal Event Listeners
editProfileModalButton.addEventListener("click", () => {
  editProfileModalNameInput.value = profileName.textContent.trim();
  editProfileModalDescriptionInput.value =
    profileDescription.textContent.trim();
  openModal(editProfileModal);
});

editProfileModalCloseButton.addEventListener("click", () => {
  closeModal(editProfileModal);
});

// Add Card Modal Event Listeners
addCardModalButton.addEventListener("click", () => {
  openModal(addCardModal);
});

addCardModalCloseButton.addEventListener("click", () => {
  closeModal(addCardModal);
});

// Preview Modal Event Listener
previewModalCloseButton.addEventListener("click", () => {
  closeModal(previewModal);
});

editProfileFormElement.addEventListener("submit", handleEditProfileFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardsList.append(cardElement);
});
