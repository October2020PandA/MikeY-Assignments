<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %> 
    <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
			rel="stylesheet" 
			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
			crossorigin="anonymous">
<meta charset="ISO-8859-1">
<title>Music Lessons</title>
</head>
<body>
	<div class="container">
			<h1>Welcome to Music Lessons, <c:out value="${user.firstName}" />!</h1>
			<a href="/logout" class="btn btn-outline-secondary">Logout</a>
			<hr />
			<table class="table table-dark table-hover">
			<thead>
			<tr>
			<th>Instrument</th>
			<th>Date</th>
			<th>Attending</th>
			<th>Action</th>
			</tr>
			</thead>
			<tbody>
			<c:forEach items="${lessons}" var="lesson">
			<tr>
			<td><a href="/lessons/${lesson.id}">${lesson.instrument}</a></td>
			<td><fmt:formatDate value="${lesson.date}" pattern="MMM dd yyyy"/></td>
			<td>${lesson.students.size()}</td>
			<c:choose>
			<c:when test="${lesson.musician.id == user.id}">
			<td>
			<form action="lessons/delete/${lesson.id}" method="POST">
			<input type="hidden" name="_method" value="delete">
			<input class="btn btn-danger" type="submit" value="Delete"/>
			</form>
			</td>
			</c:when>
			<c:when test="${lesson.students.contains(user) }">
			<td><a href="lessons/remove/${lesson.id}" class="btn btn-warning">Un-Enroll</a></td>
			</c:when>
			<c:otherwise>
			<td><a href="lessons/enroll/${lesson.id}" class="btn btn-success">Enroll</a></td>
			</c:otherwise>
			</c:choose>
			</tr>
			</c:forEach>
			</tbody>
			
			</table>
			<a href="lessons/new" class="btn btn-primary">New Lesson</a>
</div>
</body>
</html>