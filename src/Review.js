import React from 'react';
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import Peoples from './ReviewsData'

const Review = () => {
    const [index, setIndex]= useState(0);
    const {name, job, image, text} = Peoples[index]
    console.log(Peoples);


    const checkNumber = (number) => {
        if (number > Peoples.length - 1) {
          return 0;
        }
        if (number < 0) {
          return Peoples.length - 1;
        }
        return number;
      };
      

      const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * Peoples.length);
        console.log("randomNumber==>", randomNumber);
        if (randomNumber === index) {
          randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
      };
      const nextPerson =()=>{
        setIndex((index)=>{
            let newIndex = index + 1;
            return checkNumber (newIndex)
        })
    
     }
     const prevPerson =()=>{
        setIndex((index)=>{
            let newIndex = index -1;
            return checkNumber (newIndex)
        })
     }
    

  return (
    <article className='review'>
    <div className='img-container'>
    <img src={image} alt={name} className='person-img' />
    <span className='quote-icon'>
      <FaQuoteRight />
    </span>
    </div>
    <h4 className='author'>{name}</h4>
  <p className='job'>{job}</p>
  <p className='info'>{text}</p>
  <div className='button-container'>
    <button className='prev-btn' 
    onClick={prevPerson}
    >
      <FaChevronLeft />
    </button>
    <button className='next-btn'
     onClick={nextPerson}
    >
      <FaChevronRight />
    </button>
  </div>
  <button className='random-btn' 
  onClick={randomPerson}
  >
    Random Review
  </button>
</article>
)
  
}

export default Review
