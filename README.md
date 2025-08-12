# Project FT_Transcendence

## ----- MILESTONE IDEA (KR) -----

아이디어

1. quick-play를 로컬 멀티 플레이어로 한다. --> DONE

2. 토너먼트는 웹소켓으로 멀티 플레이어를 한다 (이걸 위해서는 로그인과, DB 연동이 필요함)

3. AI 는 내가 이미 생성해둔 로직인 select ai level을 활용해서, ai를 클릭하고, 유저가 ai level을 선택할 수 있도록 한다.

4. 로그인 이전 화면을 새롭게 만들어서, 현재 화면을 로그인 후에 하도록 한다. (현재 화면을 대쉬보드화 한다) --> DONE

5. DB 로그인 플로우, DB 초기화 시점... --> DONE

6. 유저 정보 관리 --> 정보 업데이트 기능 추가

7. HTTPS 로 변경함 --> DONE

8. study docker images volumes in make --> DONE

## -------------------------------------------------------------

1. 로그인을 구현한다. OAuth2를 활용해서 google log-in 을 할 생각임 --> DONE

2. DB를 활용해서 유저를 보관한다 (도커 환경이고, sql-lite 사용) --> DONE

3. 로컬 멀티 플레이어에서, player2의 키도 바인딩을 한다 (화살표 윗, 아래 방향키 생각 중) --> DONE

4. 유저 데이터를 담은 db를 활용해, 멀티 플레이어 (웹소켓)을 구현하고, 리더보드 기능도 생성한다

5. 현재 로그인 기능에 대해서 login.html과 index.html 두개의 파일이 있는데 이를 하나로 통합하고, 기능은 그대로 유지한다. (로그인 이전은 로그인 관련 화면, 로그인 이후는 대쉬보드 같은 화면) --> DONE

6. 게임 히스토리 기능과 매치 메이킹 기능을 추가한다. --> DONE (MATCH MAKING HAVE TO ENCHANCE)

7. 패들 위치 조정 플레이어 패들 속도

8. 아바타 추가, 친구 목록, 유저 선택 닉네임 --> DONE

9. 패들 충돌 조정

10. 커스텀된 웹페이지 주소 --? DONE

11. 웹사이트 디자인 개편 --> DONE

12. add avatar in friend-list --> DONE

13. implement public profile (to see in friend-list, avatar and nickname with game-history) --> DONE

14. make simple web page to waiting game... (in tournament feature, waiting room) --> JUST SHOWING WAITING PLAYER (PARTINALLY DONE)

15. In tournamant, the user can invite friend, or real player (in waiting room) --> ??

16. Match-making success --> DONE

17. Match-cancel with cancel.ts --> DONE

18. when opponent win the game, they show just player 1 (or 2 something), not the nickname

19. 로컬 로그인 구현 --> done

20. when logged in -> not redirect to main

21. messed up form

22. ip test

23. if one player cancel the game, ended games --> giving pen. (like 5-0)

24. register nickname (number of characters) && flow (same as google OAuth)

25. profile like change password



## ----- LOGIN Flow -----
1. Google OAuth2 로그인
	- @fastify/oauth2
	- 구글 로그인의 핵심 --> Callback route 처리, 인증 성공 시 code가 담긴 URL로 전송 --> 이걸 잡아서 access_token 으로 교환하고 DB에 유저 정보 저장
	- 1. /login/google -> 구글 로그인 리다이렉트
	- 2. /auth/google/callback -> 구글이 리다이렉트함 -> code 로 access_token 요청 -> 유저 정보 확보
	- 3. DB에 저장 또는 업데이트
	- 4. JWT로 프론트에 전달 (세션 유지)


## ----- INVITE FRIEND FLOW -----
1. (Front) click invite button in friend-list, send request to backend
2. (Back) Register invitation information in DB, send it to invited friend (via websocket)
3. (Front) Pop-up ---> "Player XXX invited... [accept/reject]"
4. (Front) if accept --> send the post request to backend
5. (Back) gameEngine.createGame() --> create game of both player, send a signal "Game Start" via websocket
6. Enter to game id, when they receive the signals
