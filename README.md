# Project FT_Transcendence

## -------------------------- Bug Report -----------------------------------

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

57. active tournament 에 아무런 토너먼트 목록도 없음 --> FIX

58. active tournament으로 조인할 시 tournament-lobby 가 아무것도 안보임

59. 초대받은 유저 창에는 QUIT TOURNAMENT 나오게 함. (우선적으로 58이 고쳐저야함)

60. 토너먼트 --> 폴링에서 웹소켓으로 변경 (차후 구현)

61. match-making system && waiting players (when multiple-demanded)

62. 맨 처음 토너먼트 화면고 생성된 후의 토너먼트 화면 통일

63. 참가자 수 옆이나 근처 다른 곳에 토너먼트 이름 보이게 하기

64. 대진표 생성 로직 (generateBracket) -->  다음 라운드의 대진을 생성하는 로직이 빠짐 / 실제로 다음 라운드의 Match 객체를 생성해서 tournament.bracket에 추가하는 코드가 없어 --> test

65. 게임 진행 및 결과 처리 --> 함수에서 게임이 끝나면 승자를 다음 라운드에 배치하는 로직이 있는데, 만약 두 플레이어가 동시에 접속해서 게임을 끝내면, handleGameEnd 함수가 두 번 호출되면서 대진표가 꼬일 가능성 --> use db transaction

66. 데이터베이스 저장 --> 토너먼트 상태나 대진표 정보를 업데이트 할 때마다 전체 bracket 객체를 JSON 문자열로 통째로 저장하고 있어. 참가자가 많아지면 이 bracket 객체가 굉장히 커질 수 있는데, 이렇게 통으로 저장하면 성능에 좋지 않은 영향 --> divde to small matches (db tables)

67. 새로 고침을 눌러야 반영이 되는 현상 발생 --> when getting activated tournament

68. 토너먼트를 만든 직후 --> websocket error occured. Please refresh 가 나옴 --> FIX

68. test code for tournament --> little description (it은 첫번째 인자로 테스트 설명, 두번째 인자로 테스트 함수를 받는다)

69. Insane test code error, it doesn't fix... What should I do ? WTF

70. 친구 요청 후 --> 요청 받은 대상자 친구 목록에 처음 접속시 failed to load data 나옴. refresh 하면 원상태 복구 --> to check

71. 토너먼트 시작시 --> Tournament started failed: Error: Cannot read properties of undefined (reading 'find') --> fix

72. invite 메서드 잘 작동함 --> 초대 받은 상대 로비 이동. --> 무조건 새로고침해야 참가한 토너먼트 로비가 보임

73. 메인 화면을 통해서 토너먼트 입장한 사람 전용 ui ?? --> 무조건 새로고침해야 참가한 토너먼트 로비가 보임

74. 토너먼트 입장 후 start -> creator 는 show bracket 보여줌 -> 다른 참가자는 토너먼트 로비 (로비 + 대기자 명단) --> 토너먼트 실행 안됨

75. start tournament 를 누르면 creator 제외 아무도 입장 안됨 --> 해결책 --> 일반 유저도 클릭할 수 있게 함 --> bracket 페이지에 들어옴. 여기서 creator 를 제외한 다른 플레이어들은 ready 만 누를 수 있고, creator는 모든 유저가 준비 상태가 되어야함 게임을 실행할 수 있음 (버튼을 추가할 것 각각)

76. refresh bracket 를 누르면 메인 화면으로 돌아감

77. 75 문제 전반을 아우르는 테스트 코드 필요할 듯

78. 일단, 모든 유저가 start tournament 버튼을 누를 수 있게 하고, bracket로 입장을 함 --> 여기서 start or ready 버튼 (플레이어의 역할에 따라서) / 현재는 토너먼트 로비 들어가서 새로고침 누르면 바로 showBracket가 보임. (showBracket에서 리디렉션 못하게 강제하는 방향도 생각 중임)

79. 레디나 스타트 버튼 추가 (상황에 따라서) --> 홈 화면에서 조인으로 토너먼트 로비에 들어갈시 조인한 토너먼트 로비로 바로 들어감.

80. 토너먼트 로비 ui 깨짐 (초반에) && 플레이어 업데이트 안되는 상황 && showBracket 에서 start/ready 버튼 안보이고 cancel/leave 버튼만 있음. --> 그래서 게임 시작을 못함 

81. 기능 작동 잘 안함. ready/start leave/cancel --> match가 진행이 안되고 있는데 in_progress라는 생태 나옴 --> 이게 주요한 원인일 가능성도 있음 (in progress 상태는 해결함. 여전히 ready 기능이 작동을 하지 않음)

82. 토너먼트를 생성하면 바로 로비가 아닌 showBracket으로 감 (생성자는 해결) --> 중간에 tournament lobby (participants 보여주는 것) 이상함. (생성자는 해결)

83. 참가자의 문제는 조인 -> 토너먼트 create화면으로 이동 -> 새로고침 -> 바로 showBracket -> 그것 때문에 leave 토너먼트가 되지가 않음 --> fix(check)

84. 바로 게임이 시작이 안되는 이유 --> 아직도 게임 시작이 잘 안됨 ---? fix

85. Ready/leave button not working in tournament-lobby --> fix 

86. 토너먼트 게임 종료 후, 메인 화면 이동 + 토너먼트 게임 종료 후 로그아웃 되는 현상 

87. 토너먼트 게임 간 뭔가 부자연스러움. 매치가 바로 시작되는 것이 아니라 새로고침을 해야 시작 됨

88. 부전승 관련 다음 라운드 승자 대진표 편성이 이상함 --> 대진표에 여전히 waiting... 이라고 되어있음 --> fix

89. 게임 관련 ui 해결 급함 --> 특히 스코어 보드 + 게임 승자 패자 깔끔하게 표시 --> 현재 해당 로컬 플레이어가 아닐 시 플레이어3 이런 식으로 표기함 --> fix
	- 스코어 보드 업데이트 안됨, 플레이어 이름 표시 안됨, 결과 표시 창 로딩이 느림 --> fix
 89번 fix

90. walk-over 관련 대진표 생성 문제 --> 생성에는 문제가 없는데 walkover 로 표시가 됨 

91. 토너먼트 종료 후, 토너먼트 결과 표시 --> 토너먼트 생성자 화면에만 표시됨 --> 그 후 토너먼트 종료 안됨 --> 새로고침 해야 종료 되는 듯?

92. 매 변경사항 마다 자연스럽게 반영 (페이지 새로고침 없이) --> fixed (why?)

93. 게임 입장도 새로고침을 해야 입장됨 --> fixed (why?)
	- 다음 라운드는 새로 고침을 해야하나? (새로 고침을 해야 게임 화면 변경이 됨)

94. 패들과 공의 충돌이 불안정함 (프론트/백 로직 간 충돌일 가능성 있음) --> 공 무브먼트 해결... 이제는 패들과 공이 떨어져서 충돌하는 이유 알아보기 --> 값 중심으로 --> fix

95. 생각 중
	- 참가자 혹은 생성자가 홈페이지로 이동을 해서도 해당 토너먼트 화면으로 접근할 수 있게 접근성 --> 이미 참가한 경우에만 open 버튼을 통해서 참가 가능

96. 토너먼트 로비에서 참가자의 leave 버튼이 작동 하지 않음 (api?) --> fix

97. 현재 ai는 단순히 공의 움직임만 추적하고, 특정한 비율에 따라서 공 따라가는 걸 포기함. --> 핸드 메이드 ai로직 만들기

98. 수정 이후, 공 리셋 후 직선 움직임만 생겨버림. --> matching the z value velocity in game-engine.ts and logic.ts (reset ball)

99. 토너먼트 레이팅 표시 관련 문제 --> fix

100. pvp 상대방 닉네임 opponent 로 표시 (닉네임으로 표시해야함) --> fix

101. 매치 메이킹 api 404에러.

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