import axios from 'axios'

axios.defaults.baseURL = location.hostname === 'localhost' ? '/api' : 'https://api.warface.ru'
axios.defaults.withCredentials = false
