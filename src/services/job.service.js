import http from "../http-common";

class JobService {
  getAll() {
    return http.get("/jobs");
  }

  getMy() {
    return http.get("/my/jobs");
  }

  get(id) {
    return http.get(`/jobs/${id}`);
  }

  create(data) {
    return http.post("/jobs", data);
  }

  update(id, data) {
    return http.put(`/jobs/${id}`, data);
  }

  delete(id) {
    return http.delete(`/jobs/${id}`);
  }

  deleteAll() {
    return http.delete(`/jobs`);
  }

  findByKeyword(keyword) {
    return http.get(`/my/jobs?q=${keyword}`);
  }
}

export default new JobService();