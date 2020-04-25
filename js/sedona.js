var popup=document.querySelector(".search-form");
var link=document.querySelector(".search-hotel");
var arrival=popup.querySelector("[name=arrival]");

if (popup && link) {
  popup.classList.toggle("search-form-show");
link.addEventListener("click",function(event){event.preventDefault();                                     
popup.classList.toggle("search-form-show");arrival.focus();});
}
