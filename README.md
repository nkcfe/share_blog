# react로 구현한 게시판 기능

# AWS S3로 배포 완료

http://shareblog.s3-website.ap-northeast-2.amazonaws.com/

## Intro

회원가입과 로그인이 기능이 구현되어있으며, 간단한 게시글 작성과 해당 게시글 댓글 기능을 구현했습니다.

### 회원가입 기능

- 유효성 검사 기능
- 서버에 요청
- 쿠키에 토큰이 있을 경

### 로그인 기능

- 유효성 검사 기능
- 발급받은 토큰 쿠키에 저장

### 로그아웃 기능

- 쿠키에 저장된 토큰 삭제

### 메인페이지

- 페이지 변경 시 쿠키에 저장된 토큰으로 서버에 인증 요청
- 토큰 만료시 로그아웃

### 게시글, 댓글 API

- json-server heroku 배포.

- 게시글
  |기능|URL|Method|request|response|
  |----|---|------|-------|--------|
  |게시글 가져오기|GET||{"id": "94f807a8-0bdc-400f-81b2-0b8abd5b694e","author": "chul1","title": "제목입니다.","date": "2023.11.18","text": " 테스트글입니다.","heart": 0,"coverImg": "data"}|
  |게시글 등록|POST|id:string, article:object|201|
  |게시글 삭제|DELETE|id:string|201|
  |게시글 수정|PATCH|id:string, article:object|201|

- 댓글
  |기능|URL|Method|request|response|
  |---|---|---|---|
  |댓글 가져오기|GET||{"authorId": "83c14c79-48e2-4ce6-a5cb-ee3e62d5b7c9","id": "bf410f35-2ccb-4b6d-aaa9-d7611fddbf19","author": "nkcfe","text": "gasdf","date": "2023.11.18"}|
  |댓글 등록|POST|id:string, comment:object|201|
  |댓글 삭제|DELETE|id:string|201|
  |댓글 수정|PATCH|id:string, comment:object|201|
