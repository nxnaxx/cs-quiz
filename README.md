# CSQuizHub

<div align="center">
  <img width="293" alt="logo" src="./docs/images/main-logo.png">
</div></br>

<div align="center">
  <p><strong>CS 지식을 재미있게 학습할 수 없을까?</strong></p>
  <p>CSQuizHub에서는 직접 정한 난이도와 문제 유형으로 CS 개념을 쉽고 재미있게 즐길 수 있습니다.</p>
</div></br>

![Main Page](./docs/images/main-page.png)

## 목차

- [구현 사항](#구현-사항)
- [사용 기술 및 도구](#사용-기술-및-도구)
- [프로젝트 관리](#프로젝트-관리)

</br>

## 구현 사항

![Topic Page](./docs/images/topics-page.png)
![Modal](./docs/images/option-modal.png)
![Active Modal](./docs/images/active-modal.png)

- 디자인 수정 (brand color, thumbnail image, 메인 페이지 etc.)
- 메인 페이지 구현, 주제 선택 페이지 구현
- 시작하기 버튼 클릭 시 주제 선택 페이지 이동
- 주제 선택 시 옵션(난이도, 문제 수, 문제 유형) 선택 modal 표시
  - modal 오픈 시 외부 스크롤 방지
  - modal 외부 클릭 또는 close button 클릭 시 modal 닫기
  - 옵션 선택 시 해당 값으로 상태 변경
  - 옵션 변경 후, 퀴즈 생성하지 않고 modal 닫을 시 옵션 전체 초기화

</br>

## 해결 과제

- 메인 페이지 quiz card 선택 시 기본 설정된 option으로 퀴즈 생성
- 퀴즈 생성 페이지
- 퀴즈 결과 페이지
- 반응형 구현

</br>

## 사용 기술 및 도구

[![Tech Stack](https://skillicons.dev/icons?i=react,ts,emotion,vite)](https://skillicons.dev)

- Storybook(컴포넌트 개발)
- Zustand(상태 관리)

</br>

## 프로젝트 관리

[![](https://img.shields.io/badge/Figma-F24E1E.svg?style=for-the-badge&logo=Figma&logoColor=white)](<https://www.figma.com/design/pzPLL4qA4hk81vvehvSzk1/CSQuizHub-(%EA%B0%9C%EC%9D%B8)?node-id=0-1&t=6czbNA3VTsTln9y6-1>)
