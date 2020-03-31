<?php

require('./includes/headerssss.php');

require('./includes/mysqli_connect.php');

$sql = "SELECT * FROM `carousel_img` ORDER BY `img_id` DESC"; 
$r = mysqli_query($conn, $sql);

if (mysqli_num_rows($r) > 0) {
    // output data of each row
    $response = array();
    while($row = mysqli_fetch_assoc($r)) {
        $temp_response = array(
            "img_link" => $row['img_link'],
            "alt_text" => $row['alt_text'],
            "header" => $row['header'],
            "caption" => $row['caption'],
        );
        array_push($response, $temp_response);
    }
    echo json_encode($response);
} else {
    echo "0 results";
}

?>