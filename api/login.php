<?php
    require('./includes/headerssss.php');

    $data = json_decode(file_get_contents("php://input"));
    
    $array = json_decode(json_encode($data), true);
    
    $username = $array['username'];
    $password = $array['password'];

    require('./includes/mysqli_connect.php');
    
    $sql = "SELECT `id`, `username`, `password`, `user_level` FROM `users` WHERE `username`='$username';";
    $r = mysqli_query($conn, $sql);
    
    if (mysqli_num_rows($r) === 1) {
        $row = mysqli_fetch_array($r, MYSQLI_ASSOC);

        if (SHA1($password) === $row['password']) {
            $return_data = array(
                "message" => "Login successful", 
                "auth_token" => SHA1('supertoken'),
                "username" => "$username",
                "user_level" => $row['user_level']
            );
            echo json_encode($return_data);
        } else {
            $return_data = array(
                "message" => "The username and passward entered do not match those on file.", 
            );
            echo json_encode($return_data);
        }
    } else {
        $return_data = array(
            "message" => "The username you entered doesn't match any account.", 
        );
        echo json_encode($return_data);
    }
    
    mysqli_close($conn);

?>