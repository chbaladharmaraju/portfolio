import React, { useEffect, useState } from 'react';


const Starbackground = () => {

  const [stars, setStars] = useState([]);
  const[meteors,setMeteors]=useState([]);
  useEffect(()=>{
    generateStars();
    generatemeteors();

    const handleResize=()=>{
      generateStars();
    };
    window.addEventListener('resize',handleResize);
    return()=>{
      window.removeEventListener('resize',handleResize);
    };
  },[]);
  const generateStars=()=>{
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id:i,
        size:Math.random() * 3+1,
        x:Math.random()*100,
        y:Math.random()*100,
        opacity:Math.random()*0.5+0.5,
        animationDuration:Math.random()*4+2,
      });
    }
    setStars(newStars);
  };
  const generatemeteors=()=>{
    const numberOfmeteors= 4;
    const newmeteors=[];
    for(let i=0;i<numberOfmeteors;i++){
      newmeteors.push({
        id:i,
        size:Math.random() * 2+1,
        x:Math.random()*100,
        y:Math.random()*20,
        delay:Math.random()*1,
        animationDuration:Math.random()*4+2,
      });
    }
      setMeteors(newmeteors);
  };
        

  return (
    <div className="star-background fixed inset-0 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}%`,
            left: `${star.x}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
          
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor "
          style={{
            width: `${meteor.size * 25}px`,
            height: `${meteor.size*1}px`,
            top: `${meteor.y}%`,
            left: `${meteor.x}%`,
            animationDelay: meteor.delay,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />  
      ))}
    </div>
  );
};

export default Starbackground;
