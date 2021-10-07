package co.yedam.serv;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.EmpDAO;
import co.yedam.common.Employee;

/**
 * Servlet implementation class EmpjsonServlet
 */
@WebServlet("/empjsonServlet.json")
public class empjsonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public empjsonServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		response.getWriter().append("Served at: ").append(request.getContextPath()).append("<h1>hong</h1>"); // 태그는 안먹음
		PrintWriter out = response.getWriter() ;
		EmpDAO dao = new EmpDAO() ;
		List<Employee> list = dao.getEmpList() ;
		
		// PrintWriter out = response.getWriter() ; 치고 out.print("<h1>JSON</h1>") 이렇게 하면 태그 먹음
		// JSON data타입 object { "name":"Hongkildong" , "age":15 , "score":80 }
		// out.print("{ \"name\":\"Hongkildong\" , \"age\":15 , \"score\":80 }") ; // 위에꺼 복사 붙여넣기 하면 알아서 이스케이프 문자 적어짐
		// {"empId":"?" , "lname":"?" , "email":"?" , "hireDate":"?" , "job":"?"}
		
		int cnt = 0, lastCnt = list.size();
		
		out.println("[") ;
		for (Employee emp : list ) {
			out.println("{\"empId\":\""+emp.getEmployeeId()
			+"\",\"lname\":\""+emp.getLastName()
			+"\", \"email\":\""+emp.getEmail()
			+"\", \"hireDate\":\""+emp.getHireDate()
			+"\", \"job\": \""+emp.getJobId()+"\"}");
		
			// , 마지막 건 (,)
			cnt++;
			if(cnt != lastCnt) {
				out.print(",");
			}
		
		}
		out.println("]") ;
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
