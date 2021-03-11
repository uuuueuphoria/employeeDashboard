// productionUrl = 'https://employee-manager-dashboard.herokuapp.com'
// developmentUrl = 'http://localhost:5000/

const api = {
  getAllDepartments:
    //'https://employee-dashboard-wanlun.herokuapp.com/api/departments/',
    // Snippet #5
    'https://employee-dashboard-wanlun.herokuapp.com/',
  getDepartment: (name) => {
    return `https://employee-dashboard-wanlun.herokuapp.com/api/departments/name/${name}`;
  },
  deleteEmployee: (id) => {
    return `https://employee-dashboard-wanlun.herokuapp.com/api/departments/employee/id/${id}`;
  },
  updateEmployee: `https://employee-dashboard-wanlun.herokuapp.com/api/departments/employee/update`,
};

export default api;
