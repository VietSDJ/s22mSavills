import http from '../httpService'
class DashBoardBIService {
  public async get(): Promise<any> {
    let res = await http.get('api/services/app/IndustrialPark/GetLinkDashboard')
    return res.data.result
  }
}
export default new DashBoardBIService()
