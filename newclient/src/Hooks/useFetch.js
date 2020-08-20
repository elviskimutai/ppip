import React, { useEffect, useReducer } from "react";

const initialState = {
    data: [],
    IsLoading: true,
    error: ""
};
const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                IsLoading: false,
                data: action.payload,
                error: ""
            };
        case "FETCH_ERROR":
            return {
                IsLoading: false,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
const useFetch = url => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const FetchAll = () => {
        fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+window.sessionStorage.getItem("xtoken")
                }
            })
            .then(res => res.json())
            .then(Data => {
                if (Data.length > 0) {
                    dispatch({ type: "FETCH_SUCCESS", payload: Data });
                } else {
                    dispatch({ type: "FETCH_ERROR", payload: Data.error });
                }
            })
            .catch(err => {
                dispatch({ type: "FETCH_ERROR", payload: err.message });
            });
    }

    return { state, FetchAll };
};

export default useFetch;