const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelectorAll('a');


nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];

const parentElement = document.querySelector('nav');

const newNavItem1 = document.createElement('a1');
newNavItem1.textContent = 'Fancy';

const newNavItem2 = document.createElement('a2');
newNavItem2.textContent = 'Schmancy';

parentElement.prepend(newNavItem1);
parentElement.appendChild(newNavItem2);

newNavItem1.style.color = 'red';
newNavItem2.style.color = 'red';

nav.forEach (
  element => {
    element.style.color = 'green'
  });


const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent ["cta"]["img-src"];

const header = document.querySelector('h1');
header.textContent = siteContent ['cta']['h1'];


const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

const contentHeader = document.querySelectorAll('h4');
contentHeader[0].textContent = siteContent["main-content"]["features-h4"];
contentHeader[1].textContent = siteContent["main-content"]["about-h4"];
contentHeader[2].textContent = siteContent["main-content"]["services-h4"];
contentHeader[3].textContent = siteContent["main-content"]["product-h4"];
contentHeader[4].textContent = siteContent["main-content"]["vision-h4"];
contentHeader[5].textContent = siteContent['contact']['contact-h4'];

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

const mainP = document.querySelectorAll('.main-content p');
mainP[0].textContent = siteContent ["main-content"]["features-content"];
mainP[1].textContent = siteContent ["main-content"]["about-content"];
mainP[2].textContent = siteContent ["main-content"]["services-content"];
mainP[3].textContent = siteContent ["main-content"]["product-content"];
mainP[4].textContent = siteContent ["main-content"]["vision-content"];




const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent ['contact']['address'];
contactP[1].textContent = siteContent ['contact']['phone'];
contactP[2].textContent = siteContent ['contact']['email'];




const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];







