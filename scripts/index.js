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

// Modal Form Elements
const modals = document.querySelectorAll(".modal");

// Edit Profile Modal Form Elements
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

// Add Card (aka New Post) Modal Form Elements
const addCardModal = document.querySelector("#add-card-modal");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const addCardModalSubmitButton = addCardModal.querySelector(
  ".modal__submit-button"
);
const addCardModalCloseButton = addCardModal.querySelector(
  ".modal__close-button"
);
const addCardModalCaptionInput = addCardModal.querySelector(
  "#add-card-caption-input"
);
const addCardModalLinkInput = addCardModal.querySelector(
  "#add-card-link-input"
);

// Preview Modal Form Elements
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

// Function To Create A Card
function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardCaptionElement = cardElement.querySelector(".card__text");
  const cardImageElement = cardElement.querySelector(".card__image");

  cardCaptionElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;

  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

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

// Function To Open Modal
function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", handleEscapeKey);
}

// Function To Close Modal
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", handleEscapeKey);
}

// Function To Close Modal By Clicking Overlay
modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

// Function To Close Modal By Pressing Escape Key ("Esc")
function handleEscapeKey(event) {
  if (event.key === "Escape") {
    const openModal = document.querySelector(".modal_is-opened");
    if (openModal) {
      closeModal(openModal);
    }
  }
}

// Function To Handle Pressing Submit Button For Edit Profile Modal
function handleEditProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = editProfileModalNameInput.value;
  profileDescription.textContent = editProfileModalDescriptionInput.value;
  closeModal(editProfileModal);
}

// Function To Handle Pressing Submit Button For Add Card (New Post) Modal
function handleAddCardFormSubmit(event) {
  event.preventDefault();
  const inputValues = {
    name: addCardModalCaptionInput.value,
    link: addCardModalLinkInput.value,
  };

  const addCardElement = getCardElement(inputValues);
  cardsList.prepend(addCardElement);
  event.target.reset();
  disableButton(addCardModalSubmitButton, settings);
  closeModal(addCardModal);
}

// Edit Profile Modal Event Listeners
editProfileModalButton.addEventListener("click", () => {
  editProfileModalNameInput.value = profileName.textContent.trim();
  editProfileModalDescriptionInput.value =
    profileDescription.textContent.trim();
  resetValidation(
    editProfileModal,
    [editProfileModalNameInput, editProfileModalDescriptionInput],
    settings
  );
  openModal(editProfileModal);
});

editProfileModalCloseButton.addEventListener("click", () => {
  closeModal(editProfileModal);
});

editProfileFormElement.addEventListener("submit", handleEditProfileFormSubmit);

// Add Card Modal Event Listeners
addCardModalButton.addEventListener("click", () => {
  openModal(addCardModal);
});

addCardModalCloseButton.addEventListener("click", () => {
  closeModal(addCardModal);
});

addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

// Preview Modal Event Listener
previewModalCloseButton.addEventListener("click", () => {
  closeModal(previewModal);
});

// Function To Display All Of The Cards
initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardsList.append(cardElement);
});
