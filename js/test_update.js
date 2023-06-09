function openTab(event, tabId) {
  let tabContents = document.getElementsByClassName("tab__content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  let tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  document.getElementById(tabId).classList.add("active");
  event.currentTarget.classList.add("active");
}


function toggleAccordion(event, accordionId) {
  let accordionContent = document.getElementById(accordionId);
  let accordionHeader = event.currentTarget;

  let isAccordionOpen = accordionHeader.classList.contains("active");

  if (isAccordionOpen) {
    accordionHeader.classList.remove("active");
    accordionContent.classList.remove("active");
  } else {
    accordionHeader.classList.add("active");
    accordionContent.classList.add("active");
  }
}