<%@page import="co.yedam.common.EmpDAO"%>
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
	EmpDAO dao = new EmpDAO();
	
	String id = request.getParameter("employeeId");
	String pw = request.getParameter("phone");
	String salary = request.getParameter("salary");
	
	dao.updateEmp(id,pw,salary);
	
	
	
	
	/* out.println("<h1>입력값: "+ id+"</h1>");
	out.println("<h1>비번: "+ pw+"</h1>"); */
	
	/* dao.deleteEmp(Integer.parseInt(id)); */
	
	out.println("<h3>정상적으로 수정되었습니다</h3>");
	%>


</body>
</html>