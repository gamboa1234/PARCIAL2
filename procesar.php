<?php

echo "<h1>Pedido recibido en Heladería Doña Nieve</h1>";

echo "<p>Nombre: " . $_POST["nombre"] . "</p>";
echo "<p>Correo: " . $_POST["correo"] . "</p>";
echo "<p>Sabores: " . $_POST["sabores"] . "</p>";

$helados = [
    "Cono simple - Bs 8",
    "Copa doble - Bs 15",
    "Litro para llevar - Bs 35"
];

echo "<h2>Carta de la heladería</h2>";

foreach ($helados as $item) {
    echo "<p>$item</p>";
}

echo "<p>Te atiende Marco Gamboa García</p>";

?>