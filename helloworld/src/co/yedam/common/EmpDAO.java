package co.yedam.common;

import java.sql.SQLException;

public class EmpDAO extends DAO {

	
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
