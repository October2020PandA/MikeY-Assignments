<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
   <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %> 
   <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
   <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
		<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
			rel="stylesheet" 
			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
			crossorigin="anonymous">
<title>Successful Enrollment</title>
</head>
<body>
	<div class="container">
		<a href="/lessons">All Lessons</a> |
		<a href="/logout">Logout</a>
		<h3><c:forEach items="${ lesson.students }" var="student">
				${ student.firstName } ${ student.lastName }			
			</c:forEach></h3>
		<p>You have successfully enrolled in the ${ lesson.date }" ${ lesson.instrument } lesson</p>
	</div>
</body>
</html>