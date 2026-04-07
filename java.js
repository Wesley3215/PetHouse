const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach(header => {
  header.addEventListener("click", () => {
    accordions.forEach(other => {
      if(other !== header){
        other.nextElementSibling.style.maxHeight = null;
      }
    });

    const content = header.nextElementSibling;
    if(content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});