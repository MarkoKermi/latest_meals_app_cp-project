function DisplayCards(data) {
  document.querySelector(".cards").innerHTML = "";
  data.forEach((element) => {
    Cards.innerHTML += `
    
<div class="a-box">
<div class="img-container">
  <div class="img-inner">
    <div class="inner-skew">
      <img src="${element.strCategoryThumb}">
    </div>
  </div>
</div>
<div class="text-container">
  <h3>${element.strCategory}</h3>
  <div>
     ${element.strCategoryDescription.substr(0, 50)}...
</div>
<div class="interactions">
            <div></div>       <div><i id="${
              element.idCategory
            }" class="fa-solid fa-heart fa-lg"></i> <b id="${
      element.idCategory
    }" class="likes-counter"></b> </div>
            </div>
<button id="${
      element.idCategory
    }" class="button comment"><i class="fa-solid fa-comments"></i> Comments</button>
</div>
         
          `;
  });
}
