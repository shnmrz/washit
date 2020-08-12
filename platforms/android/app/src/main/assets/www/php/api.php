<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Sweet Alert -->
    <link rel="stylesheet" href="../assets/sweetalert-master/dist/sweetalert.css">
    <link rel="stylesheet" href="../assets/sweetalert-master/themes/twitter/twitter.css">
    <script src="../assets/sweetalert-master/dist/sweetalert.min.js"></script>
</head>
</html>
<?php

    // database connection
require_once './connect.php';

    /**
     * handle sign in module
     --------------------------------------------------------------
     */
     if(isset($_GET['signin'])){
        $username   =   $_POST['user'];
        $password   =   $_POST['pass'];

        $sql = "SELECT * FROM user WHERE user = '$username' AND pass = '$password'";
        $result = $conn->query($sql);

        if($result->num_rows>0){
            while($rows = $result->fetch_assoc()){
                
                // session variables
                $_SESSION['uid']        =   $rows['uid'];
                $_SESSION['user']       =   $rows['user'];
                $_SESSION['pass']       =   $rows['pass'];
                $_SESSION['usertype']   =   $rows['usertype'];
                

                // local variables
                $username               =   $rows['user'];
                $usertype               =   $rows['usertype'];

            }

            // condition for user type
            if($usertype == 'user'){
                // for student
                ?>
                <script>
                 swal({
                   title: "Welcome Applicant",
                   text: "Have a nice day!",
                   type: "success",
                   timer: 2000,
                   showConfirmButton: false
               },
               function(){
                 location=" ../pages/index.html#home";
             });
         </script>

         <?php
     }
 }else{
    ?>
    <script>
        swal({
            title: "Invalid",
            text: "Account does not exist",
            type: "warning",
            timer: 2000,
            showConfirmButton: false
        },
        function(){
            location="../index.html";
        });
    </script>
    <?php
}
}

    /**
     * handle sign up module
     --------------------------------------------------------------
     */
     else if (isset($_GET['register'])) {

        $email          =   $_POST['cu_email'];
        $uname          =   $_POST['cu_uname'];
        $pass           =   $_POST['cu_pass'];
        $phonenum       =   $_POST['cu_phonenum'];
        $firstname      =   ucfirst($_POST['cu_fname']);
        $middlename     =   ucfirst($_POST['cu_mname']);
        $lastname       =   ucfirst($_POST['cu_lname']);
        $extname        =   ucfirst($_POST['cu_ename']);
        $address        =   $_POST['cu_address'];

        $check = " SELECT * FROM tbl_customer WHERE cu_email = '$email' AND cu_uname = '$uname' ";
        $run_check = mysqli_query($conn,$run_check);

        if ( mysqli_num_rows($run_check) > 0 ) { 

            echo "account already exist";
            
        }

        else {

            $reg = " INSERT INTO tbl_customer (cu_email, cu_uname, cu_pass, cu_phonenum, cu_fname, cu_mname, cu_lname, cu_ename, cu_address) VALUES ('$email','$uname','$pass','$phonenum','$firstname','$middlename','$lastname','$extname','$address') ";
            $run_reg = mysqli_query($conn,$reg); ?>

        <?php }

    }
    /**
     * handle sign out module
     --------------------------------------------------------------
     */
     else if(isset($_GET['signout'])){
        session_start();
        session_destroy();
        unset($_SESSION['user']);

        ?>
        <script>
            swal({
                title: "Thankyou",
                text: "Have a nice day",
                type: "success",
                timer: 2000,
                showConfirmButton: false
            },
            function(){
                location="../index.html";
            });
        </script>
        <?php 
    } 


    /**
     * handle sign in module ADMINNNN
     --------------------------------------------------------------
     */
     else if(isset($_GET['login'])){
        $username   =   $_POST['user'];
        $password   =   $_POST['pass'];

        $sql = "SELECT * FROM admin WHERE user = '$username' AND pass = '$password'";
        $result = $conn->query($sql);

        if($result->num_rows>0){
            while($rows = $result->fetch_assoc()){
                session_start();
                // session variables
                $_SESSION['uid']        =   $rows['uid'];
                $_SESSION['user']       =   $rows['user'];
                $_SESSION['pass']       =   $rows['pass'];
                $_SESSION['usertype']   =   $rows['usertype'];
                

                // local variables
                $username               =   $rows['user'];
                $usertype               =   $rows['usertype'];

            }

            // condition for user type
            if($usertype == 'admin'){
                // for student
                ?>
                <script>
                 swal({
                   title: "Welcome Admin",
                   text: "Have a nice day!",
                   type: "success",
                   timer: 2000,
                   showConfirmButton: false
               },
               function(){
                 location=" http://localhost/system/app/irec/index.html";
             });
         </script>

         <?php
     }
 }else{
    ?>
    <script>
        swal({
            title: "Invalid",
            text: "Account does not exist",
            type: "warning",
            timer: 2000,
            showConfirmButton: false
        },
        function(){
            location=" http://localhost/system/app/irec/login.html";
        });
    </script>
    <?php
}
}

    /**
     * handle sign out module
     --------------------------------------------------------------
     */
     else if(isset($_GET['logout'])){
        session_start();
        session_destroy();
        unset($_SESSION['user']);

        ?>
        <script>
            swal({
                title: "Thankyou",
                text: "Have a nice day",
                type: "success",
                timer: 2000,
                showConfirmButton: false
            },
            function(){
                location="http://localhost/system/app/irec/login.html";
            });
        </script>
        <?php
    } 


    /**
     * handle the error path
     --------------------------------------------------------------
     */
     else{
        echo "ERROR 404 NOT FOUND";
    }
    ?>