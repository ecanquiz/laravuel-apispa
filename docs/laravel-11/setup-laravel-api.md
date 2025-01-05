## Nuevo Proyecto Laravel

Ubíquese dentro de la terminal en su directorio donde desea instalar el proyecto y ejecute el siguiente comando para descargar un nuevo proyecto.

```sh
composer create-project laravel/laravel laravel-11-app
```


# Configurar Laravel API

Asegúrese de cambiar lo siguiente en su archivo `.env`:

```sh
# DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel
# DB_USERNAME=root
# DB_PASSWORD=

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=laravuel
DB_USERNAME=postgres
DB_PASSWORD=secret
```

```sh
php artisan migrate
```

Ya deberia de levantar la app por el navegador

```sh
php artisan serve
```

Agregue una dirección de remitente en el `.env` para que se pueda enviar el correo electrónico.

```sh
MAIL_FROM_ADDRESS=test@test.com
```

https://laravel.com/docs/11.x#laravel-the-api-backend

## Instalar Sanctum


```sh
php artisan install:api
php artisan migrate
```

La migración creará la tabla: `2025_01_05_180104_create_personal_access_tokens_table`

La documentación completa se puede encontrar en el [sitio web de Laravel](https://laravel.com/docs/11.x/sanctum).

Sanctum necesita una configuración específica para permitirle trabajar con una SPA separada. Primero agreguemos lo siguiente en su archivo `.env`:

```sh
SANCTUM_STATEFUL_DOMAINS=localhost:5173
SPA_URL=http://localhost:5173
SESSION_DOMAIN=localhost
```

El dominio con estado le dice a Sanctum qué dominio está utilizando para el SPA. Puede encontrar las notas completas y la configuración para esto en el archivo `config/sanctum.php`. Como usamos cookies y sesiones para la autenticación, debe agregar un dominio de sesión. Esto determina para qué dominio está disponible la cookie en su aplicación. Las notas completas se pueden encontrar en el archivo `config/session.php` y en la [documentación oficial](https://laravel.com/docs/11.x/sanctum#spa-authentication).


A continuación, debe [indicarle a Laravel que las solicitudes entrantes de su SPA pueden autenticarse mediante las cookies de sesión de Laravel](https://laravel.com/docs/11.x/sanctum#sanctum-middleware
), al mismo tiempo que permite que las solicitudes de terceros o aplicaciones móviles se autentiquen mediante tokens de API. Esto se puede lograr fácilmente invocando el método de middleware `statefulApi` en el archivo `bootstrap/app.php` de su aplicación:

```php
->withMiddleware(function (Middleware $middleware) {
    $middleware->statefulApi();
    // This line throws an error because the middleware is not created
    $middleware->alias(['json_guest'=> \App\Http\Middleware\RedirectIfAuthenticated::class]);
    $middleware->appendToGroup('api', [
        \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    ]);
})
```

Crear middleware `App/Http/Middleware/RedirectIfAuthenticated.php`:
```php
<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                if ($request->expectsJson()) {
                    return response()->json(['error' => 'Already authenticated.'], 200);
                }
                return redirect(RouteServiceProvider::HOME);
            }
        }

        return $next($request);
    }
}
```

BORRAR
```php
'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    'throttle:api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
],
```

## Instalar Fortify

La documentación completa se puede encontrar en el [sitio web de Laravel](https://laravel.com/docs/11.x/fortify).

```sh
composer require laravel/fortify
php artisan vendor:publish --provider="Laravel\Fortify\FortifyServiceProvider"
php artisan migrate
```

la migracion creará la tabla `2025_01_05_190727_add_two_factor_columns_to_users_table`

Asegúrese de que la clase `FortifyServiceProvider` esté registrada dentro de la matriz de proveedores del archivo `bootstrap/providers.php` de su aplicación.

```php{6}
<?php

return [
    App\Providers\AppServiceProvider::class,
    // TODO App\Providers\AuthServiceProvider::class,
    App\Providers\FortifyServiceProvider::class,
    // TODO App\Providers\RouteServiceProvider::class,
];
```

## Siembra de Base de Datos

Configure la semilla para agregar un usuario de prueba, en el archivo `DatabaseSeeder.php` agregue lo siguiente:


```php
\App\Models\User::factory(1)->create(
    [
        'name' => 'Luke Skywalker',
        'email' => 'luke@jedi.com',
        'email_verified_at' => null,
    ]
);
```

Ejecuta las migraciones:

```sh
php artisan migrate --seed
```
## Almacenamiento de Archivos

En el archivo `.env` se declara lo siguiente para el almacenamiento de archivos :

```sh
DO_SPACES_PUBLIC=http://localhost:8000/storage/
```
