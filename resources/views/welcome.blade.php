<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Slatarian Snacks</title>
</head>
<body>
    <h1>Slatarian Snacks</h1>
    <ul>
        @foreach ($snacks as $snack)
            <li>{{ $snack }}</li>
        @endforeach
    
    </ul>
</body>
</html>