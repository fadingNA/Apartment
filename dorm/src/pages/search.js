import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {searchHistoryAtom} from "../../store";
import {useAtom} from "jotai";
import {encode} from "next/dist/shared/lib/bloom-filter/base64-arraybuffer";
import {router} from "next/client";

export default function AdvanceSearch() {
    const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom)
    const {
        register, handleSubmit, formState: {errors}, setValue
    } = useForm();

    async function submitForm(data) {
        let queryString = "searchBy=true";
        if (data.geoLocation) {
            queryString += `&geolocation=${encodeURI(data.geoLocation)}`
        }
        if (data.medium) {
            queryString += `&medium=${encodeURI(data.medium)}`
        }
        queryString += `&isOnView=${data.isOnView}`;
        queryString += `&isHighlight=${data.isHighlight}`;
        queryString += `&q=${encodeURIComponent(data.q)}`;
        setSearchHistory(
            await addToHistory(queryString)
        )
        router.push(`/apartment?${queryString}`);
    }

    function handleCheck(e) {
        setValue(e.target.name, e.target.checked)
    }

    useEffect(() => {
        register('isOnView');
        register('isHighlight');

    }, [register])

    return (
        <>
        </>
    )
}