import React, {useEffect, useState} from "react";
import PaginationComponent from "../components/pagination/PaginationComponent";
import {Outlet, useSearchParams} from "react-router-dom";
import {apiService} from "../services/api.service";
import Quotes from "../components/quotes/Quotes";
import {IQuote} from "../models/IQuote";


const QuotesPage = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const [quotes, setQuotes] = useState<IQuote[]>([]);
    const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        const page = query.get('page');
        if (page) {
            apiService.quotes
                .getAll(+page)
                .then(value => {
                    setQuotes(value.quotes);
                    setFlag(value.islastId)
                });
        }


    }, [query]);

    return (
        <div>
            <Quotes quotes={quotes}/>
            <PaginationComponent flag={flag}/>
            <Outlet/>
        </div>

    )
}

export default QuotesPage;