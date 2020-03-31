<?php
    require('./includes/headerssss.php');

    $data = json_decode(file_get_contents("php://input"));
    
    $array = json_decode(json_encode($data), true);
    
    $username = $array['username2Bchecked'];

    require('./includes/mysqli_connect.php');

    $sql = "SELECT `username` FROM `users` WHERE `username`='$username';";
    $r = mysqli_query($conn, $sql);
    
    if (mysqli_num_rows($r) === 0) {
        $return_data = array(
            "message" => "Username available"
        );
        echo json_encode($return_data);
    } else {
        $return_data = array(
            "message" => "Username taken"
        );
        echo json_encode($return_data);
    }
    
    mysqli_close($conn);
    
?>