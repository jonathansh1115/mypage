<?php
    require('./includes/headerssss.php');
    
    $data = json_decode(file_get_contents("php://input"));
    
    $array = json_decode(json_encode($data), true);
    
    $username = $array['username'];
    $email = $array['email'];
    $password = $array['password'];

    require('./includes/mysqli_connect.php');

    $sql = "INSERT INTO `users` (`id`, `username`, `email`, `password`, `user_level`, `time_created`) VALUES (NULL, '$username', '$email', SHA1('$password'), 1, current_timestamp());";
    
    if (mysqli_query($conn, $sql)) {
        $return_data = array(
            "message" => "Signup successful", 
            "auth_token" => SHA1('supertoken'),
            "username" => "$username"
        );
        echo json_encode($return_data);
    } else {
        echo "ERROR: Could not execute $sql. " . mysqli_error($conn);
    }
    
    mysqli_close($conn);
    
?>