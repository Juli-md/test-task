import axios from 'axios'

class PlayersDataService {
    getAll() {
      return axios.get('api/players/all', {headers: {"Content-type": "application/json"}})
    }
}
  
export default new PlayersDataService();