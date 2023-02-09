import { modalWindow, Cards, ProductsCounter } from './display.js';

function DisplayCards(data) {
  document.querySelector('.cards').innerHTML = '';
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

function DisplayPopup(data, examples) {
  modalWindow.innerHTML = ` <div class="closeBtn">X</div>
  <div class="popup">
            <div class="popup-header" >
                
                    <div class="img-popcontainer">
                        <div class="img-pophold">
                            <div class="img">
                                <img src="${data.strCategoryThumb}">
                            </div>
                        </div>
                    </div>
                <div class="popup-title">${data.strCategory}</div>
            </div>

            <div class="popup-details">
              
                <div class="details">
                    <div class="images">
                    </div>
                    <hr />
                   <div class="details-text">
                   ${data.strCategoryDescription}
                    </div>
                </div>
                <div class="popup-comments">
                    <div class="container-comments">
                        <form class="form">
                    
                    <textarea id="comment" type="text" placeholder="Leave comment" required/></textarea>
                    <div class="form-header"><input required id="name" type="text" placeholder="Enter name" /> <button class="submit" id="${data.idCategory}">submit</button></div>
                        </form>
                        <div class="Comment-counter">
                        Total Comments(0)
                        </div>
                     <hr/>
                     
                    <div class="comment-list">
                        
                        <ul class="comments">
                                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
   </div>`;
}
const images = document.querySelector('.images');
examples.meals.slice(0, 3).forEach((element) => {
  const div = document.createElement('div');
  div.classList.add('single-product-example');
  div.innerHTML = ` 
    <div class="img-popholdpop">
        <div class="imgex">
            <img src=${element.strMealThumb}>
        </div>
    </div>
    <p class="title-example">${element.strMeal.substr(0, 15)}</p>
`;
  images.appendChild(div);
});

const closeBtn = document.querySelector('.closeBtn');

closeBtn.addEventListener('click', () => {
  modalWindow.style.display = 'none';
});

function sumComment(data) {
  const msg = `Total Comments(${data.length})`;
  return msg;
}

function CountComment(data) {
  const CommentCounter = document.querySelector('.Comment-counter');
  CommentCounter.innerHTML = sumComment(data);
}

function DisplayComments(data) {
  const commentSection = document.querySelector('.comments');
  let comment = '';
  data.forEach((item) => {
    comment += `<li class="single-comment">
      
      <b class="user-comment">${item.username}: ${item.comment}</b>
      </li>`;
  });
  commentSection.innerHTML = comment;
  CountComment(data);
}

function countProducts(data) {
  return data.length;
}

function Counter(data) {
  ProductsCounter.innerHTML = countProducts(data);
}

function CountLike(data) {
  const likeCount = document.querySelectorAll('.likes-counter');
  likeCount.forEach((item) => {
    data.forEach((likes) => {
      if (item.id === likes.item_id) {
        item.innerHTML = likes.likes;
      }
    });
  });
}

export {
  DisplayCards,
  DisplayPopup,
  Counter,
  DisplayComments,
  CountComment,
  CountLike,
  sumComment,
  countProducts,
};
