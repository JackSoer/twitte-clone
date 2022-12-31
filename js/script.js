const preloaderDiv = document.querySelector('.preloader');

const sidebarTweetBtn = document.querySelector('.sidebar__tweet-btn-item');
const newTweetDiv = document.querySelector('.new-tweet');
const whatsHappeningDiv = document.querySelector('.whats-happening');
const closeBtn = document.querySelector('.whats-happening__close-btn');

const tweetTextAreas = document.querySelectorAll(
  '.whats-happening__input-item'
);
const tweetBtns = document.querySelectorAll('.whats-happening__tweet-btn-item');
const tweetBtnsDivs = document.querySelectorAll('.whats-happening__tweet-btn');
const extraBtnsDivs = document.querySelectorAll('.whats-happening__extra-btns');
const tweetTextAreaLoading = document.querySelector(
  '.whats-happening__loading::after'
);

const chooseAudienceOverlayDivs = document.querySelectorAll(
  '.choose-audience-overlay'
);
const everyoneBtnBoxs = document.querySelectorAll(
  '.whats-happening__everyone-btn-box'
);
const replyBtns = document.querySelectorAll('.whats-happening__reply-btn');
const everyoneBtns = document.querySelectorAll(
  '.whats-happening__everyone-btn'
);
const chooseAudienceDivs = document.querySelectorAll('.choose-audience');

const firstCheckImgs = document.querySelectorAll(
  '.choose-audience__check-img--everyone'
);
const secondCheckImgs = document.querySelectorAll(
  '.choose-audience__check-img--twitter-circle'
);
const everyoneSections = document.querySelectorAll(
  '.choose-audience__section--everyone'
);
const twitterCircleSections = document.querySelectorAll(
  '.choose-audience__section--twitter-circle'
);

const sidebarProfileInfoDiv = document.querySelector('.sidebar__profile-info');
const accountManagmentDiv = document.querySelector('.account-managment-box');
const accountManagmentOverlay = document.querySelector(
  '.account-managment-overlay'
);

const tweetAddBtns = document.querySelectorAll('.whats-happening__add-button');
const newTweetCloneDiv = document.querySelector('.whats-happening-flex');

window.onload = () => {
  hidePreloader();

  openNewTweetDiv();
  closeNewTweetDiv();
  fillingTextArea();

  addClassByClick(
    'choose-audience-overlay-visible',
    chooseAudienceOverlayDivs[0],
    everyoneBtns[0]
  );
  addClassByClick(
    'choose-audience-overlay-visible',
    chooseAudienceOverlayDivs[1],
    everyoneBtns[1]
  );
  closeModal(
    'choose-audience-overlay-visible',
    chooseAudienceDivs[0],
    chooseAudienceOverlayDivs[0]
  );
  closeModal(
    'choose-audience-overlay-visible',
    chooseAudienceDivs[1],
    chooseAudienceOverlayDivs[1]
  );
  toggleCheckImg();

  removeClassByClick('none-active', everyoneBtnBoxs[1], tweetTextAreas[1]);
  removeClassByClick('none-active', replyBtns[1], tweetTextAreas[1]);

  openAccountManagment();
  closeAccountManagment();
};

const hidePreloader = () => {
  preloaderDiv.classList.add('preloader--hidden');
};

const openNewTweetDiv = () => {
  sidebarTweetBtn.onclick = () => {
    newTweetDiv.classList.remove('new-tweet__block--hidden');

    document.body.classList.add('none-overflow');
  };
};

const closeNewTweetDiv = () => {
  newTweetDiv.addEventListener('mousedown', (e) => {
    const click = e.composedPath().includes(whatsHappeningDiv);

    if (!click) {
      newTweetDiv.classList.add('new-tweet__block--hidden');

      document.body.classList.remove('none-overflow');
    }
  });

  closeBtn.onclick = () => {
    newTweetDiv.classList.add('new-tweet__block--hidden');

    document.body.classList.remove('none-overflow');
  };
};

const fillingTextArea = () => {
  for (let i = 0; i < tweetTextAreas.length; i++) {
    tweetTextAreas[i].addEventListener('keyup', () => {
      if (tweetTextAreas[i].value.trim() != '') {
        tweetBtns[i].classList.add('whats-happening__tweet-btn-item--active');
        tweetBtnsDivs[i].classList.add('whats-happening__tweet-btn--active');
        extraBtnsDivs[i].classList.add('whats-happening__extra-btns--active');
      } else {
        tweetBtns[i].classList.remove(
          'whats-happening__tweet-btn-item--active'
        );
        tweetBtnsDivs[i].classList.remove('whats-happening__tweet-btn--active');
        extraBtnsDivs[i].classList.remove(
          'whats-happening__extra-btns--active'
        );
      }
    });
  }
};

const addClassByClick = (cssClass, classPlace, clickOnWhat) => {
  clickOnWhat.addEventListener('click', (e) => {
    e.stopPropagation();
    classPlace.classList.add(cssClass);
  });
};

const removeClassByClick = (cssClass, classPlace, clickOnWhat) => {
  clickOnWhat.addEventListener('click', (e) => {
    e.stopPropagation();
    classPlace.classList.remove(cssClass);
  });
};

const closeModal = (cssClass, modal, clickOnWhat) => {
  clickOnWhat.addEventListener('click', (e) => {
    const click = e.composedPath().includes(modal);

    if (!click) {
      clickOnWhat.classList.remove(cssClass);
    }
  });
};

const toggleCheckImg = () => {
  for (let i = 0; i < everyoneSections.length; i++) {
    everyoneSections[i].addEventListener('click', () => {
      checkImgHidden = firstCheckImgs[i].classList.contains(
        'choose-audience__check-img--hidden'
      );

      if (checkImgHidden) {
        firstCheckImgs[i].classList.remove(
          'choose-audience__check-img--hidden'
        );
        secondCheckImgs[i].classList.add('choose-audience__check-img--hidden');

        everyoneBtns[i].innerHTML = '';

        const everyoneBtnHTML = `Everyone
        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-10ptun7 r-13hce6t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz"><g><path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path></g></svg>`;

        everyoneBtns[i].innerHTML = everyoneBtnHTML;

        everyoneBtns[i].classList.remove('whats-happening__twitter-circle-btn');

        const everyoneReplyBtnHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-10ptun7 r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz"><g><path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z"></path></g></svg>Everyone can reply`;

        replyBtns[i].innerHTML = everyoneReplyBtnHTML;
      }
    });
  }

  for (let i = 0; i < twitterCircleSections.length; i++) {
    twitterCircleSections[i].addEventListener('click', () => {
      checkImgHidden = secondCheckImgs[i].classList.contains(
        'choose-audience__check-img--hidden'
      );

      if (checkImgHidden) {
        secondCheckImgs[i].classList.remove(
          'choose-audience__check-img--hidden'
        );
        firstCheckImgs[i].classList.add('choose-audience__check-img--hidden');

        everyoneBtns[i].innerHTML = '';

        const twitterCircleBtnHTML = `Twitter Circle
        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-10ptun7 r-13hce6t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz"><g><path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path></g></svg>`;

        everyoneBtns[i].innerHTML = twitterCircleBtnHTML;

        everyoneBtns[i].classList.add('whats-happening__twitter-circle-btn');

        const twitterCircleReplyBtnHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-10ptun7 r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz"><g><path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z"></path></g></svg>Only your Twitter Cirle can reply`;

        replyBtns[i].innerHTML = twitterCircleReplyBtnHTML;
      }
    });
  }
};

const openAccountManagment = () => {
  addClassByClick(
    'account-managment-overlay--visible',
    accountManagmentOverlay,
    sidebarProfileInfoDiv
  );
  addClassByClick(
    'account-managment-box--visible',
    accountManagmentDiv,
    sidebarProfileInfoDiv
  );
};

const closeAccountManagment = () => {
  removeClassByClick(
    'account-managment-box--visible',
    accountManagmentDiv,
    accountManagmentOverlay
  );
  removeClassByClick(
    'account-managment-overlay--visible',
    accountManagmentOverlay,
    accountManagmentOverlay
  );
};

const addExtraTweetDiv = () => {
  for (let i = 0; i < tweetAddBtns.length - 1; i++) {
    tweetAddBtns[i].addEventListener('click', () => {
      const newTweetCloneDivs = document.querySelectorAll(
        '.whats-happening-flex'
      );

      newTweetCloneDivs.forEach((newTweetCloneDiv) => {
        newTweetCloneDiv.classList.add('whats-happening-flex--notmain');
      });

      const everyoneBtnsNotMain = document.querySelectorAll(
        '.whats-happening__everyone-btn-box'
      );

      for (let i = 0; i < everyoneBtnsNotMain.length; i++) {
        everyoneBtnsNotMain[i].classList.add(
          'whats-happening__everyone-btn-box--none'
        );
      }

      everyoneBtnsNotMain[everyoneBtnsNotMain.length - 1].classList.remove(
        'whats-happening__everyone-btn-box--none'
      );

      const extraNewTweet = newTweetCloneDiv.cloneNode(true);
      extraNewTweet.classList.remove('whats-happening-flex--notmain');

      whatsHappeningDiv.appendChild(extraNewTweet);
    });
  }
};
