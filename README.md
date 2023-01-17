<a name="readme-top"></a>

<!-- HEADER -->
<h1 align="center">Critter Companion</h1>

<h3 align="center">An Animal Crossing: New Horizon Companion App</h3>

<h4 align="center"><a href="https://critter-companion.vercel.app/"><strong>Deploy Link</strong></a> | <a href="https://github.com/tramtram1130/critter-companion"><strong>Explore The Docs »</strong></a></h4>

<p></p>

<!-- TABLE OF CONTENTS -->
<!-- <details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li>
        <a href="#features">Features</a>
        <ul>
            <li><a href="#reflections">Reflections</a>
        </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details> -->

## About The Project
Critter Companion provides a database of bugs from the world of Animal Crossing: New Horizon. You are able to filter these critters' availability by month, time, and hemisphere. You are also able to log the critters you have caught by adding it to your collection.
<br>
<p align="center">
    <img width="500" src="https://user-images.githubusercontent.com/110209726/212814494-4250229e-a41e-432c-9401-6e1294d2e40b.gif" alt="Hotel Manager preview gif">
    <img width="500" src="https://user-images.githubusercontent.com/110209726/212815183-7ad3b8a3-add7-41ab-b041-0d8c57645a6b.gif" alt="Hotel Manager preview image">
</p>

<br />
This solo project was assigned at the end of the third module of Turing's Front-End Engineering program, about 18 weeks into its students learning how to code. The details of this project are outlined in <a href="https://frontend.turing.edu/projects/module-3/showcase.html">this</a> project spec.

### Built With

![React][React-shield]
![JavaScript][JavaScript-shield]
![CSS][CSS-shield]
![HTML5][HTML-shield]
![Router][Router-shield]
![Cypress][Cypress-shield]
![NPM][NPM-shield]
![Vercel][Vercel-shield]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Setup
- Clone the repository to your local machine
- `cd` into the repository
- Make sure the necessary dependencies are installed on your local machine (`react-router-dom`, `micro-modal` `cypress`)
- Once the necessary dependencies are installed, `cd` back into the root of the repository, and run `npm start`
- Explore and enjoy!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Incorporate fish and deep sea critter data
- [ ] Set routing for individual critters

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

- Built with React and routed with React Router to create a multi-page user experience
- Implements GET network requests via fetch API to retrieve and display critter data
- Implements TDD with a robust Cypress suite featuring error-handling, happy- and sad- path testing
- Handles user errors and bad URL inputs
- App design is responsive to mobile device dimensions

### Reflections
<b>Wins:</b><br>
I've always had a skittish relationship with CSS and this project gave me the opportunity to get comfortable and bolster my CSS muscles. I am super proud of my app being responsive to mobile device dimensions! This is also my first time successfully implementing React hooks.
<p>
<b>Challenges:</b><br>
I wanted to give each pop up modal its own custom URL, but it was proven to be beyond my wheelhouse due to a combination of the time crunch and learning gap I hope to bridge for future apps.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Dana Truong | [LinkedIn](https://www.linkedin.com/in/dana-truong-a1b35a250/) | [GitHub](https://github.com/tramtram1130)<br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[React-shield]: https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge
[JavaScript-shield]: https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[CSS-shield]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[HTML-shield]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[Cypress-shield]: https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e
[NPM-shield]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[Vercel-shield]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
[Router-shield]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
