<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 15.01.2019
 * Time: 15:09
 */
    require('../Login/session_check.php');
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>To Do List</title>
        <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

        <!-- Don't use this in production: -->
        <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

        <script type="text/babel" src="script.js"></script>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
              integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <style>
            .box{
                margin-top: 20px;
            }
            .first{
                font-size: 18px;
                padding-top: 40px;
                height: 60vh;
                background-color: antiquewhite;
            }

            .second{
                height: 40vh;
                background-color: #2f2f2f;
                color: #fff;
            }
            .list{
                margin-left: 25%;
                margin-right: 25%;
                position: fixed;
                float: inside;
                width: 50%;
                background-color: rgba(255, 255, 255, 0.9);
                height: 650px;
                overflow: auto;
            }
            .btn{
                font-size: 20px;
                background: none;
            }
            .edit:hover{
                color: yellow;
            }
            .delete:hover, .cancel:hover{
                color: red;
            }
            .save:hover{
                color: #14ff23;
            }
            textarea {
                resize: none;
                width: 350px;
                height: 70px;
            }
        </style>
    </head>
    <body>
        <div class="first" align="center">
            <div class="list">
                <div style="padding-top: 20px;" id="app"></div>
            </div>
        </div>
        <div class="second"></div>
    </body>
</html>