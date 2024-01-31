import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'b0444f3fca1e4b9fa49f66da6d434b57'
    }
})