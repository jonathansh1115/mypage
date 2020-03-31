<?php
    require('./includes/headerssss.php');

    $data = json_decode(file_get_contents("php://input"));
    
    $array = json_decode(json_encode($data), true);
    
    $email = $array['email2Bchecked'];

    require('./includes/mysqli_connect.php');

    $sql = "SELECT `email` FROM `users` WHERE `email`='$email';";
    $r = mysqli_query($conn, $sql);
    
    if (mysqli_num_rows($r) === 0) {
        $return_data = array(
            "message" => "Email available"
        );
        echo json_encode($return_data);
    } else {
        $return_data = array(
            "message" => "Email used"
        );
        echo json_encode($return_data);
    }
    
    mysqli_close($conn);
    
?>