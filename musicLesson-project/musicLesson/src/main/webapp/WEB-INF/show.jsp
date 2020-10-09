<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<style>

</style>
 <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOXvNsoQA5jEldZmU_AT0cgD-y2XsnErk&callback=initMap"></script>
<script>
	var map;
	function initMap(){
	
		var mapOptions = {
				zoom: 8,
				center: new google.maps.LatLng(41.6, -87.623177)
		};
	
		map = new google.maps.Map(document.getElementById('map'), mapOptions);
	}
	
google.maps.event.addDomListener(window, 'load', initMap);
</script>
<meta charset="ISO-8859-1">
<title>Lesson Information</title>
		<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
			rel="stylesheet" 
			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
			crossorigin="anonymous">
</head>
<body>
		<div class="container">
			<h1>${ lesson.instrument } Lesson Details</h1>
			<a href="/lessons"class="btn btn-outline-info">All Lessons</a>
			<a href="/logout" class="btn btn-outline-danger">Logout</a>
 			<div class="mid" style="margin-top: 40px;">
			<h3>Date: <fmt:formatDate value="${ lesson.date }" pattern="MMM dd yyyy"/></h3>
			<h3>Address: ${ lesson.address }</h3>
			<h3>Students: <c:if test="${ lesson.students.size() < 1 }">NONE</c:if></h3>
			<ul>
			<c:forEach items="${ lesson.students }" var="student">
				<li>${ student.firstName } ${ student.lastName }</li>			
			</c:forEach>
			</ul>
 			</div>
			<div id="map" style="height:500px; width:700px; margin-left: 400px; margin-top: -100px;"></div>
<!-- 		<hr> -->
<div style="margin-top:-300px; width: 350px;">
		<h3>Edit Details</h3>
		<form:form action="/lessons/update/${lesson.id}" method="post" modelAttribute="lesson">
		<input type="hidden" name="_method" value="put">
		    <div class="form-data">
		        <form:label path="instrument">Lesson Name:</form:label>
		        <form:errors path="instrument"/>
		        <form:input path="instrument"/>
		    </div>
		    <div class="form group">
		        <form:label path="date">Date:</form:label>
		        <form:errors path="date"/>
		        <form:input path="date"/>
		    </div>
		    <div class="form-group">
		        <form:label path="address">Address:</form:label>
		        <form:errors path="address"/>
		        <form:input path="address"/>
		    </div>
		    <button class="btn btn-primary">Edit Details</button>
		</form:form>
		</div> 
	</div>
</body>
</html>