import "./index.css";
import {
  enableValidation,
  resetValidation,
  disableButton,
} from "../scripts/validation.js";
import { settings } from "../utils/constants.js";
import Api from "../utils/Api.js";
import { setButtonText } from "../utils/helpers.js";

// //Instantiating Initial Cards
// // (for this project, we are fetching the initial cards from the API which only has 1 initial card
// // so we are not using this method to access the cards anymore)
// const initialCards = [
//   {
//     name: "Val Thorens",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
//   },

//   {
//     name: "Restaurant terrace",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
//   },

//   {
//     name: "An outdoor cafe",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
//   },

//   {
//     name: "A very long bridge, over the forest and through the trees",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
//   },

//   {
//     name: "Tunnel with morning light",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
//   },

//   {
//     name: "Mountain house",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
//   },

//   {
//     name: "Golden Gate Bridge",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
//   },
// ];

// Instantiating API
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "506cab27-cb57-4614-a4cb-84697f37c55f",
    "Content-Type": "application/json",
  },
});

// Profile Elements
const avatarModalButton = document.querySelector(".profile__avatar-button");
const avatarImageElement = document.querySelector(".profile__avatar-image");
const editProfileModalButton = document.querySelector(".profile__edit-button");
const addCardModalButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

// Modal Form Elements
const modals = document.querySelectorAll(".modal");

// Avatar Modal Form Elements
const avatarModal = document.querySelector("#avatar-modal");
const avatarFormElement = avatarModal.querySelector(".modal__form");
const avatarModalSubmitButton = avatarModal.querySelector(
  ".modal__submit-button"
);
const avatarModalLinkInput = avatarModal.querySelector("#profile-avatar-input");

// Edit Profile Modal Form Elements
const editProfileModal = document.querySelector("#edit-modal");
const editProfileFormElement = editProfileModal.querySelector(".modal__form");
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
const addCardModalCaptionInput = addCardModal.querySelector(
  "#add-card-caption-input"
);
const addCardModalLinkInput = addCardModal.querySelector(
  "#add-card-link-input"
);

// Delete Card Modal Form Elements
const deleteCardModal = document.querySelector("#delete-card-modal");
const deleteCardForm = deleteCardModal.querySelector(".modal__form");
const deleteCardFormCancelButton = document.querySelector(
  ".modal__submit-button_cancel"
);

// Preview Modal Form Elements
const previewModal = document.querySelector("#preview-modal");
const previewModalCaptionElement =
  previewModal.querySelector(".modal__caption");
const previewModalImageElement = previewModal.querySelector(".modal__image");

// Card Related Elements
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");
let selectedCard;
let selectedCardId;

// Function For Clicking On Like Button
function handleLike(event, id) {
  const isLiked = event.target.classList.contains("card__like-button_liked");
  api
    .changeLikeStatus(id, isLiked)
    .then(() => {
      event.target.classList.toggle("card__like-button_liked");
    })
    .catch((err) => {
      console.error(err);
    });
}

// Function To Open Modal
function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", handleClickingEscapeKey);
}

// Function To Close Modal
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", handleClickingEscapeKey);
}

// Function To Close Modal By Clicking On Close Button ("X" Icon) Within Pop Up Form
function handleClickingCloseButton() {
  const closeButtons = document.querySelectorAll(".modal__close-button");
  closeButtons.forEach((button) => {
    const modal = button.closest(".modal");
    button.addEventListener("click", () => closeModal(modal));
  });
}

// Function To Close Modal By Clicking Overlay
function handleClickingOverlay() {
  modals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });
}

// Function To Close Modal By Pressing Escape Key ("Esc")
function handleClickingEscapeKey(event) {
  if (event.key === "Escape") {
    const openModal = document.querySelector(".modal_is-opened");
    if (openModal) {
      closeModal(openModal);
    }
  }
}

// Function For Clicking On Delete Button (Trash Icon)
function handleDeleteCard(cardElement, cardId) {
  selectedCard = cardElement;
  selectedCardId = cardId;
  openModal(deleteCardModal);
}

// Function For Clicking On Confirmation Delete Button
function handleDeleteCardSubmit(event) {
  event.preventDefault();

  // changes text content to "Deleting..." (setButtonText is method from helpers.js)
  const deleteButton = event.submitter;
  setButtonText(deleteButton, true, "Delete", "Deleting...");
  api
    .deleteCard(selectedCardId)
    .then(() => {
      closeModal(deleteCardModal);
      selectedCard.remove();
    })
    .catch(console.error)

    // changes text content back to "Delete"
    .finally(() => setButtonText(deleteButton, false, "Delete", "Deleting..."));
}

// Function For Clicking On Card Image
function handleCardImageClick(data) {
  const { _id: id, link, name, isLiked } = data;
  previewModalImageElement.setAttribute("src", link);
  previewModalImageElement.setAttribute("alt", name + " image");
  previewModalCaptionElement.textContent = name;
  openModal(previewModal);
}

// Function To Handle Pressing Submit Button For Avatar Modal
function handleAvatarFormSubmit(event) {
  event.preventDefault();
  const saveButton = event.submitter;
  setButtonText(saveButton, true);
  api
    .editUserAvatar(avatarModalLinkInput.value)
    .then((data) => {
      avatarImageElement.src = data.avatar;
      closeModal(avatarModal);
    })
    .catch(console.error)
    .finally(() => setButtonText(saveButton, false));
}

// Function To Handle Pressing Submit Button For Edit Profile Modal
function handleEditProfileFormSubmit(event) {
  event.preventDefault();

  // changes text content to "Saving..." (setButtonText is method from helpers.js)
  const saveButton = event.submitter;
  setButtonText(saveButton, true);

  api
    .editUserInfo({
      name: editProfileModalNameInput.value,
      about: editProfileModalDescriptionInput.value,
    })
    .then((data) => {
      // use data arguments instead of input values
      profileName.textContent = data.name;
      profileDescription.textContent = data.about;
      closeModal(editProfileModal);
    })
    .catch(console.error)
    .finally(() =>
      // changes text content back to "Save"
      setButtonText(saveButton, false)
    );
}

// Function To Handle Pressing Submit Button For Add Card (New Post) Modal
function handleAddCardFormSubmit(event) {
  event.preventDefault();
  const saveButton = event.submitter;
  const { name, link } = event.target.elements;

  setButtonText(saveButton, true);
  api
    .addCard({
      name: name.value,
      link: link.value,
    })
    .then((data) => {
      const addCardElement = getCardElement(data);
      cardsList.prepend(addCardElement);
      closeModal(addCardModal);
      event.target.reset();
      disableButton(addCardModalSubmitButton, settings);
    })
    .catch((err) => console.error(err))
    .finally(() => setButtonText(saveButton, false));
}

// Avatar Modal Event Listeners
avatarModalButton.addEventListener("click", () => {
  openModal(avatarModal);
});
avatarFormElement.addEventListener("submit", handleAvatarFormSubmit);

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

editProfileFormElement.addEventListener("submit", handleEditProfileFormSubmit);

// Add Card Modal Event Listeners
addCardModalButton.addEventListener("click", () => {
  openModal(addCardModal);
});

addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

// Delete Card Modal Event Listeners (Confirmation Delete Button & Cancel Button)
deleteCardForm.addEventListener("submit", handleDeleteCardSubmit);
deleteCardFormCancelButton.addEventListener("click", () =>
  closeModal(deleteCardModal)
);

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

  // If Card Is Liked, Set Active Class On Card
  if (data.isLiked) {
    cardLikeButton.classList.add("card__like-button_liked");
  }

  // Like Button Event Listener
  cardLikeButton.addEventListener("click", (event) =>
    handleLike(event, data._id)
  );

  // Delete Button (Trash Icon) Event Listener
  cardDeleteButton.addEventListener("click", () => {
    handleDeleteCard(cardElement, data._id);
  });

  // Card Image Event Listener
  cardImageElement.addEventListener("click", () => {
    handleCardImageClick(data);
  });

  return cardElement;
}

// Function To Display All Of The Cards From API Database
function getInitialData() {
  api
    .getAppInfo()
    .then(([cards, userInfo]) => {
      cards.forEach((cardData) => {
        const cardElement = getCardElement(cardData);
        cardsList.append(cardElement);
      });

      profileName.textContent = userInfo.name;
      profileDescription.textContent = userInfo.about;
      avatarImageElement.src = userInfo.avatar;
    })
    .catch(console.error);
}

enableValidation(settings);
handleClickingCloseButton();
handleClickingOverlay();
getInitialData();
