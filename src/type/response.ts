import { User } from "./user";

export interface responseApi {
    code: Number,
    message: String,
    data: User[]
}