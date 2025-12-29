import React, { useEffect } from 'react';
import {Sun,Moon} from 'lucide-react';
import { useState } from 'react';
import {cn} from '../utils/utils';

const Themetoogle = () => {
    const [isdarkmode,setIsdarkmode]=useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme === 'dark';
    });

  useEffect(()=>{
      const Storedtheme=localStorage.getItem('theme');
      if(Storedtheme==='dark'){
          document.documentElement.classList.add('dark');
      }
      else{
        localStorage.setItem('theme','light');
        document.documentElement.classList.remove('dark');
      }
  },[]);
  const toggleTheme=()=>{
        if(isdarkmode){
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme','light');
          setIsdarkmode(false);
          
        }
        else{
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme','dark');
          setIsdarkmode(true);
        }

    }
  return (
    <button onClick={toggleTheme} className={cn('fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-200','focus:outline-none')}> {isdarkmode ? <Sun className='h-6 w-6 text-yellow-300' /> : <Moon className='h-6 w-6 text-blue-300'/>}</button>
  )
}

export default Themetoogle