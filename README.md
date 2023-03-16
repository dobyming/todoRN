# Todo App

React Native에 기반한 간단한 Todo App 입니다.

## WireFrame

core components를 익히기 위함이 목적인 프로젝트 명목 상, styleSheet에 기반한 기본적인 styling만 진행됩니다.

![2023-03-06 09;54;17](https://user-images.githubusercontent.com/90133704/222997795-66c587a2-8489-49a5-a2f9-1955b3e49b7c.PNG)

- `App` 컴포넌트 하위에 `MainScreen`이 배치됩니다.
- `TodoItem` 과 `InputForm`은 자주 사용되는 컴포넌트이므로 `components` 폴더에서 관리합니다.
- 상태 관리는 `Redux`를 활용합니다.

### 페이지 라우팅

![2023-03-16 17;43;44](https://user-images.githubusercontent.com/90133704/225562395-89c35f5f-7010-4220-b21d-573d074dbdcb.PNG)

- `react navigation`으로 페이지 간 라우팅을 수행합니다.
- `Firebase auth` 를 활용하여 회원가입/로그인 로직을 구현합니다.

## Installation & Start

이 프로젝트는 expo를 통해 React Native 환경을 구성합니다. 따라서 아래 CLI 명령어로 프로젝트 폴더를 생성합니다.

```bash
npx create-expo-app 'project_name'
```

아래 명령어로 리액트 앱을 구동합니다.

```bash
npm start
```

## logs

[React Native 개발 log](https://velog.io/@damin1025/series/React-Native-Study) 를 남기는 URL입니다.

[Redux Toolkit 활용 log](https://velog.io/@damin1025/series/Redux-Study) : Redux를 활용하여 state를 관리하는 것에 대한 log를 남기는 URL입니다.
