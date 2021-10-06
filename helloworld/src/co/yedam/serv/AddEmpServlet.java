package co.yedam.serv;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.EmpDAO;
import co.yedam.common.Employee;

/**
 * Servlet implementation class AddEmpServlet
 */
@WebServlet("/AddEmpServlet")
public class AddEmpServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AddEmpServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String id = request.getParameter("id");
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String hire = request.getParameter("hire");
		String job = request.getParameter("job");

		System.out.println("id: "+id +",name: "+name +",email: "+email+",hire: "+hire+",job: "+job);
		
		Employee emp = new Employee();
		emp.setEmployeeId(Integer.parseInt(id));
		emp.setLastName(name);
		emp.setEmail(email);
		emp.setHireDate(hire);
		emp.setJobId(job);
		
		EmpDAO dao = new EmpDAO();
		PrintWriter out = response.getWriter();
		if(dao.insertEmp(emp)) {
			out.println("{\"id\":\""+id+"\", \"name\":\""+name+"\", \"email\":\""+email+"\", \"hire\":\""+hire+"\", \"job\":\""+job+"\"}");			
		} else {
			out.println("{\"msg\":\"실행중 에러가 발생\"}");
		}
		

		// {"id":"?", "name":"?", "email":"?", "hire":"?", "job":"?"}

		
	}

}
