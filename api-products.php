<?php

// Simulated data, replace with database queries in a real-world scenario
$products = [
    ['id' => 1, 'name' => 'Product 1', 'description' => 'Description for Product 1', 'price' => 19.99],
    ['id' => 2, 'name' => 'Product 2', 'description' => 'Description for Product 2', 'price' => 29.99],
    ['id' => 3, 'name' => 'Product 3', 'description' => 'Description for Product 3', 'price' => 39.99],
];

header('Content-Type: application/json');
echo json_encode($products);
?>
