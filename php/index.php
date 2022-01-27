<?php

function get_json($url)
{
    $base = "https://api.github.com/";
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $base . $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt(
        $curl,
        CURLOPT_HTTPHEADER,
        [
            "User-Agent: Mozilla/5.0 (Windows NT 6.1)"
        ]
    );
    $content = curl_exec($curl);
    curl_close($curl);
    return $content;
}

function get_commits($user, $repo, $branch, $per_page)
{
    return json_decode(get_json("repos/$user/$repo/commits?sha=$branch&per_page=$per_page"), true);
}

$commits = get_commits("magento", "magento2", "2.4-develop", 10);


foreach ($commits as $key => $value) {
    $hash = $value["sha"];
    $author = $value["commit"]["author"]["name"];
    $date = $value["commit"]["author"]["date"];
    $message = $value["commit"]["message"];
    echo ("------------------------------------------------\n");
    echo ("Commit $key \n");
    echo ("hash: $hash\n");
    echo ("author: $author\n");
    echo ("message: $message\n");
    echo ("date: $date\n");
    echo ("------------------------------------------------\n\n");
}
