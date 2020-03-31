<?php

require('./includes/headerssss.php');

require('./includes/mysqli_connect.php');

$sql = "SELECT * FROM `card` ORDER BY `card`.`date_added` DESC"; 
$r = mysqli_query($conn, $sql);

if (mysqli_num_rows($r) > 0) {
    // output data of each row
    $response = array();
    while($row = mysqli_fetch_assoc($r)) {
        $temp_response = array(
            "card_img_link" => $row['card_img_link'],
            "card_title" => $row['card_title'],
            "card_text" => $row['card_text'],
            "date_added" => $row['date_added'],
        );
        array_push($response, $temp_response);
    }
    echo json_encode($response);
} else {
    echo "0 results";
}

?>