const accordionElem = document.getElementById("accordion");

function showPanel(panel){
  let expandedPanel = accordionElem.querySelector(".active");
  if (expandedPanel){
    expandedPanel.classList.remove("active");
  }else{
    panel.classList.add("active");
  }
}

let allPanelElems = accordionElem.querySelectorAll(".accordion__content");
for (let i = 0; i < allPanelElems.length; i++){
  allPanelElems[i].addEventListener("click", (event) => {
    showPanel(event.currentTarget);
  });
}
