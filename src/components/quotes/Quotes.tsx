import React, {FC} from "react";
import {IQuote} from "../../models/IQuote";
import Quote from "../quote/Quote";

type QuotesProps = {
    quotes: IQuote[];
}

const Quotes:FC<QuotesProps> = ({quotes}) => {
  return (
      <div>
          {
              quotes.map((item, index) => <Quote key={index} item={item}/>)
          }
      </div>

  )
}

export default Quotes;