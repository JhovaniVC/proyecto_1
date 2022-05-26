<?php
    $conn = new mysqli('localhost','','','gdlwebcamp');

    if($conn->connect_error) {
      echo $conn->connect_error;
    }
