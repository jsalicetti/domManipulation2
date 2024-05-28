const mainEl = document.querySelector("main");

console.log(mainEl);


// set the background color
mainEl.style.background = "var(--main-bg)";

// set the content of mainEl to an h1
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// center dom manipulation
mainEl.classList.add("flex-ctr");

// nav
const topMenuEl = document.getElementById("top-menu");

// adjust the height 
topMenuEl.style.height = "100%";

topMenuEl.style.background = "let(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

// Menu data structure

// adding menu buttons
const menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" },
  ];

  // iterate over the entire menuLinks array
  menuLinks.forEach((linkObj) => {
    console.log(linkObj);
  });

  // create an A element
  menuLinks.forEach((linkObj) => {
    //console.log(linkObj);
    const aEl = document.createElement("a");
  });


  menuLinks.forEach((linkObj) => {
    //console.log(linkObj);
    const aEl = document.createElement("a");
    aEl.setAttribute("href", linkObj.href);
  });

  menuLinks.forEach((linkObj) => {
    //console.log(linkObj);
    const aEl = document.createElement("a");
    aEl.setAttribute("href", linkObj.href);
    aEl.textContent = linkObj.text;
  });

  menuLinks.forEach((linkObj) => {
    //console.log(linkObj);
    const aEl = document.createElement("a");
    aEl.setAttribute("href", linkObj.href);
    aEl.textContent = linkObj.text;
    topMenuEl.append(aEl);
  });

  // subMenu 
  const subMenuEl = document.getElementById("sub-menu");


// adjust height subMenu
  subMenuEl.style.height = "100%";


  subMenuEl.style.background = "let(--sub-menu-bg)";

  