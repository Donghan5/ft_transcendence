# Project FT_Transcendence

## ----- MILESTONE IDEA (KR) -----

아이디어

1. quick-play를 로컬 멀티 플레이어로 한다. --> DONE

2. 토너먼트는 웹소켓으로 멀티 플레이어를 한다 (이걸 위해서는 로그인과, DB 연동이 필요함)

3. AI 는 내가 이미 생성해둔 로직인 select ai level을 활용해서, ai를 클릭하고, 유저가 ai level을 선택할 수 있도록 한다.

4. 로그인 이전 화면을 새롭게 만들어서, 현재 화면을 로그인 후에 하도록 한다.

5. DB 로그인 플로우, DB 초기화 시점...


그래서 이 아이디어를 실현시키기 위해서


1. 로그인을 구현한다. OAuth2를 활용해서 google log-in 을 할 생각임

2. DB를 활용해서 유저를 보관한다 (도커 환경이고, sql-lite 사용)

3. 로컬 멀티 플레이어에서, player2의 키도 바인딩을 한다 (화살표 윗, 아래 방향키 생각 중) --> DONE

4. 유저 데이터를 담은 db를 활용해, 멀티 플레이어 (웹소켓)을 구현하고, 리더보드 기능도 생성한다


## ----- LOGIN Flow -----
1. Google OAuth2 로그인
	- @fastify/oauth2
	- 구글 로그인의 핵심 --> Callback route 처리, 인증 성공 시 code가 담긴 URL로 전송 --> 이걸 잡아서 access_token 으로 교환하고 DB에 유저 정보 저장
	- 1. /login/google -> 구글 로그인 리다이렉트
	- 2. /auth/google/callback -> 구글이 리다이렉트함 -> code 로 access_token 요청 -> 유저 정보 확보
	- 3. DB에 저장 또는 업데이트
	- 4. JWT로 프론트에 전달 (세션 유지)
