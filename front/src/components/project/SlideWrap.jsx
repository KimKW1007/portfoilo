import { Autoplay, EffectCreative, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled, { keyframes } from 'styled-components';
import { LeftArrow, RightArrow } from '@styled-icons/boxicons-regular';
import { counter, projectData, projectImgsData } from '../../../state/atoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import LinkWrap from './LinkWrap';
import coverPageImg from '../../assests/images/coverPage.png';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import { useQuery } from '@tanstack/react-query';
import { getProjectList } from '../../lib/clientApi';
import Loading from '../common/Loading';
import { ImgBox, LoadingBox, NextBtn, PrevBtn, SwiperContainer, TextBox } from './slideWrapStyle';

export default function SlideWrap() {
  const { isLoading, status, data, error } = useQuery(['getProjectKey'], getProjectList);
  const [count, setCount] = useRecoilState(counter);
  const projectItems = useRecoilValue(projectImgsData);
  const [currentLink, setCurrentLink] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  useEffect(() => {
    if (status === 'success') {
      const currentLink = data[count].distributeLink;
      const currentTitle = data[count].title;
      setCurrentLink(currentLink);
      setCurrentTitle(currentTitle);
    }
  }, [status, count]);
  const projectLength = data?.length - 1;
  if (isLoading) {
    return (
      <LoadingBox>
        <Loading />
      </LoadingBox>
    );
  }
  return (
    <SwiperContainer>
      <i className={count === 0 ? 'first' : count === projectLength ? 'last' : ''}></i>
      <Swiper
        grabCursor={true}
        modules={[EffectCreative, Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        effect={'creative'}
        creativeEffect={{
          prev: {
            translate: ['-100%', 0, 10]
          },
          next: {
            translate: [0, 0, -1]
          }
        }}
        className="mySwiper"
        onSlideChange={(swiper) => {
          setCount(swiper.activeIndex);
        }}
        initialSlide={count}
        style={{ backgroundImage: `url(${coverPageImg.src})` }}>
        {data.map(({ title, color, promotionHead }, idx) => (
          <SwiperSlide key={title} data-color={color}>
            <ImgBox className="imgBox">
              <img src={projectItems[idx].src} alt={title} />
            </ImgBox>
            <TextBox className="textBox">
              <div className="title">{title}</div>
              <div className="desc">
                <div>
                  {promotionHead.split('\\n').map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              </div>
            </TextBox>
          </SwiperSlide>
        ))}
      </Swiper>
      <PrevBtn className="swiper-button-prev" disabled={count === 0}>
        <LeftArrow />
      </PrevBtn>
      <NextBtn className="swiper-button-next" disabled={count === projectLength}>
        <RightArrow />
      </NextBtn>
      <LinkWrap currentLink={currentLink} currentTitle={currentTitle} />
    </SwiperContainer>
  );
}
