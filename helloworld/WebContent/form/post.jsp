<%@page import="co.yedam.common.Employee"%>
<%@page import="co.yedam.common.EmpDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>from/post.jsp</title>
</head>
<body>

	<%
	EmpDAO dao = new EmpDAO();

	Employee emp = new Employee();
	
	
	String empId = request.getParameter("eId");
	String lastname = request.getParameter("eName");
	String mail = request.getParameter("email");
	String job = request.getParameter("jobId");
	String hireDate = request.getParameter("hireDate");
	
	emp.setEmployeeId(Integer.parseInt(empId));
	emp.setLastName(lastname);
	emp.setEmail(mail);
	emp.setJobId(job);
	emp.setHireDate(hireDate);
	
	dao.insertEmp(emp);
	
	
	
	
	%>



</body>
</html>