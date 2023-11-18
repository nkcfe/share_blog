# react로 구현한 게시판 기능

# AWS S3로 배포 완료

http://shareblog.s3-website.ap-northeast-2.amazonaws.com/

## Intro

회원가입과 로그인이 기능이 구현되어있으며, 간단한 게시글 작성과 해당 게시글 댓글 기능을 구현했습니다.


### dependencies
- axios : 비동기 작업 통신
- react-cookie : JWT 토큰 쿠키에 저장시 사용 라이브러리
- react-dropzone : 이미지 드래그앤드랍 구현
- react-icons : 아이콘
- react-redux : 전역 상태 관리
- react-router-dom : 페이지
- react-spinners : 로딩 시 로딩 바 구현
- react-transition-group : 애니메이션 효과
- redux-first-history : 미들웨어 사용시 페이지 전환 (다른 주 라이브러리 react-router-dom v6와 호환 문제로 사용)
- styled-components : 스타일링
- uuid : id 생성

### 회원가입 기능

- 유효성 검사 기능
- 서버에 요청
- 쿠키에 토큰이 있을 경우 접근 불가

### 로그인 기능

- 유효성 검사 기능
- 발급받은 토큰 쿠키에 저장
- 쿠키에 토큰이 있을 경우 접근 불가

### 유효성 기준

- 로그인, 회원가입 유효성 검사

* 비어있을 경우 : 필수 정보입니다.
* 아이디 : 5~20자 영문 소문자, 숫자, 특수기호(-,\_) 가능
* 비밀번호 : 8~16자 영문 대소문자 숫자 사용 가능
* 비밀번호와 비밀번호확인 일치.

### 로그아웃 기능

- 쿠키에 저장된 토큰 삭제
- 모든 상태 reset

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
  |----|---|------|-------|--------|
  |댓글 가져오기|GET||{"authorId": "83c14c79-48e2-4ce6-a5cb-ee3e62d5b7c9","id": "bf410f35-2ccb-4b6d-aaa9-d7611fddbf19","author": "nkcfe","text": "gasdf","date": "2023.11.18"}|
  |댓글 등록|POST|id:string, comment:object|201|
  |댓글 삭제|DELETE|id:string|201|
  |댓글 수정|PATCH|id:string, comment:object|201|

### 추가로 구현해본 기능

- 이미지 업로드 기능 : drag&drop 및 browse 가능, base64로 업로드 (용량 canvas blob객체로 변환 후 압축하여 사용)
- 다크모드
- progress bar 구현

### 추가 구현 예정 기능

- 좋아요 추가 기능
- 인피니티 스크롤
- 스켈레톤 (로딩 중)
