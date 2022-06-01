<?php


require 'includes/paypal/autoload.php';

define('URL_SITIO', 'http://localhost:3000');

$apiContext = new \PayPal\Rest\ApiContext(
    new \PayPal\Auth\OAuthTokenCredential(
        'AdMMf5IMhLk8LDNxS-mbpQXIQ9q4BU_9L4xsY_Xs71RuF_vjtR1LvBLUJ2OC3OE-tAHt7BoJCOx-MZ1a', //Cliente ID
        'EGNKBcXLmhjnwchVIXwbykv53D1eSi6qWs10rNGkSAQ3HO1W8wJbt9lUxqpCQAeyv9H4I39JZjK1R3ze'//Secret
    )
);