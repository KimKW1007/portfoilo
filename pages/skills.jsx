import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import Container from '../src/components/common/Container'
import Contents from '../src/components/common/Contents'
import Main from '../src/components/common/Main'
import Title from '../src/components/common/Title'
import SkillsBox from '../src/components/skills/SkillsBox'
import { skillList } from '../state/atoms'
import {LeftTopArrowCircle} from "@styled-icons/boxicons-regular";
import { useRouter } from 'next/router'
import { DetailInnerBox, InnerBox, SkillDetailBox } from '../styles/pagesStyles/skills/skillsStyle'


export default function Skills() {
  const {pathname} = useRouter();
  const skillItems = useRecoilValue(skillList);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isClick, setIsClick] = useState(false);
  const {title : currentItemTitle, description : currentItemDesc} = skillItems[currentIdx];
  useEffect(()=>{setIsClick(false)},[pathname])
  return (
    <Main>
      <Container>
        <Title>SKILLS</Title>
        <Contents>
          <InnerBox>
            <SkillsBox >
              {skillItems.map(({title, subject},idx) => (
                <div key={title} className={(isClick && currentIdx === idx) ? "active" : ""} onClick={()=>{setCurrentIdx(idx); setIsClick(true)}}>
                  <h3>{title}</h3>
                  <ul>
                    {subject.map(ele =>(
                      <li key={ele}>{ele}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </SkillsBox>
            <SkillDetailBox>
              <DetailInnerBox>
                <div className="skillTitle"><h3>{isClick ? currentItemTitle : <><i><LeftTopArrowCircle/></i>Click</>}</h3></div>
                <div className="skillDesc">
                  <ul>
                    {isClick && 
                    currentItemDesc.map((ele,idx)=>(
                      <li key={idx}>{ele.includes("\n")?
                      ele.split("\n").map(obj=>(
                        <React.Fragment key={obj}>{obj}<br/></React.Fragment>
                      )):
                      ele
                    }</li>
                    ))
                    }
                  </ul>
                  </div>
              </DetailInnerBox>
            </SkillDetailBox>
          </InnerBox>
        </Contents>
      </Container>
    </Main>
  )
}
