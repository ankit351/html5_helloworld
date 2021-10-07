package co.yedam.common;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EmpDAO extends DAO {

	public boolean checkId(String id) {
		connect();
		String sql = "select * from empl_demo where employee_id = ?";
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			rs = psmt.executeQuery();
			
			if(rs.next()) {
				return false;
			} else {
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		} finally {
			disconnect();
		}
	
	}
	
	
	
	
	
	
	
	
	
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
			System.out.println(i + "건 등록됨");
			return true;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		} finally {
			disconnect();
		}

	}

	public boolean updateEmp(Employee emp) {
		connect();
		String sql = "update empl_demo set employee_id = ?, last_name = ?, email = ?, job_id = ?, hire_date = ?"
				+ " where employee_id = ?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, emp.getEmployeeId());
			psmt.setString(2, emp.getLastName());
			psmt.setString(3, emp.getEmail());
			psmt.setString(4, emp.getJobId());
			psmt.setString(5, emp.getHireDate());
			psmt.setInt(6, emp.getEmployeeId());

			int i = psmt.executeUpdate();
			System.out.println(i + "건 수정됨.");
			return true;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		} finally {
			disconnect();
		}

	}

	public void deleteEmp(int empId) {

		connect(); // conn = dbconnecton.Connection
		String sql = "delete from empl_demo where employee_id = " + empId;

		try {
			stmt = conn.createStatement();
			int r = stmt.executeUpdate(sql);
			System.out.println(r + "건 삭제됨.");

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			disconnect();
		}

	}

	public int deleteEmployee(String empId) {
		connect();
		String sql = "delete from empl_demo where employee_id = " + empId;

		try {
			stmt = conn.createStatement();
			int r = stmt.executeUpdate(sql);

			System.out.println(r + "건 삭제됨.");
			return Integer.parseInt(empId);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return -1;
		} finally {
			disconnect();
		}

	}

	public List<Employee> getEmpList() {
		connect();
		List<Employee> list = new ArrayList<>();

		String sql = "select * from empl_demo order by 1";
		try {
			stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
			while (rs.next()) {
				Employee emp = new Employee();
				emp.setEmployeeId(rs.getInt("employee_id"));
				emp.setLastName(rs.getString("last_name"));
				emp.setEmail(rs.getString("email"));
				emp.setHireDate(rs.getString("hire_date"));
				emp.setJobId(rs.getString("job_id"));

				list.add(emp);

			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}
	
	
	
	

}
