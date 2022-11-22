import React from 'react'
import axios from "axios";

export const init_load = async () => {
    const url = `http://localhost:1024/init`;
    return axios.get(url).then((res) => {
        return res.data;
    });
};