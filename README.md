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

20. when logged in -> not redirect to main --> fixed

21. messed up form

22. ip test

23. if one player cancel the game, ended games --> giving pen. (like 5-0)

24. register nickname (number of characters) && flow (same as google OAuth)

25. profile like change password

26. injecting HTML each time --> FIX

27. showing opponent nickname

28. updating score-board (showing the score and player name also, it confusing) --> FIX

29.  'game loop stopped message'를 끊임 없이 보여줌 (stopGameLoop 함수와 관련이 있을 듯) --> IT MAKES BE FEEL BAD ㅡㅡ --> FIX

30. when we sign up, at after it redirect to main page --> WHAT THE .... --> FIX

31. 점수판 표시에 플레이어 닉네임이 아닌 그냥 플레이어 1, 플레이어 2로 표시함 (로컬에서, AI 에서는 player1 으로 표시) --> FIX

32. 이제 토너먼트 기능 추가하기 (그 전에 선행 요건이 플레이어가 게임에 접속해 있는지를 확인할 수 있게 (공개 프로필 상에서) 만드는 기능임)

33. 웹소켓 관련 문제 (404) / 맨 처음에 친구 목록 불러오는데 (FAIL TO LOAD DATA)가 나오고 그 다음에 바로 새로고침을 하면 데이터가 불러와짐 --> 내가 생각하는 문제는 웹소켓 관련 404 에러 때문에 처음에 못 불러 오는 것 같음  --> FIX

34. 게임 캔슬 시 (Esc,  캔슬 버튼) --> 게임 종료, 캔슬 한 사람 몰수패처리

35. 토너먼트 join, invite 기능 구현 완료하기 (백엔드에 기본적인 구현은 있음) --> invite 완료 (테스팅 해야함)

36. 특히 invite 기능은 기존에 있는 updateFriendsList 함수 활용해서 친구 목록 중에 현재 접속 중인 플레이어만 초대할 수 있게 하기 --> 완료 (테스팅 해야함)

37. pong 로고에 홈 화면 리디렉트 되게 하기 --> done

38. 브라우저의 <- 를 눌렀을 때, 어떻게 해야 이전 화면으로 가지? (UX에 좋을 듯) --> History API를 사용을 하면 되는데... 뭔가 복잡함 --> DONE

39. 홈 화면에 현재 만들어진 토너먼트 대기방 볼 수 있게 하고, 원하는 대기방에 join 할 수 있게 하기

40. 게임 히스토리에서 플레이어를 선택했을 때, 그 플레이어의 공개 프로필 보게 하기

41. 공개 프로필에 스탯 보는 기능 합치기 (현재는 따로 구현이 되어있음) --> DONE

42. pvp 매치 메이킹 관련 로직에 문제가 생김 (원래 보이던 waiting opponent (cancel 버튼)이 안보임) --> 토너먼트 기능 추가한 이후에 이렇게 된건가? --> FIX

43. 처음 로컬 유저 등록 시, FAIL TO LOAD USER PROFILE 나옴 (큰 버그는 아닌데 찜찜함) --> FIXED (바로 로그인 이후 화면으로 접근을 시도해서 그런 거였음)

44. 가끔씩 처음으로 친구 창을 열 때도, 동일하게 FAIL TO LOAD 문제가 나옴 --> FIXED

45. 리프레쉬 시 메인 메뉴로 이동함

46. 비공개 프로필에 스탯 반영 제대로 안됨 + (공개는 체크 해야함 --> 공개는 잘 나옴... 데이터 값이 달라서 그런건가? 체크 해봐야겠음) --> FIX

47. 레이팅 관련 수정 --> MAYBE IN PUBLIC PROFILE?? 개인 프로필은 잘 나옴 토너먼트 만들고 대기방 레이팅이 이상항

48. active tournament에 아무런 토너먼트 정보가 없음

49. 토너먼트 친구 초대 기능 제대로 작동 안함. (친구 있고, 접속 중인데도 불구하고 친구 목록 안나옴)

50. 토너먼트 캔슬 기능의 부재 --> DONE

51. 토너먼트를 만들고 리스트에 저장하지 않고 있었음. 결과만 저장하고 있었음... --> FIX

52. implementing cancel API (in tournament) --> DONE

53. 토너먼트 친구초대 기능 

54. 화면 리프레쉬시 토너먼트 정보가 다 날아감 (리프레쉬 되면서 메모리도 같이 날아가는 듯) --> 아예 다 날려서 이게 제일 급함

55. 여기서 조인 버튼은 active tournament 와 함께 놔두기. 해당 토너먼트에 참가할 수 있게 함. --> DONE

56. 중복되는 토너먼트 이름은 거부하는 로직을 추가해야할 것 같음 --> DONE

57. active tournament 에 아무런 토너먼트 목록도 없음 --> FIX (join기능도 잘 작동하긴 하는데 수정이 필요함, UI 연결, 이건 새롭게 추가한 UI사용하면 될 듯?)

58. 초대받은 유저 창에는 QUIT TOURNAMENT 나오게 함. (우선적으로 57이 고쳐저야함)
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


## -------- 토너먼트 기능 ----------
1. 토너먼트 대기방 입장
2. 친구 초대 가능 최소 3명
3. 어떤 기준(?)으로 대진표 만듬. 인원이 홀수인 경우에는 부전승
4. 대진표를 기준으로 경기 진행
5. 경기 결과를 기준으로 랭킹 반영해서 리더보드에 기록