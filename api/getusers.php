<?php

require('./includes/headerssss.php');

require('./includes/mysqli_connect.php');

$sql = "SELECT * FROM `users` ORDER BY `users`.`time_created` DESC";
$r = mysqli_query($conn, $sql);

if (mysqli_num_rows($r) > 0) {
    // output data of each row
    $response = array();
    while($row = mysqli_fetch_assoc($r)) {
        $temp_response = array(
            "id" => $row['id'],
            "username" => $row['username'],
            "email" => $row['email'],
            "user_level" => $row['user_level'],
            "time_created" => $row['time_created'],
        );
        array_push($response, $temp_response);
    }
    echo json_encode($response);
} else {
    echo "0 results";
}

?>