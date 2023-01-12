import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Title from '../../src/components/common/Title';
import { counter, projectImgsData } from '../../state/atoms';
import { LeftArrowAlt, RightArrowAlt } from '@styled-icons/boxicons-regular';
import Loading from '../../src/components/common/Loading';
import NotFound from '../404';
import { getProjectList } from '../../src/api/clientApi';
import { useQuery } from '@tanstack/react-query';
import { IndicatorBox, ItemContentBox, ItemDescBox, ItemDetailTextBox, ItemImgBox, ItemInfoBox, ItemPromotionBox, ItemTitleBox, PdContainer, Root, RootContainer } from '../../styles/pagesStyles/project/titleStyle';
import { LoadingBox } from '../../src/components/project/slideWrapStyle';

export default function ProjectInner() {
  const {
    query,
    query: { title }
  } = useRouter();
  const { isLoading, status, data, error } = useQuery(['getProjectKey', title], getProjectList);
  const [count, setCount] = useRecoilState(counter);
  const [currentPjItem, setCurrentPjItem] = useState({});
  const [currentPjImg, setCurrentPjImg] = useState('');
  const projectItems = useRecoilValue(projectImgsData);
  const [prevProject, setPrevProject] = useState('');
  const [nextProject, setNextProject] = useState('');
  useEffect(() => {
    if (status === 'success' && title !== undefined) {
      const currentProjectItem = data.find((x) => x.title === title);
      const currentItem = data.findIndex((x) => x.title === title);
      const currentPjImg = projectItems[count];
      const prevProject = data[count - 1]?.title;
      const nextProject = data[count + 1]?.title;
      setCurrentPjItem(currentProjectItem);
      setCurrentPjImg(currentPjImg);
      setPrevProject(prevProject);
      setNextProject(nextProject);
      setCount(currentItem);
    }
  }, [status, count, title]);
  const splitMap = (item) => {
    if (item?.includes('\\n')) {
      return item.split('\\n').map((ele) => (
        <React.Fragment key={ele}>
          {ele}
          <br />
        </React.Fragment>
      ));
    } else {
      return item;
    }
  };
  const goTop = () => {
    const layout = document.querySelector('.layout');
    layout.scrollTo(0, 0);
  };
  if (isLoading) {
    return (
      <LoadingBox>
        <Loading />
      </LoadingBox>
    );
  }
  const { title: itemTitle, configuration, descriptionHead, descriptionDesc, distributeLink, videoLink, githubLink, period, contribution, tools, promotionHead, promotionDesc } = currentPjItem;
  return (
    <Root>
      <RootContainer>
        <Title>PROJECT</Title>
        <PdContainer>
          <ItemTitleBox>
            <h2>
              {itemTitle === 'CLOVA' && <span>NAVER</span>}
              {itemTitle}
            </h2>
            <p>{configuration}</p>
          </ItemTitleBox>
          <ItemDescBox>
            <i></i>
            <div className="descInnerBox">
              <h3>{descriptionHead}</h3>
              <p>{splitMap(descriptionDesc)}</p>
            </div>
          </ItemDescBox>
          <ItemContentBox>
            <ItemImgBox image={currentPjImg.src} isDasida={itemTitle === "Dasida"}>
              <Link href={`${githubLink}`}>
                <a  target="_blank" className="imgBg" title={`GitHub 바로가기`}></a>
              </Link>
            </ItemImgBox>
            <ItemDetailTextBox>
              <ItemInfoBox>
                <ul>
                  <li>제작 기간 : {period}</li>
                  <li>제작 기여도 : {contribution}</li>
                  <li className={configuration?.includes('Team') ? 'teamTolls' : ''}>
                    제작 스택
                    {configuration?.includes('Team') ? (
                        tools.map((ele,idx) => (
                          <div key={ele}>
                            <span>{idx===0?"Front-End :":"Back-End :"}</span>
                            <span>{ele}</span>
                          </div>
                        ))
                    ) : (
                      <> : {tools}</>
                    )}
                  </li>
                </ul>
              </ItemInfoBox>
              <ItemPromotionBox>
                <h3>{splitMap(promotionHead)}</h3>
                <p>{splitMap(promotionDesc)}</p>
                <div>
                  <Link href={`${githubLink}`}>
                    <a target="_blank" title={`Github 바로가기`} >
                      깃허브 바로가기
                      <RightArrowAlt />
                    </a>
                  </Link>
                </div>
                {distributeLink && 
                <div>
                  <Link href={`${distributeLink}`}>
                    <a target="_blank" title={`${configuration?.includes('Team') ? itemTitle : `${itemTitle}Clone`} 바로가기`}>
                      작업물 보러가기
                      <RightArrowAlt />
                    </a>
                  </Link>
                </div>
                }
                {videoLink && 
                <div>
                  <Link href={`${videoLink}`}>
                    <a target="_blank" title={`${itemTitle} 시연 영상 보러가기`}>
                      시연영상 보러가기
                      <RightArrowAlt />
                    </a>
                  </Link>
                </div>
                }
              </ItemPromotionBox>
            </ItemDetailTextBox>
          </ItemContentBox>
        </PdContainer>
        <IndicatorBox>
          <div className="prevBtnBox">
            {count > 0 && (
              <Link href={`/project/${prevProject}`}>
                <a
                  onClick={() => {
                    setCount((prev) => prev - 1);
                    goTop();
                  }}>
                  <LeftArrowAlt />
                </a>
              </Link>
            )}
          </div>
          <div className="goListLink">
            <Link href="/project">
              <a>리스트로 돌아가기</a>
            </Link>
          </div>
          <div className="nextBtnBox">
            {count < projectItems.length - 1 && (
              <Link href={`/project/${nextProject}`}>
                <a
                  onClick={() => {
                    setCount((prev) => prev + 1);
                    goTop();
                  }}>
                  <RightArrowAlt />
                </a>
              </Link>
            )}
          </div>
        </IndicatorBox>
      </RootContainer>
    </Root>
  );
}
