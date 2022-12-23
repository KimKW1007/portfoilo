import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pathList } from '../../../state/atoms';
import { LocationIcon, Nav } from './mobNavStyle';



export default function MobNav() {
  const {pathname} = useRouter();
  const currentPath = pathname.split("/");
  const pathItem = useRecoilValue(pathList);
  const indicatorMove =()=>{
    const li = document.querySelectorAll('.menuUl li');
    const indicator = document.querySelector('.indicator');
    li.forEach((ele, idx)=>{
      if(ele.classList.contains('active')){
        let offsetLeft = ele.offsetLeft;
        indicator.style.setProperty("--left",offsetLeft + "px")
      }
    })
  }
  useEffect(()=>{
    window.addEventListener("resize",indicatorMove);
  })
  useEffect(()=>{
    indicatorMove()
  },[pathname])
  return (
    <Nav>
      <ul className='menuUl'>
        {pathItem.map(({path, title, icon}) =>(
          <li  key={title} className={`/${currentPath[1]}` === path ? "active" : ""}>
            <Link href={path}>
              <a >
                {icon}
                <p>{title}</p>
              </a>
            </Link>
          </li>
        ))}
        <LocationIcon className='indicator'/>
      </ul>
    </Nav>
  );
}
