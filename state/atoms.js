import { Folder, Home, CommentDots, User } from '@styled-icons/boxicons-regular';
import { BarChartSquare } from '@styled-icons/boxicons-solid';
import { wepo, megabox, naverClova, litho, daelim, starbucks, pofo, tomntoms } from '../src/assests/images/projectImg';

import { atom } from 'recoil';

export const modalAtom = atom({
  key:"atomModal",
  default:{
    mode :"",
    comment :"",
  }
})


export const skillList = atom({
  key: 'atomSkillRate',
  default: [
    {
      title: "markUp",
      subject: ["HTML/CSS" , "SCSS", "styled-components"],
      description: [
        "퍼블리싱을 배우면서 웹표준에 대해 배웠고\n그에 맞게 준수 하려고 노력합니다.",
        "CSS는 물론, SCSS도 활용 가능합니다.",
        "SCSS기반의 styled-components를 활용 가능합니다.",
        "Bootstrap 등 css 라이브러리 사용할 수 있습니다.",
        "keyframe을 이용한 애니메이션도 활용 가능합니다.",
      ]
    },
    {
      title: "language",
      subject: ["JavaScript" , "TypeScript"],
      description: [
        "ES6 문법에 익숙하고 ES5도 활용 가능합니다.",
        "TypeScript 활용 가능하고 공부 중에 있습니다.",
        "JavaScript 및 jQuery로 애니메이션 적용 할 수 있습니다.",
      ]
    },
    {
      title: "library",
      subject: ["React", "Next.js", "Vue.js", "jQuery", "Recoil","React-Query"],
      description: [
        "recoil, redux 등을 사용한 경험이 있습니다.",
        "Next.js 를 이용한 SSR 개발 경험이 있고\n해당 포트폴리오도 Next.js로 작업되었습니다.",
        "jQuery는 퍼블리싱 학원에 재학 중 주로 사용했습니다.",
        "팀 프로젝트에서 React-Query를 사용한 경험이 있습니다.",
      ]
    },
    {
      title: "etc",
      subject: ["Github","VSCODE","Figma"],
      description: [
        "git을 활용한 워크 플로우에 익숙합니다.",
        "Commit convention을 통한 협업 경험이 있고,\nMerge Conflict 처리에 익숙합니다.",
        "주로 vscode를 이용해 작업을 진행하고 있습니다.",
        "Figma를 이용해 기본적인 와이어 프레임 제작 경험이 있습니다."
      ]
    },
  ]
});

export const pathList = atom({
  key: 'atomPathLocation',
  default: [
    {
      path: '/',
      title: 'Home',
      icon: <Home />
    },
    {
      path: '/about',
      title: 'About',
      icon: <User />
    },
    {
      path: '/skills',
      title: 'Skills',
      icon: <BarChartSquare />
    },
    {
      path: '/project',
      title: 'Project',
      icon: <Folder />
    },
    {
      path: '/comment',
      title: 'Comment',
      icon: <CommentDots />
    }
  ]
});

export const counter = atom({
  key: 'atomCnt',
  default: 0
});

export const projectImgsData = atom({
  key: 'atomProjectsImgs',
  default: [wepo, megabox, naverClova, litho, daelim, starbucks, pofo, tomntoms ]
});
