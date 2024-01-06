// dom_manipulation

function updateElementText(id) {
  return function (content) {
    return (document.getElementById("#" + id).innerHTML = content);
  };
}

// say we have an h1 tag with id="heading"
// we want to update its content

// we can get its heading once and uodate the content again and again
const updateHeading = updateElementText("heading");

updateHeading("Hello World");
updateHeading("Hello World Again"); // we can update the conetent based on any condition we do not need to initialise again anad again-->
