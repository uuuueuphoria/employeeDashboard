// productionUrl = 'https://employee-manager-dashboard.herokuapp.com'
// developmentUrl = 'http://localhost:5000/

const api = {
  getAllDepartments: 'http://localhost:5000/api/departments/',
  // Snippet #5
  getDepartment: (name) => {
    return `http://localhost:5000/api/departments/name/${name}`;
  },
  deleteEmployee: (id) => {
    return `http://localhost:5000/api/departments/employee/id/${id}`;
  },
  updateEmployee: `http://localhost:5000/api/departments/employee/update`,
};

export default api;
