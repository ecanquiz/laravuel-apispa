import{_ as e,c as a,o as s,a3 as t}from"./chunks/framework.6lXVJCTK.js";const f=JSON.parse('{"title":"Configurar Vue SPA","description":"","frontmatter":{},"headers":[],"relativePath":"vue/setup-vue-spa.md","filePath":"vue/setup-vue-spa.md"}'),r={name:"vue/setup-vue-spa.md"},i=t(`<h1 id="configurar-vue-spa" tabindex="-1">Configurar Vue SPA <a class="header-anchor" href="#configurar-vue-spa" aria-label="Permalink to &quot;Configurar Vue SPA&quot;">​</a></h1><p>Se supone que tenemos algo de experiencia trabajando con la siguiente tecnología: <a href="https://vitest.dev" target="_blank" rel="noreferrer">Vite</a>, <a href="https://vuejs.org" target="_blank" rel="noreferrer">VueJS</a>, <a href="https://router.vuejs.org" target="_blank" rel="noreferrer">VueRouter</a>, <a href="https://pinia.vuejs.org" target="_blank" rel="noreferrer">Pinia</a>, <a href="https://vitest.dev" target="_blank" rel="noreferrer">Vitest</a>, <a href="https://test-utils.vuejs.org/guide" target="_blank" rel="noreferrer">Vue Test Utils</a>, <a href="https://testing-library.com/docs/vue-testing-library/intro" target="_blank" rel="noreferrer">Vue Testing Library</a>, <a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer">TypeScript</a>, <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">Tailwind CSS</a>, <a href="https://axios-http.com/" target="_blank" rel="noreferrer">Axios</a>.</p><p>Básicamente, nuestra SPA está desarrollada en su mayoría con todas ellas. Es decir, en su archivo <a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/package.json" target="_blank" rel="noreferrer">package.json</a> ya se encuentran debidamente preinstaladas. Solo basta con descargar el código y ejecutar <code>npm install</code> dentro de la carpeta del proyecto. Se supone que antes debemos tener instalado <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node</a> en la computadora. Hay que asegurarse de tener instalados los siguientes archivos de configuración:</p><ul><li><a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/postcss.config.js" target="_blank" rel="noreferrer">postcss.config.js</a></li><li><a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/tailwind.config.js" target="_blank" rel="noreferrer">tailwind.config.js</a></li><li><a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/tsconfig.json" target="_blank" rel="noreferrer">tsconfig.json</a></li><li><a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/tsconfig.node.json" target="_blank" rel="noreferrer">tsconfig.node.json</a></li><li><a href="https://github.com/CaribesTIC/laravuel-spa/blob/main/vite.config.ts" target="_blank" rel="noreferrer">vite.config.ts</a></li></ul><p>En este último archivo es donde se especifica la ruta de la API de Laravel a la cual apunta.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vite.config.ts</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// omitted for brevity ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;process.env&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    VUE_APP_API_URL: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://localhost:8000&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// omitted for brevity ...</span></span></code></pre></div>`,6),n=[i];function l(o,p,h,c,g,u){return s(),a("div",null,n)}const k=e(r,[["render",l]]);export{f as __pageData,k as default};