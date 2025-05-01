import axios from 'axios'

axios.defaults.baseURL = 'https://api.warface.ru'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.withCredentials = true
