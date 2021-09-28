<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>form/get.jsp</title>
</head>
<body>
	<%
	String id = request.getParameter("userId");
	String pw = request.getParameter("userPw");
	out.println("<h1>입력값: "+ id+"</h1>");
	out.println("<h1>비번: "+ pw+"</h1>");
	%>


</body>
</html>