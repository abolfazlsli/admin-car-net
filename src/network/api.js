import network from "./network"

export const createBrand = async (data) => {
    const response = await network.post("/admins/addbrand" , data)
    return response
}

export const getBrands = async () => {
    const response = await network.get("/admins/getbrands")
    return response
}

export const updateBrand = async (data) => {
    const response = await network.put("/admins/updatebrand" , data)
    return response
}
export const deleteBrand = async (data) => {
    const response = await network.delete("/admins/deletebrand" , data)
    return response
}


