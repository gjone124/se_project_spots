# Project 3: Spots

### Overview

- Intro
- Stage 1 (Sprint 3)
- Stage 2 (Sprint 4)
- Stage 3 (Sprint 5)
- Stage 4 (Sprint 6)
- Stage 5 (Sprint 9)
- Figma
- Images
- Tech Used
- Video Describing Project
- Deployment

**Intro**

Spots is an image sharing website. There is a user profile with an avatar and a grid of photographs with a short description. The website is currently complete.

This is the 4th project for the Triple Ten Software Engineering program. It's associated with Sprint 3, 4, 5, 6, and 9.

**Stage 1 (Sprint 3)**

For the 1st stage of the project in Sprint 3 (Adaptive Web Design and Working with Layouts), we were given an adaptive web design through figma.com ( [link to Stage 1 Figma](https://www.figma.com/file/BBNm2bC3lj8QQMHlnqRsga/Sprint-3-Project-%E2%80%94-Spots?type=design&node-id=2%3A60&mode=design&t=afgNFybdorZO6cQo-1) ) and we were told to replicate the web page from scratch using HTML and CSS.

This project is our first project to use responsive design where the screen changes as it gets smaller or bigger.

**Stage 2 (Sprint 4)**

For the 2nd stage of the project in Sprint 4 (Basic Javascript and Working with the DOM), we were given a 2nd design (which added onto the previous design) through figma.com ( [link to Stage 2 Figma](https://www.figma.com/design/GfXsvCPiLqITbrVOr7odwc/Sprint-4-Project%3A-Spots?node-id=0-1&t=tQN5JrnznqQ4Wa4c-0) ) and we were told to replicate it.

This stage involves creating a pop-up window with a submission form when the user clicks on the "Edit Profile" button. The cards were converted from being hardcoded in HTML to an array of objects using JavaScript. This JavaScript array of objects was then inserted into the HTML.

**Stage 3 (Sprint 5)**

For the 3rd stage of the project in Sprint 5 (JavaScript Program Logic and Methods), we were given a 3rd design (which added onto the previous design) through figma.com ( [link to Stage 3 Figma](https://www.figma.com/design/1qCS9RkiKiVquBhpOJqjZ0/Sprint-5-Project%3A-Spots?node-id=51-138&node-type=canvas&t=NJZoBcWTFx313b9i-0) ) and we were told to replicate it.

This stage involves:

(1)converting the array of objects using a "for loop" to an array of objects using a "forEach loop"

(2)creating a pop-up window with a submission form when the user clicks on the "New Post" button

(3)implementing the "Like" button for each card such that it toggles between being "liked" and "unliked" depending on whether or not the user has clicked on the like button and how many times the user has clicked on the like button

(4)creating a feature that allows for each card to be deleted

(5)creating a picture modal that for each card allows the image to expand to its full size & that allows its caption to expand to its full length

(6)creating a smooth modal opening & closing

**Stage 4 (Sprint 6)**

For the 4th stage of the project in Sprint 6 (Objects and Event Handling in JavaScript), we implemented user input validation to ensure that the user was only able to submit valid input. We were given a 4th design (which added onto the previous design) through figma.com ( [link to Stage 4 Figma](https://www.figma.com/design/jFtXsDr4XOyebKcgjyXN6W/Sprint-6-Project%3A-Spots?node-id=0-1&node-type=canvas&t=AqkMzv182siS3OdU-0) ) and we were told to replicate it.

**Stage 5 (Sprint 9)**

For the 5th stage of the project in Sprint 9 (Asynchronous JavaScript and Working with APIs), we implemented an API to allow the project to be accessed remotely from a server instead of locally on your device (which was the case as of Stage 4). This allows the project to have any changes that were implemented remotely to stay in place when you refresh the browser for the project. We were given a 5th design (which added onto the previous design) through figma.com ( [link to Stage 5 Figma](https://www.figma.com/design/mXGZ6wZ4QPKx5KjpHX9QCV/Sprint-9-Project%3A-Spots?node-id=0-1&t=q3sLidv5V6u8hM1F-0) ) and we were told to replicate it.

Some other additions for the 5th stage include:

(1)creating a delete modal to confirm that the user wants to delete a card

(2)creating an edit avatar modal to change the profile's avatar

(3)creating a submission event handler that displays "Saving.." (after you click on the Save Button) or "Deleting..." (after you click on the Delete Button) while the server is processing the request

**Figma**

- [Link to the project on Figma for Stage 1 (Sprint 3)](https://www.figma.com/file/BBNm2bC3lj8QQMHlnqRsga/Sprint-3-Project-%E2%80%94-Spots?type=design&node-id=2%3A60&mode=design&t=afgNFybdorZO6cQo-1)

- [Link to the project on Figma for Stage 2 (Sprint 4)](https://www.figma.com/design/GfXsvCPiLqITbrVOr7odwc/Sprint-4-Project%3A-Spots?node-id=0-1&t=tQN5JrnznqQ4Wa4c-0)

- [Link to the project on Figma for Stage 3 (Sprint 5)](https://www.figma.com/design/1qCS9RkiKiVquBhpOJqjZ0/Sprint-5-Project%3A-Spots?node-id=51-138&node-type=canvas&t=NJZoBcWTFx313b9i-0)

- [Link to the project on Figma for Stage 4 (Sprint 6)](https://www.figma.com/design/jFtXsDr4XOyebKcgjyXN6W/Sprint-6-Project%3A-Spots?node-id=0-1&node-type=canvas&t=AqkMzv182siS3OdU-0)

- [Link to the project on Figma for Stage 5 (Sprint 9)](https://www.figma.com/design/mXGZ6wZ4QPKx5KjpHX9QCV/Sprint-9-Project%3A-Spots?node-id=0-1&t=q3sLidv5V6u8hM1F-0)

**Images**

Here are two sets of screenshots of the project (at 2 different screen resolutions) (as of Stage 1):

1440 pixels width (large laptop version) (2 combined screenshots):

<div display="flex"><img align="center" alt="First Screenshot of Large Laptop Version" src="./src/images/laptop-screenshot-1.png" /></div>
<div display="flex"><img align="center" alt="Second Screenshot of Large Laptop Version" src="./src/images/laptop-screenshot-2.png" /></div>

320 pixels width (small mobile version) (2 combined screenshots):

<div display="flex"><img align="center" width="390px" alt="First Screenshot of Small Mobile Version" src="./src/images/mobile-screenshot-1.png" /></div>
<div display="flex"><img align="center" width="390px" alt="Second Screenshot of Small Mobile Version" src="./src/images/mobile-screenshot-2.png" /></div>

**Tech Used**

- HTML
- CSS
- JavaScript
- JSON
- Responsive Design
- BEM
- Grid
- Flexbox
- Arrays
- Loops
- Hover Elements
- Overflow
- Input Validation
- API

**Video Describing Project (as of Stage 1)**

https://www.loom.com/share/fc87072b3f2f472b9f1fb6020a2819cf?sid=b4de1fc1-f7f0-4407-95b4-a8810fe82c37

The text of this video can be found in the video-script.txt file provided.

**Deployment**

This webpage is deployed to GitHub Pages

-Deployment Link: https://gjone124.github.io/se_project_spots/
