# npm 사용법

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

***

# 개발환경 구성
#### 1. Vue 프레임워크 설치
```bash
$ npm install vue
```
#### 2. 어플리케이션 생성 : 상위 폴더에서 create 실행 (idps-web 폴더 생성)
```bash
$ vue create idps-web
```
- Vue 2.0 preset 선택
```
Vue CLI v4.5.12
? Please pick a preset:
> Default ([Vue 2] babel, eslint)
  Default (Vue 3 Preview) ([Vue 3] babel, eslint)
  Manually select features
```
#### 3. 어플리케이션 기본 라이브러리 설치 (idps-web 폴더로 이동)
```bash
$ cd idps-web
$ npm install bootstrap
$ npm install bootstrap-vue
$ npm install @popperjs/core
$ npm install portal-vue
```
#### 4. VS Code 사용시 Vetur 추가 설정
- Vetur(Vue tooling for VS Code)는 syntax-highlighting, error checking, 확장 emmet 등을 지원하며 VS extentions에서 설치
- 필요시 프로젝트 루트에 jsconfig.json 파일 생성하고 다음과 같은 내용 설정
```
{
    "include": [
      "./src/**/*"
    ]
  }
```
#### 5. 기타
 - 홈페이지 title : public/index.html 파일에서 title 태그에 직접 지정