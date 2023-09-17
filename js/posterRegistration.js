import { specifications } from "./DataBase.js"
let params = new URLSearchParams(location.search);
let getBranch = params.get('branche');
let branche = getBranch.replaceAll('-', ' ');
let container = document.querySelector('.container');
function findBranche() {
  let brancheFinded = specifications.find(function (info) {
    return info.branche == branche;
  });
  showPage(brancheFinded)
}
findBranche();
function showPage(brancheFinded) {
  if (brancheFinded.isShowImage) {
    container.insertAdjacentHTML('beforeend', `
        <div class="top">
        <div><i>@@</i><span>ثبت آگهی</span></div>
        <p>re</p>
      </div>
      <div class="container">
        <a href="choesBranchForPosterRegistration.html">
          <div class="select-category">
            <span>دسته بندی</span><span class="branche">${branche}</span>
          </div>
        </a>
        <div class="guide"><span>راهنمای ثبت آگهی</span><i>></i></div>
        <div class="poster-image">
          <p class="title">عکس آگهی</p>
          <p class="description">
            افزودن عکس بازدید آگهی شما را تا سه برابر افزایش میدهد.
          </p>
          <div class="image-container">
            <div class="input-image">
              <input type="file" />
              <div class="text">
                <i>@</i>
                <p>افزودن عکس</p>
              </div>
            </div>
            <div class="input-image">
              <div class="text">
                <i>@</i>
                <p>عکس</p>
              </div>
            </div>
            <div class="input-image">
              <div class="text">
                <i>@</i>
                <p>عکس</p>
              </div>
            </div>
            <div class="input-image">
              <div class="text">
                <i>@</i>
                <p>عکس</p>
              </div>
            </div>
            <div class="input-image">
              <div class="text">
                <i>@</i>
                <p>عکس</p>
              </div>
            </div>
            <div class="input-image">
              <div class="text">
                <i>@</i>
                <p>عکس</p>
              </div>
            </div>
          </div>
          <div class="title-poster">
            <p class="title">عنوان آگهی</p>
            <p class="description">
              در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.
            </p>
            <input type="text" class="titleInput" />
          </div>
          <div class="description-poster">
            <p class="title">توضیحات آگهی</p>
            <p class="description">
              جزئیات و نکات جالب توجه آگهی خود را کامل و دقیق بنویسید. نوشتن شماره
              تماس در متن آگهی مجاز نیست. حتما به ساعات پاسخگویی خود اشاره کنید.
            </p>
            <textarea rows="2" class="descriptionInput"></textarea>
          </div>
          <button class="submit">بعدی</button>
        </div>
      </div>
      <menu-component></menu-component>
      `);
  } else {
    // container.insertAdjacentHTML('beforeend', ``);
  }
}

//!!!!!!! specification.html
// let titleAds = document.querySelector('.titleInput');
// let descriptionAds = document.querySelector('.descriptionInput');
// let submitBtn = document.querySelector('.submit');
// submitBtn.addEventListener('click', function () {
//     if (titleAds.value && descriptionAds.value) {
//         location.assign(`specification.html?branche=${getBranch}&title=${titleAds.value}&description=${descriptionAds.value}`);
//     } else {
//         console.log("لطفا فیلد را پر کنید");
//     }
// });
// descriptionAds.addEventListener('keydown', function (e) {
//     if (e.keyCode == 13) {
//         descriptionAds.rows++;
//     }else if(e.keyCode == 8){
//         descriptionAds.rows--;
//     }
// });