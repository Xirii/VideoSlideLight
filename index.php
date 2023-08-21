<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
    <div id="slideshow">
        <video id="video" autoplay muted playsinline>
            <source id="video-source" src="" type="video/mp4">
        </video>
    </div>

    <script>
        const videos = <?php echo json_encode(array_values(array_diff(scandir("videos"), ['.', '..']))); ?>;
    </script>
    <script src="js/scripts.js"></script>
</body>
</html>
