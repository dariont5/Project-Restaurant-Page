import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import imgPathOne from '../assets/credit-J-Kenji-Lopez-Alt.webp'
import imgPathTwo from '../assets/Baked-Ham-V2-768x1024.jpg'
import imgPathThree from '../assets/RoastChicken_RECIPE_080420_37993.webp'

export default function () {
    // main container
    const container = document.querySelector('#content');

    const title = document.createElement('h1');
    title.classList.add('largest');
    title.textContent = 'Maven\'s Miraculous Meats';
    container.appendChild(title);

    const subtitle = document.createElement('h2');
    subtitle.classList.add('large');
    subtitle.textContent = 'Our Meat Leaves You Craven!';
    container.appendChild(subtitle);

    // swiper content
    const htmlSwiperContainer = document.createElement('div');
    htmlSwiperContainer.classList.add('swiper');
    container.appendChild(htmlSwiperContainer);

    const htmlSwiperWrapper = document.createElement('div');
    htmlSwiperWrapper.classList.add('swiper-wrapper');
    htmlSwiperContainer.appendChild(htmlSwiperWrapper);

    const htmlSwiperSlideOne = document.createElement('div');
    htmlSwiperSlideOne.classList.add('swiper-slide');
    htmlSwiperWrapper.appendChild(htmlSwiperSlideOne);
    const imgOne = document.createElement('img');
    imgOne.src = imgPathOne;
    htmlSwiperSlideOne.appendChild(imgOne);

    const htmlSwiperSlideTwo = document.createElement('div');
    htmlSwiperSlideTwo.classList.add('swiper-slide');
    htmlSwiperWrapper.appendChild(htmlSwiperSlideTwo);
    const imgTwo = document.createElement('img');
    imgTwo.src = imgPathTwo;
    htmlSwiperSlideTwo.appendChild(imgTwo);

    const htmlSwiperSlideThree = document.createElement('div');
    htmlSwiperSlideThree.classList.add('swiper-slide');
    htmlSwiperWrapper.appendChild(htmlSwiperSlideThree);

    const htmlSwiperPrev = document.createElement('div');
    htmlSwiperPrev.classList.add('swiper-button-prev');
    htmlSwiperContainer.appendChild(htmlSwiperPrev);
    const imgThree = document.createElement('img');
    imgThree.src = imgPathThree;
    htmlSwiperSlideThree.appendChild(imgThree);

    const htmlSwiperNext = document.createElement('div');
    htmlSwiperNext.classList.add('swiper-button-next');
    htmlSwiperContainer.appendChild(htmlSwiperNext);

    // Review section
    const reviewSection = document.createElement('div');
    reviewSection.classList.add('review-section');
    container.appendChild(reviewSection);

    const reviewTitle = document.createElement('span');
    reviewTitle.classList.add('large', 'bold');
    reviewTitle.textContent = 'Reviews'
    reviewSection.appendChild(reviewTitle);

    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review-container');
    reviewSection.appendChild(reviewContainer);

    const reviewOne = document.createElement('div');
    reviewOne.classList.add('review');
    reviewContainer.appendChild(reviewOne);

    const reviewOneTitle = document.createElement('span');
    reviewOneTitle.classList.add('medium');
    reviewOneTitle.textContent = 'Tommy';
    reviewOne.appendChild(reviewOneTitle);

    const reviewOneText = document.createElement('p');
    reviewOneText.classList.add('small');
    reviewOneText.textContent = 'Amazing Meat! I left craving more, but alas, my poor belly was full. Even the table next to us seemed to be having a good time. Maven\'s Miraculous Meats is the place you wanna be if you love meat.';
    reviewOne.appendChild(reviewOneText);

    const reviewTwo = document.createElement('div');
    reviewTwo.classList.add('review');
    reviewContainer.appendChild(reviewTwo);

    const reviewTwoTitle = document.createElement('span');
    reviewTwoTitle.classList.add('medium');
    reviewTwoTitle.textContent = 'Bryan';
    reviewTwo.appendChild(reviewTwoTitle);

    const reviewTwoText = document.createElement('p');
    reviewTwoText.classList.add('small');
    reviewTwoText.textContent = 'Pretty good, but not as good as Tyrone\'s Meat Up in my opinion. However, that might just be because I like harder meat. Maven\'s is too soft for my taste. Tyrone\'s portions are bigger, and the meat is much harder too. If you like soft meat, this place might be for you.';
    reviewTwo.appendChild(reviewTwoText);

    const reviewThree = document.createElement('div');
    reviewThree.classList.add('review');
    reviewContainer.appendChild(reviewThree);

    const reviewThreeTitle = document.createElement('span');
    reviewThreeTitle.classList.add('medium');
    reviewThreeTitle.textContent = 'Tyrone';
    reviewThree.appendChild(reviewThreeTitle);

    const reviewThreeText = document.createElement('p');
    reviewThreeText.classList.add('small');
    reviewThreeText.textContent = 'Try Tyrone\'s Meat Up instead!';
    reviewThree.appendChild(reviewThreeText);

    const reviewFour = document.createElement('div');
    reviewFour.classList.add('review');
    reviewContainer.appendChild(reviewFour);

    const reviewFourTitle = document.createElement('span');
    reviewFourTitle.classList.add('medium');
    reviewFourTitle.textContent = 'Tyrone\'s Bro';
    reviewFour.appendChild(reviewFourTitle);

    const reviewFourText = document.createElement('p');
    reviewFourText.classList.add('small');
    reviewFourText.textContent = 'Honestly, incredible meat. Bryan\'s review is a bit biased. He practically spends every day at Tyrone\'s Meat Up. Plus, he has notoriously bad taste. He likes meat rock hard. Everyone knows meat is better when its as soft as butter. Tyrone\'s review isn\'t even a real review. As a true meat enthusiast, Maven\'s is the best. It\'s butter smooth, just a bit pricey compared to Tyrone\'s.';
    reviewFour.appendChild(reviewFourText);

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
}

