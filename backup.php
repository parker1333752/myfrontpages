<?php
ini_set('display_errors',true);
setcookie('test',time()."abc");
ob_start();
print_r($_COOKIE);
$content = ob_get_contents();
#$content = str_replace(" ", '$nbsp;', $content);
ob_clean();
header("content-type:text/html; charset=utf-8");
echo 'now Cookie is: <br>';
echo nl2br($content);
?>
