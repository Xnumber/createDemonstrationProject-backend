<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" href="/favicon2.ico">
		<title>前端開發 - Front End Development</title>
		<style>@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');</style>
		<script crossorigin src="https://unpkg.com/react@^18.2.0/umd/react.production.min.js"></script>
		<script crossorigin src="https://unpkg.com/react-dom@^18.2.0/umd/react-dom.production.min.js"></script>
		<script defer="defer" src={{secure_asset("assets/main.js")}}></script>
        <style>#root{height:100%;}</style>
    </head>
    <body>
       <div id="root"></div>
    </body>
</html>