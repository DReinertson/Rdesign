<?php
/* Set e-mail recipient */
// $myemail  = "denisestoughton17@gmail.com";
// $myemail = "test-za6db@mail-tester.com";
// $myemail = "check-auth-darrynreinertson=gmail.com@verifier.port25.com";
$myemail = "denisestoughton17@gmail.com, darryn@rdesigndev.com";

/* Check all form inputs using check_input function */
$yourname = check_input($_POST['name'], "Enter your name");
$nospace = str_replace(' ', '', $yourname);
$subject  = check_input($_POST['subject'], "Write a subject");
$email    = check_input($_POST['email']);
$sender = ($_POST['email']);
// $from = "root@denisebidesign.com";
$from = "{$nospace}@denisebidesign.com";
$comments = check_input($_POST['message'], "Write your comments");

//Create a boundary for the email.
$boundary = uniqid('np');

// $headers .= "Cc: testsite < BiDesign@denisebidesign.com >\n";
$headers = 'X-Mailer: PHP/' . phpversion();
$headers .= "X-Priority: 1\n"; // Urgent message!
$headers .= "Return-Path: darryn@rdesigndev.com\n"; // Return path for errors
$headers .= "MIME-Version: 1.0\r\n";
// $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= "Content-Type: multipart/alternative;boundary=" . $boundary . "\r\n";
$headers .= 'From:  ' . $from . "\r\n" .
            'Reply-To: '.  $sender . "\r\n";

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}


//here is the content body
$message = "This is a MIME encoded message.";

$message .= "\r\n\r\n--" . $boundary . "\r\n";
$message .= "Content-type: text/plain;charset=utf-8\r\n\r\n";

//Plain text body
$message .= "Hello,\nThis is a text email, the text/plain version.
\n\nRegards,\nYour Name";
$message .= "\r\n\r\n--" . $boundary . "\r\n";

$message .= "Content-type: text/html;charset=utf-8\r\n\r\n";
/* Let's prepare the message for the e-mail */
$message .= '<html><body>';
$message .= "

<p>
Your contact form has been submitted by: <br>

Name: $yourname <br><br>
E-mail: $email <br><br>

Message: <br>
$comments
</p>";

$message .="</body></html>";
//Added in.
$message .= "\r\n\r\n--" . $boundary . "--";

/* Send the message using mail() function */
mail($myemail, $subject, $message, $headers, $from);

/* Redirect visitor to the thank you page */
// header('Location: thanks.html?pop=yes');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>
