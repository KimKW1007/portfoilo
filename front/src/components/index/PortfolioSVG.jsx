import React, { useEffect } from 'react'


export default function PortfolioSVG() {
  function welcomeTxtAnimation(){
    const mainGroup = document.querySelector(".svg-main");
    const mainPaths = mainGroup.querySelectorAll("path");
    mainPaths.forEach((path, idx)=>{
      const length = path.getTotalLength();
      path.style.setProperty("--length", length);
    })
  }
  useEffect(()=>{
    welcomeTxtAnimation();
  },[])
  return (
    <>
    <svg viewBox="0 0 345 55"  xmlns="http://www.w3.org/2000/svg">
      <g className='svg-main'>
        <path d="M1.76123 53V2.09092H18.1923C21.805 2.09092 24.8211 2.78694 27.2406 4.17899C29.6767 5.55446 31.5079 7.42709 32.7342 9.79689C33.9771 12.1667 34.5986 14.8348 34.5986 17.8011C34.5986 20.7675 33.9854 23.4439 32.7591 25.8303C31.5328 28.2001 29.7099 30.081 27.2904 31.473C24.8708 32.8485 21.863 33.5362 18.2669 33.5362H5.34078V29.3601H18.1426C20.8107 29.3601 23.0231 28.8629 24.7797 27.8686C26.5363 26.8577 27.8455 25.4823 28.7073 23.7422C29.5856 22.0021 30.0247 20.0218 30.0247 17.8011C30.0247 15.5805 29.5856 13.6002 28.7073 11.8601C27.8455 10.12 26.528 8.75285 24.7548 7.75853C22.9982 6.76421 20.7693 6.26705 18.068 6.26705H6.40967V53H1.76123Z" stroke="black" strokeWidth="2" mask="url(#path-1-outside-1_128_5)"/>
        <path d="M82.6977 27.5455C82.6977 32.8485 81.7531 37.4638 79.8639 41.3913C77.9747 45.3023 75.3729 48.335 72.0585 50.4894C68.7607 52.6271 64.9657 53.696 60.6736 53.696C56.3814 53.696 52.5782 52.6271 49.2638 50.4894C45.966 48.335 43.3725 45.3023 41.4832 41.3913C39.6106 37.4638 38.6743 32.8485 38.6743 27.5455C38.6743 22.2424 39.6106 17.6354 41.4832 13.7244C43.3725 9.79688 45.9743 6.76421 49.2886 4.62643C52.603 2.47207 56.398 1.3949 60.6736 1.3949C64.9657 1.3949 68.7607 2.47207 72.0585 4.62643C75.3729 6.76421 77.9747 9.79688 79.8639 13.7244C81.7531 17.6354 82.6977 22.2424 82.6977 27.5455ZM78.1736 27.5455C78.1736 22.9882 77.4113 19.0855 75.8867 15.8374C74.362 12.5727 72.2823 10.0786 69.6473 8.35512C67.0124 6.63164 64.0211 5.7699 60.6736 5.7699C57.3426 5.7699 54.3597 6.63164 51.7247 8.35512C49.0898 10.0786 47.0017 12.5644 45.4605 15.8125C43.9359 19.0606 43.1736 22.9716 43.1736 27.5455C43.1736 32.1028 43.9359 36.0055 45.4605 39.2536C46.9851 42.5017 49.0649 44.9957 51.6999 46.7358C54.3348 48.4593 57.326 49.321 60.6736 49.321C64.0211 49.321 67.0124 48.4593 69.6473 46.7358C72.2988 45.0123 74.3869 42.5265 75.9115 39.2784C77.4361 36.0137 78.1902 32.1028 78.1736 27.5455Z" stroke="black" strokeWidth="2" mask="url(#path-1-outside-1_128_5)"/>
        <path d="M89.3897 53V2.09092H105.821C109.434 2.09092 112.45 2.74551 114.869 4.0547C117.305 5.34731 119.136 7.14537 120.363 9.44887C121.606 11.7358 122.227 14.3625 122.227 17.3288C122.227 20.2952 121.606 22.9136 120.363 25.184C119.136 27.4543 117.314 29.2275 114.894 30.5036C112.475 31.7796 109.475 32.4176 105.895 32.4176H91.9004V28.1669H105.771C108.423 28.1669 110.627 27.7278 112.383 26.8494C114.157 25.9711 115.474 24.7199 116.336 23.0959C117.214 21.4718 117.653 19.5495 117.653 17.3288C117.653 15.1082 117.214 13.1693 116.336 11.5121C115.457 9.83832 114.132 8.5457 112.359 7.63424C110.602 6.72278 108.381 6.26705 105.697 6.26705H94.0382V53H89.3897ZM111.836 30.0313L124.365 53H118.996L106.591 30.0313H111.836Z" stroke="black" strokeWidth="2" mask="url(#path-1-outside-1_128_5)"/>
        <path d="M125.918 6.26705V2.09092H162.832V6.26705H146.699V53H142.05V6.26705H125.918Z" stroke="black" strokeWidth="2" mask="url(#path-1-outside-1_128_5)"/>
        <path d="M168.747 53V2.09092H198.203V6.26705H173.395V25.4325H195.892V29.6087H173.395V53H168.747Z" stroke="black" strokeWidth="2" mask="url(#path-1-outside-1_128_5)"/>
        <path d="M246.949 27.5455C246.949 32.8485 246.004 37.4638 244.115 41.3913C242.226 45.3023 239.624 48.335 236.31 50.4894C233.012 52.6271 229.217 53.696 224.925 53.696C220.633 53.696 216.829 52.6271 213.515 50.4894C210.217 48.335 207.624 45.3023 205.734 41.3913C203.862 37.4638 202.925 32.8485 202.925 27.5455C202.925 22.2424 203.862 17.6354 205.734 13.7244C207.624 9.79688 210.225 6.76421 213.54 4.62643C216.854 2.47207 220.649 1.3949 224.925 1.3949C229.217 1.3949 233.012 2.47207 236.31 4.62643C239.624 6.76421 242.226 9.79688 244.115 13.7244C246.004 17.6354 246.949 22.2424 246.949 27.5455ZM242.425 27.5455C242.425 22.9882 241.662 19.0855 240.138 15.8374C238.613 12.5727 236.533 10.0786 233.898 8.35512C231.264 6.63164 228.272 5.7699 224.925 5.7699C221.594 5.7699 218.611 6.63164 215.976 8.35512C213.341 10.0786 211.253 12.5644 209.712 15.8125C208.187 19.0606 207.425 22.9716 207.425 27.5455C207.425 32.1028 208.187 36.0055 209.712 39.2536C211.236 42.5017 213.316 44.9957 215.951 46.7358C218.586 48.4593 221.577 49.321 224.925 49.321C228.272 49.321 231.264 48.4593 233.898 46.7358C236.55 45.0123 238.638 42.5265 240.163 39.2784C241.687 36.0137 242.441 32.1028 242.425 27.5455Z" stroke="black" strokeWidth="2" mask="url(#path-1-outside-1_128_5)"/>
        <path d="M253.641 53V2.09092H258.289V48.8239H282.551V53H253.641Z" stroke="black" strokeWidth="2" mask="url(#path-1-outside-1_128_5)"/>
        <path d="M293.114 2.09092V53H288.466V2.09092H293.114Z" stroke="black" strokeWidth="2" mask="url(#path-1-outside-1_128_5)"/>
        <path d="M343.836 27.5455C343.836 32.8485 342.891 37.4638 341.002 41.3913C339.113 45.3023 336.511 48.335 333.197 50.4894C329.899 52.6271 326.104 53.696 321.812 53.696C317.52 53.696 313.716 52.6271 310.402 50.4894C307.104 48.335 304.511 45.3023 302.622 41.3913C300.749 37.4638 299.813 32.8485 299.813 27.5455C299.813 22.2424 300.749 17.6354 302.622 13.7244C304.511 9.79688 307.113 6.76421 310.427 4.62643C313.741 2.47207 317.536 1.3949 321.812 1.3949C326.104 1.3949 329.899 2.47207 333.197 4.62643C336.511 6.76421 339.113 9.79688 341.002 13.7244C342.891 17.6354 343.836 22.2424 343.836 27.5455ZM339.312 27.5455C339.312 22.9882 338.55 19.0855 337.025 15.8374C335.5 12.5727 333.421 10.0786 330.786 8.35512C328.151 6.63164 325.159 5.7699 321.812 5.7699C318.481 5.7699 315.498 6.63164 312.863 8.35512C310.228 10.0786 308.14 12.5644 306.599 15.8125C305.074 19.0606 304.312 22.9716 304.312 27.5455C304.312 32.1028 305.074 36.0055 306.599 39.2536C308.123 42.5017 310.203 44.9957 312.838 46.7358C315.473 48.4593 318.464 49.321 321.812 49.321C325.159 49.321 328.151 48.4593 330.786 46.7358C333.437 45.0123 335.525 42.5265 337.05 39.2784C338.574 36.0137 339.328 32.1028 339.312 27.5455Z" stroke="black" strokeWidth="2" mask="url(#path-1-outside-1_128_5)"/>
      </g>
    </svg>
    </>
  )
}
