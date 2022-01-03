import http from "../http-common";
import { getToken } from "../utils/common";

const config = {
  headers: { Authorization: `Bearer ${getToken()}` }
};

class JobService {
  getAll(params) {
    return http.get("/jobs", {params});
  }

  login(data) {
    return http.post("/login", data)
  }

  getMy(params) {
    return http.get("/my/jobs", {params});
  }

  logout() {
    return http.post("/logout", config)
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