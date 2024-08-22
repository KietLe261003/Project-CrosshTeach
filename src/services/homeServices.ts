import request from "../Common/config/request"
import { responseApi } from "../Type/response";

export const homeService = {
    getAllUser: async ()=>{
        const response = await request.get<responseApi>("/user/getAll");
        return response.data;
    }
}