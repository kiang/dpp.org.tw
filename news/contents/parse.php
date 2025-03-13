<?php
for ($i = 1; $i <= 8547; $i++) {
    $htmlFile = __DIR__ . '/' . $i . '.html';
    if (!file_exists($htmlFile)) {
        $c = file_get_contents('https://www.dpp.org.tw/news/contents/' . $i);
        if (!empty($c)) {
            file_put_contents($htmlFile, $c);
        }
    }
}
