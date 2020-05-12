<?php

namespace Tsung\NovaCustom;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class CustomServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::script('nova-custom', __DIR__ . '/../dist/js/custom.js');
            Nova::style('nova-custom', __DIR__ . '/../dist/css/custom.css');
        });
    }
}
