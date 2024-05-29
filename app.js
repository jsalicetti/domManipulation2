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
const menulinks = [
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

// set the background color to the value stored (-----)
  subMenuEl.style.background = "let(--sub-menu-bg)";

// add flex-around to the subMenu element
  subMenuEl.classList.add("flex-around");

  // position to be set to absolute
  subMenuEl.style.position = "absolute";

// value of this element to be changed to 0
  subMenuEl.style.top = "0";

  // restructuring
  const menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ];

  const topMenuLinks = document.querySelectorAll("a");

// designating a 'click' event listener
topMenuEl.addEventListener("click", (event) => {});

topMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
  });


 // should return if the element clicked was not an "a" element 
  topMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName !== "A") {
      return;
    }
  });

  topMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName !== "A") {
      return;
    } else {
      console.log(event.target);
    }
  });


  // remove the "active" class using Element.classList.remove
  topMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName !== "A") {
      return;
    } else {
      //console.log(event.target);
      topMenuLinks.forEach((a) => a.classList.remove("active"));
    }
  });

  // toggle the active class on the clicked link
  topMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName !== "A") {
      return;
    } else {
      //console.log(event.target);
      topMenuLinks.forEach((a) => a.classList.remove("active"));
      event.target.classList.toggle("active");
    }
  });

  

