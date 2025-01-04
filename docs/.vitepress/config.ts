import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'LaraVuel-ApiSpa',
  description: 'Backend y Frontend.',
  base: '/laravuel-apispa/', //  The default path during deployment / secondary address / base can be used/
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config    
    logo: '/mylogo.png',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Comenzar', link: '/guide/introduction' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' },      
    ],
    sidebar: [{
        text: 'Comenzar',   // required
        path: '/guide/',      // optional, link of the title, which should be an absolute path and must exist        
        sidebarDepth: 1,    // optional, defaults to 1
        collapsible: true,
        collapsed: false, 
        items: [
          { text: 'Introducción', link: '/guide/introduction' }          
        ]        
      }
      , {
        text: 'Laravel 10',   // required
        path: '/laravel-10/',
        collapsible: true,
        collapsed: true,      
        items: [
          { text: 'Configurar Laravel API', link: '/laravel-10/setup-laravel-api' },
          { text: 'Laravel con Postman', link: '/laravel-10/laravel-with-postman' },
          { text: 'Autenticación de Laravel', link: '/laravel-10/laravel-authentication' }
        ]
      }, {
        text: 'Laravel 11',   // required
        path: '/laravel-11/',
        collapsible: true,
        collapsed: true,      
        items: [
          { text: 'Configurar Laravel API', link: '/laravel-11/setup-laravel-api' },
          { text: 'Laravel con Postman', link: '/laravel-11/laravel-with-postman' },
          { text: 'Autenticación de Laravel', link: '/laravel-11/laravel-authentication' }
        ]
      }, {
        text: 'Vue 3',   // required
        path: '/vue-3/',
        collapsible: true,
        collapsed: true,      
        items: [          
          { text: 'Configurar Vue SPA', link: '/vue-3/setup-vue-spa' },
          { text: 'Complementos Globales de Vue', link: '/vue-3/vue-global-plugins' },
          { text: 'Envoltorio de Axios', link: '/vue-3/axios-wrapper' },
          { text: 'Autenticación de Vue', link: '/vue-3/vue-authentication' },          
          { text: 'Usando VueRouter', link: '/vue-3/using-vuerouter' },
          { text: 'El Middleware', link: '/vue-3/the-middleware' },
          { text: 'Componentes Genéricos', link: '/vue-3/generic-components' },
          { text: 'Componibles Genéricos', link: '/vue-3/generic-composables' },
          { text: 'Auth: Vistas y Componentes', link: '/vue-3/auth-views-and-components' },
          { text: 'CRUD de Usuarios', link: '/vue-3/users-crud' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/laravuel-apispa' }
    ]
  }
})
