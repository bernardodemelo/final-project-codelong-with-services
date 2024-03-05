import axios from "axios";

class PlanetsService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_SERVER_URL || "http://localhost:5005",
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/planets
  createPlanet = (requestBody) => {
    return this.api.post("/api/planet", requestBody);
  };

  // GET /api/planets
  getAllPlanets = () => {
    return this.api.get("/api/planets");
  };

  // GET /api/planets/:id
  getPlanet = (id) => {
    return this.api.get(`/api/planets/${id}`);
  };

  // PUT /api/planets/:id
  updatePlanet = (id, requestBody) => {
    return this.api.put(`/api/planets/${id}`, requestBody);
  };

  // DELETE /api/planets/:id
  deletePlanet = (id) => {
    return this.api.delete(`/api/planets/${id}`);
  };
}

// Create one instance object
const planetsService = new PlanetsService();

export default planetsService;
