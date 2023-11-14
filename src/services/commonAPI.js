import axios from "axios";

export const commonAPI = async (httpMethod, url, reqBody) => {
    const reqConfig = {
        method: httpMethod,
        url: url,
        data: reqBody,
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const result = await axios(reqConfig);
        return result;
    } catch (err) {
        return err;
    }
};
