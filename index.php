<!DOCTYPE html>
<html ng-app>
	<head>
		<title>Cinema Database</title>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular.min.js"></script>
	</head>
	<body>
		<?php //require_once(); ?>

		<h1><u>Rechercher un Film</u></h1>


		<label><h3>Titre : </h3></label>
		<input type="text" ng-model="Titre" placeholder="Enter a Movie Title here">

		<h2>Le film recherché : {{Titre}} est actuellement indisponible</h2>

	</body>
</html>