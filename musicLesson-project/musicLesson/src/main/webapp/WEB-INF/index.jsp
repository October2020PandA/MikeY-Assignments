<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">

<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
			rel="stylesheet" 
			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
			crossorigin="anonymous">
    <title>Registration Page</title>
</head>
<body>
<div class="container">
<h1 style="text-align:center;">Welcome to Music Lessons.com !</h1>
<div class="row">
<div class="col" style="width:100px; margin:50px; border: 1px solid black;">
    <h1>New User</h1> 
    <p>create an account in the music lessons app</p>
    <p><form:errors path="user.*"/></p>
    
    <form:form method="POST" action="/" modelAttribute="user">
    	<p>
    		<form:label path="firstName">First Name:</form:label>
    		<form:input type="firstName" path="firstName"/>
    	</p>
    	<p>
    		<form:label path="lastName">Last Name:</form:label>
    		<form:input type="lastName" path="LastName"/>
    	</p>
        <p>
            <form:label path="email">Email:</form:label>
            <form:input type="email" path="email"/>
        </p>
        <p>
            <form:label path="password">Password:</form:label>
            <form:password path="password"/>
        </p>
        <p>
            <form:label path="passwordConfirmation">Confirm Password:</form:label>
            <form:password path="passwordConfirmation"/>
        </p>
        <input class="btn btn-primary" type="submit" value="Register!"/>
    </form:form>
    </div>
    <div class="col" style="border: 1px solid black; height:250px; margin-top:20px;">
    <p>already registered?</p>
     <h3>Sign In</h3>
    	<form method="post" action="/login">
        <p>
            <label type="email" for="email">Email:</label>
            <input type="text" id="email" name="email"/>
        </p>
        <p>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"/>
        </p>
        <input class="btn btn-success" type="submit" value="Login!"/>
        </form>
    </div>
    </div>
    </div>
</body>
</html>