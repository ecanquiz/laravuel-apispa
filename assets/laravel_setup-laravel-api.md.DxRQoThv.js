import{_ as s,c as a,o as i,a3 as e}from"./chunks/framework.6lXVJCTK.js";const u=JSON.parse('{"title":"Configurar Laravel API","description":"","frontmatter":{},"headers":[],"relativePath":"laravel/setup-laravel-api.md","filePath":"laravel/setup-laravel-api.md"}'),n={name:"laravel/setup-laravel-api.md"},t=e(`<h1 id="configurar-laravel-api" tabindex="-1">Configurar Laravel API <a class="header-anchor" href="#configurar-laravel-api" aria-label="Permalink to &quot;Configurar Laravel API&quot;">​</a></h1><p>Asegúrese de cambiar lo siguiente en su archivo <code>.env</code>:</p><div class="language-env vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>DB_HOST=127.0.0.1</span></span></code></pre></div><p>A esto:</p><div class="language-env vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>DB_HOST=mysql</span></span></code></pre></div><p>O a esto:</p><div class="language-env vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>DB_HOST=pgsql</span></span></code></pre></div><p>Agregue una dirección de remitente en el <code>.env</code> para que se pueda enviar el correo electrónico.</p><div class="language-env vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MAIL_FROM_ADDRESS=test@test.com</span></span></code></pre></div><h2 id="instalar-sanctum" tabindex="-1">Instalar Sanctum <a class="header-anchor" href="#instalar-sanctum" aria-label="Permalink to &quot;Instalar Sanctum&quot;">​</a></h2><p>La documentación completa se puede encontrar en el <a href="https://laravel.com/docs/9.x/sanctum" target="_blank" rel="noreferrer">sitio web de Laravel</a>.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> require</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> laravel/sanctum</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vendor:publish</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --provider=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Laravel\\Sanctum\\SanctumServiceProvider&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span></span></code></pre></div><p>Sanctum necesita una configuración específica para permitirle trabajar con una SPA separada. Primero agreguemos lo siguiente en su archivo <code>.env</code>:</p><div class="language-env vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>SANCTUM_STATEFUL_DOMAINS=localhost:5173</span></span>
<span class="line"><span>SPA_URL=http://localhost:5173</span></span>
<span class="line"><span>SESSION_DOMAIN=localhost</span></span></code></pre></div><p>El dominio con estado le dice a Sanctum qué dominio está utilizando para el SPA. Puede encontrar las notas completas y la configuración para esto en el archivo <code>config/sanctum.php</code>. Como usamos cookies y sesiones para la autenticación, debe agregar un dominio de sesión. Esto determina para qué dominio está disponible la cookie en su aplicación. Las notas completas se pueden encontrar en el archivo <code>config/session.php</code> y en la <a href="https://laravel.com/docs/9.x/sanctum#spa-authentication" target="_blank" rel="noreferrer">documentación oficial</a>.</p><p>Agregue el middleware de Sanctum a su grupo de middleware api dentro del archivo <code>app/Http/Kernel.php</code> de su aplicación:</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;api&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    \\Laravel\\Sanctum\\Http\\Middleware\\EnsureFrontendRequestsAreStateful</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;throttle:api&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    \\Illuminate\\Routing\\Middleware\\SubstituteBindings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span></code></pre></div><h2 id="instalar-fortify" tabindex="-1">Instalar Fortify <a class="header-anchor" href="#instalar-fortify" aria-label="Permalink to &quot;Instalar Fortify&quot;">​</a></h2><p>La documentación completa se puede encontrar en el <a href="https://laravel.com/docs/9.x/fortify" target="_blank" rel="noreferrer">sitio web de Laravel</a>.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> require</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> laravel/fortify</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vendor:publish</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --provider=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Laravel\\Fortify\\FortifyServiceProvider&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span></span></code></pre></div><p>Asegúrese de que la clase <code>FortifyServiceProvider</code> esté registrada dentro de la matriz de proveedores del archivo <code>config/app.php</code> de su aplicación.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Application Service Providers...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App\\Providers\\FortifyServiceProvider</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span></code></pre></div><h2 id="siembra-de-base-de-datos" tabindex="-1">Siembra de Base de Datos <a class="header-anchor" href="#siembra-de-base-de-datos" aria-label="Permalink to &quot;Siembra de Base de Datos&quot;">​</a></h2><p>Configure a semilla para agregar un usuario de prueba, en el archivo <code>DatabaseSeeder.php</code> agregue lo siguiente:</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\App\\Models\\User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">factory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;name&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Luke Skywalker&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;email&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;luke@jedi.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;email_verified_at&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Ejecuta las migraciones:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --seed</span></span></code></pre></div><h2 id="almacenamiento-de-archivos" tabindex="-1">Almacenamiento de Archivos <a class="header-anchor" href="#almacenamiento-de-archivos" aria-label="Permalink to &quot;Almacenamiento de Archivos&quot;">​</a></h2><p>En el archivo <code>.env</code> se declara lo siguiente para el almacenamiento de archivos :</p><div class="language-env vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>DO_SPACES_PUBLIC=http://localhost:8000/storage/</span></span></code></pre></div>`,30),p=[t];function l(h,r,o,d,c,k){return i(),a("div",null,p)}const v=s(n,[["render",l]]);export{u as __pageData,v as default};