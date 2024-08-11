import request from "../common/config/request"
import { responseApi } from "../type/response";

export const homeService = {
    getAllUser: async ()=>{
        const response = await request.get<responseApi>("/user/getAll");
        return response.data;
    }
}