import { defineConfig } from 'vite';

/**
 * postal-simulator (우체통에서 받은편지함까지) — 개발 서버 설정
 *
 * 포트 8090: 8080~8089 를 다른 앱이 이미 쓰고 있어 그다음 번호를 준다.
 *
 * ★ 이 앱에는 build 스크립트가 없다 (hub 와 같은 이유로 일부러 뺐다).
 *   앱 전체가 index.html 한 파일이고 스크립트도 그 안에 인라인으로 들어 있어
 *   번들할 것이 없다. GitHub Pages 가 저장소 루트의 소스를 그대로 서비스하므로
 *   배포는 `git push` 하나로 끝난다. dist/ 를 만들지 않는다.
 *   같은 이유로 index.html 을 더블클릭해도 그대로 열린다.
 *
 *   확장자가 .mjs 인 이유: package.json 에 "type": "module" 을 넣지 않았으므로
 *   vite 설정만 ESM 으로 쓰려면 .mjs 여야 한다. (hub·spread-simulator 와 같은 사정)
 */
export default defineConfig({
  root: '.',
  base: './',

  server: {
    port: 8090,
    strictPort: true,   // 8090이 사용 중이면 조용히 옮기지 않고 알려 준다
    open: false,
  },
});
