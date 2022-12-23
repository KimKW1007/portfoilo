import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { counter, pathList } from '../../../state/atoms';
import { NavBox, NavLocationIcon } from './navStyle';
import {Error} from "@styled-icons/boxicons-regular"

export default function Nav() {
  const [count, setCount] = useRecoilState(counter);
  const { pathname } = useRouter();
  const currentPath = pathname.split("/");

  const ulRef = useRef();
  const pathItem = useRecoilValue(pathList);
  const isProject = pathname.includes('project');
  const indicatorMove =()=>{
    const li = document.querySelectorAll('.menuUl li');
    const indicator = document.querySelector('.indicator');
    li.forEach((ele, idx)=>{
      if(ele.classList.contains('active')){
        let offsetTop = ele.offsetTop;
        indicator.style.setProperty("--top",offsetTop + "px")
      }
    })
  }
  useEffect(() => {
    if (!isProject) {
      setCount(0);
    }
  });
  useEffect(()=>{
    indicatorMove()
  },[pathname])
  
  return (
    <NavBox >
      <div className="menuBox">
        <nav>
          <ul ref={ulRef} className='menuUl'>
            {pathItem.map(({path, title, icon}) =>(
              <li  key={title} className={`/${currentPath[1]}` === path && count !== -1 ? "active" : ""}>
                <Link href={path}>
                  <a >
                    {icon}
                  </a>
                </Link>
                <div>{title}</div>
              </li>
            ))}
            {(pathname === "/404" || count === -1) && <li className='errorIconBox active'><Error/></li>}
            <NavLocationIcon  className='indicator'/>
          </ul>
        </nav>
      </div>
    </NavBox>
  );
}
