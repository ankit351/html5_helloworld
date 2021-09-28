package co.yedam.common;

import java.sql.SQLException;

public class EmpDAO extends DAO {

	public boolean insertEmp(Employee emp) {
		
		connect();
		
		String sql = "insert into empl_demo (employee_id, last_name, email, job_id, hire_date) values(?,?,?,?,?)";
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, emp.getEmployeeId());
			psmt.setString(2, emp.getLastName());
			psmt.setString(3, emp.getEmail());
			psmt.setString(4, emp.getJobId());
			psmt.setString(5, emp.getHireDate());
			
			int i = psmt.executeUpdate();
			System.out.println(i+"건 등록됨");
			return true;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}finally {
			disconnect();
		}
		
		
	}
	
	
	public void updateEmp(String id, String phone, String salary) {
		connect();
		String sql = "update empl_demo set phone_number=?, salary=? where employee_id=?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, phone);
			psmt.setString(2, salary);
			psmt.setString(3, id);
			
			int i = psmt.executeUpdate();
			System.out.println(i + "건 수정됨.");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			disconnect();
		}
		
	}
	
	
	public void deleteEmp(int empId) {

		connect(); // conn = dbconnecton.Connection
		String sql = "delete from empl_demo where employee_id = "+ empId;
		
		try {
			stmt = conn.createStatement();
			int r = stmt.executeUpdate(sql);
			System.out.println(r + "건 삭제됨.");
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			disconnect();
		}
		
	}
	
	

}
