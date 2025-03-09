const baseurl = "http://localhost:5000/api"

const network = {
    post : async (url , data) => {
        const response = await fetch(baseurl + url , {
            method : "POST",
            body : JSON.stringify(data)
        })
        return response.json()
    },
    get : async (url) => {
        const response = await fetch(baseurl + url)
        return response.json()
    } ,
    put : async (url , data) => {
        const response = await fetch(baseurl + url , {
            method : "PUT",
            body : JSON.stringify(data)
        })
        return response.json()
    },
    delete : async (url, data) => {
        const response = await fetch(baseurl + url , {
            method : "DELETE",
            body : JSON.stringify(data)
        })
        return response.json()
    }
}

export default network;