https://softwareontheroad.com/ideal-nodejs-project-structure/
Bulletproof node.js project architecture 🛡️

1. The folder structure 🏢
2. 3 Layer architecture 🥪
3. Service Layer 💼
4. Pub/Sub Layer ️️️️🎙️️
5. Dependency Injection 💉
6. Unit Testing 🕵🏻
7. Cron Jobs and recurring task ⚡
8. Configurations and secrets 🤫
9. Loaders 🏗️

==================================
1. The folder structure 🏢
==================================
src
│   app.js          # App entry point
└───api             # Express route controllers for all the endpoints of the app
└───config          # Environment variables and configuration related stuff
└───jobs            # Jobs definitions for agenda.js
└───loaders         # Split the startup process into modules
└───models          # Database models
└───services        # All the business logic is here
└───subscribers     # Event handlers for async task
└───types           # Type declaration files (d.ts) for Typescript
자바스크립트 파일을 그저 정렬한게 아님

==================================
2. 3 Layer architecture 🥪
==================================
API Routes 로부터 비지니스 로직을 분리 - 관심사 분리 원칙 (Principle of separation of concerns)
어느날, 반복되는 작업에서 CLI 도구에서 비지니스 로직을 사용하길 원할수도 있음
그리고 node.js 서버에서 API 호출은 좋은 생각이 아님

** note ** 비지니스 로직을 컨트롤러에 넣지마
express.js 컨트롤러에 비지니스 로직을 저장할 수도 있는데, 이건 빠르게 스파게티 코드가 되버린다
유닛테스트를 작성하다 보면 express.js 의 request/response 복잡한 객체를 다루게 된다
언제 클라이언트로 response를 보내야 할지, 언제 프로세스를 백그라운드에서 계속 실행해야 할지
구분하는 것은 매우 복잡하다

==================================
3. Service Layer 💼
==================================
** note ** service layer 에 비지니스 로직을 작성
비지니스 로직은 이 layer 에 작성해야 한다. 
분명한 목적들을 지닌 클래스의 집합이며, SOLID 원칙을 node.js 에 적용한 것
이 layer 에는 SQL 쿼리가 포함되서는 안된다. 이는 data access layer 에 있어야 한다
 - express.js router 로부터 당신의 코드를 분리
 - service layer 로 request/response 객체를 전달하지말것
 - service layer 의 상태 코드 또는 헤더와 같은 HTTP transport layer 와 관련된 것들은 return 하지말것

==================================
4. Pub/Sub Layer ️️️️🎙️️
==================================
pub/sub 패턴을 전형적인 3 layer 구조 범위를 넘어서지만 매우 유용
간단한 node.js API end-point 에서 사용자를 생성한 뒤,
third-party 서비스를 호출하거나, 서비스 분석을 시도하거나, 이메일 작업을 하고 싶을 수 있다
간단히 “create” 작업이 여러 가지 일을 하기 시작할 것이며, 하나의 함수 안에 1000줄이 넘어가는 코드가 생길 것이다
이는 단일 책임 원칙 (principle of single responsibility) 을 위배
시작부터 책임들을 분리하여 간결하게 코드를 유지 관리 하는것이 좋다

==================================
5. Dependency Injection 💉
==================================
의존성 주입(D.I), 또는 제어 역전(IoC) 은 코드 구조화에 많이 사용하는 패턴 (생성자에 클래스와 함수의 의존성을 전달)
이 방법을 사용하여, 호환 의존성(compatible dependency) 을 주입해 유연성을 얻는다

==================================
6. Unit Testing 🕵🏻
==================================
의존성 주입과 이런 구조 패턴들을 사용하면 유닛테스트는 정말 간단해진다
request/response 객체들과 require 호출들을 할 필요가 없음

==================================
7. Cron Jobs and recurring task ⚡
==================================
비지니스 로직은 service layer 에 캡슐화되었고, 이것은 스케쥴링 작업을 더 쉽게 해준다
코드실행 지연을 할때 node.js 의 setTimeout 과 같은 원시적인 방법을 사용하면 안됨
대신 db에서 작업을 유지하고 실행하는 프레임워크를 사용 
(추천 : (agenda - node.js taskmanager) https://softwareontheroad.com/nodejs-scalability-issues/)

==================================
8. Configurations and secrets 🤫
==================================
dotenv 를 이용해 API key, db 연결에 필요한 설정들을 관리
 - .env 는 커밋하지 말것
 - 로드하면 process.env 에 저장됨

==================================
9. Loaders 🏗️
==================================
서비스의 시작 프로세스를 작은 모듈로 나누어 독립적으로 로드할 수 있게 할 것