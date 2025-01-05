## Nuevo Proyecto Laravel

Ubíquese dentro de la terminal en su directorio donde desea instalar el proyecto y ejecute el siguiente comando para descargar un nuevo proyecto.

```sh
composer create-project laravel/laravel laravel-11-app
```

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

Ya deberia de levantar la api

https://laravel.com/docs/11.x#laravel-the-api-backend

```sh
php artisan install:api
```

