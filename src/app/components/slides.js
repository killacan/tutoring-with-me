'use client';

import {
    Carousel,
    initTE,
} from "tw-elements";

import { useEffect } from "react";


export default function Slides() {
    
    useEffect(() => {
        initTE({ Carousel });
    }, []);
    
    return (
        <div
            id="carouselExampleCaptions"
            className="relative w-4/5"
            data-te-carousel-init
            data-te-carousel-slide>
            {/* <!--Carousel indicators--> */}
            <div
                className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                data-te-carousel-indicators>
                <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="0"
                data-te-carousel-active
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true"
                aria-label="Slide 1"></button>
                <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="1"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 2"></button>
                <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="2"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3"></button>
            </div>

            {/* <!--Carousel items--> */}
            <div
                className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                {/* <!--First item--> */}
                <div
                className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-active
                data-te-carousel-item>
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                    className="block w-full"
                    alt="..." />
                    <div
                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">First slide label</h5>
                        <p>
                        Some representative placeholder content for the first slide.
                        </p>
                    </div>
                </div>
                {/* <!--Second item--> */}
                <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                style={{backfaceVisibility: 'hidden'}}>
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                    className="block w-full"
                    alt="..." />
                    <div
                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Second slide label</h5>
                        <p>
                        Some representative placeholder content for the second slide.
                        </p>
                    </div>
                </div>
                {/* <!--Third item--> */}
                <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item>
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
                    className="block w-full"
                    alt="..." />
                    <div
                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Third slide label</h5>
                        <p>
                        Some representative placeholder content for the third slide.
                        </p>
                    </div>
                </div>
            </div>

            {/* <!--Carousel controls - prev item--> */}
            <button
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide="prev">
                <span className="inline-block h-8 w-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                </span>
                <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Previous</span>
            </button>
            {/* <!--Carousel controls - next item--> */}
            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide="next">
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Next</span>
            </button>
        </div>
    )
}



// import React, { useState } from 'react';

// export default function Slides() {
//   const [slideIndex, setSlideIndex] = useState(1);
//   const [slideDirection, setSlideDirection] = useState('next');

//   function moveSlide(moveStep) {
//     setSlideDirection(moveStep > 0 ? 'next' : 'prev');
//     setSlideIndex((prevIndex) => {
//       const newIndex = prevIndex + moveStep;
//       if (newIndex > 3) {
//         return 1;
//       } else if (newIndex < 1) {
//         return 3;
//       } else {
//         return newIndex;
//       }
//     });
//   }

//   function currentSlide(n) {
//     setSlideIndex(n);
//   }

//   return (
//     <>
//       <div className="relative w-3/4 mx-auto">
//         <div
//           className={`slide relative transition-transform ${
//             slideDirection === 'prev' ? 'slide-prev' : 'slide-next'
//           }`}
//         >
//           <img
//             className={`w-full h-[300px] object-cover ${
//               slideIndex === 1 ? '' : 'hidden'
//             }`}
//             src="https://www.kindacode.com/wp-content/uploads/2022/07/flower-1.jpeg"
//             alt="Slide 1"
//           />
//           <div
//             className={`absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white ${
//               slideIndex === 1 ? '' : 'hidden'
//             }`}
//           >
//             Flower One Caption
//           </div>
//         </div>

//         <div
//           className={`slide relative transition-transform ${
//             slideDirection === 'prev' ? 'slide-prev' : 'slide-next'
//           }`}
//         >
//           <img
//             className={`w-full h-[300px] object-cover ${
//               slideIndex === 2 ? '' : 'hidden'
//             }`}
//             src="https://www.kindacode.com/wp-content/uploads/2022/07/flower-2.jpeg"
//             alt="Slide 2"
//           />
//           <div
//             className={`absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white ${
//               slideIndex === 2 ? '' : 'hidden'
//             }`}
//           >
//             Flower Two Caption
//           </div>
//         </div>

//         <div
//           className={`slide relative transition-transform ${
//             slideDirection === 'prev' ? 'slide-prev' : 'slide-next'
//           }`}
//         >
//           <img
//             className={`w-full h-[300px] object-cover ${
//               slideIndex === 3 ? '' : 'hidden'
//             }`}
//             src="https://www.kindacode.com/wp-content/uploads/2022/07/flower-3.jpeg"
//             alt="Slide 3"
//           />
//           <div
//             className={`absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white ${
//               slideIndex === 3 ? '' : 'hidden'
//             }`}
//           >
//             Flower Three Caption
//           </div>
//         </div>

//         <a
//           className="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
//           onClick={() => moveSlide(-1)}
//         >
//           ❮
//         </a>

//         <a
//           className="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
//           onClick={() => moveSlide(1)}
//         >
//           ❯
//         </a>
//       </div>
//       <br />

//       <div className="flex justify-center items-center space-x-5">
//         <div
//           className={`dot w-4 h-4 rounded-full cursor-pointer ${
//             slideIndex === 1 ? 'bg-yellow-500' : 'bg-green-600'
//           }`}
//           onClick={() => currentSlide(1)}
//         ></div>
//         <div
//           className={`dot w-4 h-4 rounded-full cursor-pointer ${
//             slideIndex === 2 ? 'bg-yellow-500' : 'bg-green-600'
//           }`}
//           onClick={() => currentSlide(2)}
//         ></div>
//         <div
//           className={`dot w-4 h-4 rounded-full cursor-pointer ${
//             slideIndex === 3 ? 'bg-yellow-500' : 'bg-green-600'
//           }`}
//           onClick={() => currentSlide(3)}
//         ></div>
//       </div>
//     </>
//   );
// }

