<? php
    if (isset($_POST['send'])){
        $name=$_POST['name'];
        $email=$_POST['email'];
        $subject=$_POST['subject'];
        $message=$_POST['message'];

        $to='karan.s.vani@gmail.com';
        $subject='Form Submission';
        $message="Name: " .$name."/n"."Wrote the following: ""/n/n".$message;
        $headers="From: ".$email;
        
        if (mail($to, $subject, $message, $headers)){
            echo "<h1>Sent Successfully! Thank you"
        } else{
            echo "Something went wrong!";
        }

    }

?>