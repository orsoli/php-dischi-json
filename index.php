<?php
$songsList = file_get_contents("db/dischi.json");
header("Content-Type:application/JSON");
echo $songsList
?>