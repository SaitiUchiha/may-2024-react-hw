import React, {FC} from "react";
import {IQuote} from "../../models/IQuote";

type QuoteProps = {
    item: IQuote;
}

const Quote:FC<QuoteProps> = ({item}) => {
  return (
      <div>
          <h2>{item.id} - {item.quote}</h2>
          <p>{item.author}</p>
      </div>

  )
}

export default Quote;