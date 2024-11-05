function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

function editPost(postText, index) {
  document.getElementById("postTextarea").value = postText;
  
  const hiddenInput = document.createElement("input");
  hiddenInput.type = "hidden";
  hiddenInput.name = "postIndex";
  hiddenInput.value = index;

  const form = document.querySelector('form[action="/"]');
  form.appendChild(hiddenInput);

  const button = form.querySelector('button[type="submit"]');
  button.innerText = "Save Changes";
  button.setAttribute("formaction", "/update/" + index);
}

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('header nav');

  hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
  });
});
