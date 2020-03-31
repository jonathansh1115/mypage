<?php
    require('./includes/headerssss.php');

    $data = json_decode(file_get_contents("php://input"));
    
    $array = json_decode(json_encode($data), true);
    
    $cardtitle = $_POST['cardtitle'];
    $cardtext = $_POST['cardtext'];
    
    
    $response = array();
    $upload_dir = 'uploads/card/';
    $server_url = 'http://localhost:80/mypage/api';
    
    if($_FILES['image']) {
        
        $image_name = $_FILES["image"]["name"];
        $image_tmp_name = $_FILES["image"]["tmp_name"];
        $error = $_FILES["image"]["error"];

        if($error > 0){
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!"
            );
            echo json_encode($response);
        } else {
            $random_name = rand(1000,1000000)."-".$image_name;
            $upload_name = $upload_dir.strtolower($random_name);
            $upload_name = preg_replace('/\s+/', '-', $upload_name);

            // break

            $url = $server_url."/".$upload_name;

            // insert into database
            require('./includes/mysqli_connect.php');

            $r = mysqli_query($conn, "SELECT * FROM `carousel_img`");

            if (mysqli_num_rows($r) <= 29) {
                $sql = "INSERT INTO `card` (`card_id`, `card_img_link`, `card_title`, `card_text`, `date_added`) 
                VALUES (NULL, '$url', '$cardtitle', '$cardtext', current_timestamp());";
            
                if (mysqli_query($conn, $sql)) {
                    if (move_uploaded_file($image_tmp_name , $upload_name)) {

                        $response = array(
                            "status" => "success",
                            "error" => false,
                            "message" => "File uploaded successfully",
                            "url" => $url,
                        );
                        echo json_encode($response);
                    } else {
                        $response = array(
                            "status" => "not successful",
                            "error" => false,
                            "message" => "Something went wrong while moving img to new directory",
                            "url" => $url,
                        );
                        echo json_encode($response);
                    }
                } else {
                    $response = array(
                        "status" => "no success",
                        "error" => false,
                        "message" => "Cannot connect to server",
                        "url" => $url,
                        "problem" => mysqli_error($conn)
                    );
                    echo json_encode($response);
                }

            } else {
                $response = array(
                    "status" => "error",
                    "error" => true,
                    "message" => "Maximum image uploaded!"
                );
                echo json_encode($response);
            }
        }
    } else {
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "No file was sent!"
        );
        echo json_encode($response);
    }
    
    // mysqli_close($conn);
?>