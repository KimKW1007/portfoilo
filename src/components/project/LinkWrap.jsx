import React from 'react'
import { PlusCircle, Play } from "@styled-icons/boxicons-regular";
import Link from 'next/link';
import { LinkBox } from './linkWrapStyle';


export default function LinkWrap({currentLink, currentTitle}) {

  return (
    <LinkBox>
      <Link href={`/project/${currentTitle}`}>
        <a>
          <span>READ MORE</span>
          <div className='iconBox'>
            <PlusCircle/>
          </div>
        </a>
      </Link>
      <Link href={`${currentLink}`}>
        <a target="_blank" className={`${currentLink ? "" : "disabled-link"}`} onClick={(e)=> {!currentLink && e.preventDefault()}}>
          <span>WEBSITE</span>
          <div className='iconBox'>
            <Play/>
          </div>
        </a>
      </Link>
    </LinkBox>
  )
}
