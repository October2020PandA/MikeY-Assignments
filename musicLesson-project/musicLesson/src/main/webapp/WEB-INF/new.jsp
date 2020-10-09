<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
   <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %> 
   <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
		<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
			rel="stylesheet" 
			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
			crossorigin="anonymous">
<title>New Lesson</title>
</head>
<body>
<div class="container">
<h2>Create New Lesson</h2>
<a href="/lessons" class="btn btn-outline-info">All Lessons</a>
<a href="/logout" class="btn btn-outline-secondary">Logout</a>

 <form:form action="/lessons" method="post" modelAttribute="lesson">
    <form:input type="hidden" value="${ user_id }" path="musician" />
    <div class="form-group">
          <form:label path="instrument">Instrument:</form:label>
          <form:errors path="instrument"/>
          <form:input class="form-control" path="instrument" />
      </div>
      <div class="form-group">
          <form:label path="date">Date:</form:label>
          <form:errors path="date"/>
          <form:input type="date" class="form-control" path="date" />
      </div>
      <div class="form-group">
          <form:label path="address">Address:</form:label>
          <form:errors path="address"/>
          <form:input class="form-control" path="address" />
      </div>
      <button class="btn btn-success">Create!</button>
  </form:form>
</div>
</body>
</html>