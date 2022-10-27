import  { AxiosInstance } from "axios"

export default ($axios: AxiosInstance) => (resource: string) => ({
    index() {
      return $axios.get(`/api/${resource}`)
    },
  
    create(payload: Object) {
      return $axios.post(`/api/${resource}`, payload)
    },
  
    show(id: string) {
      return $axios.get(`/api/${resource}/${id}`)
    },
  
  
    update(payload: Object, id: string) {
      return $axios.put(`/api/${resource}/${id}`, payload)
    },
  
    delete(id: string) {
      return $axios.delete(`/api/${resource}/${id}`)
    }
  
  })