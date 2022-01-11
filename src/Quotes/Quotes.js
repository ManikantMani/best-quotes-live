import React, { useEffect, useState } from 'react';
import "./style.css";

const Quotes = () => {

    const [txt, setTxt] = useState();
    const [author, setAuthor] = useState();
    const [rnum, setRnum] = useState(0);

    const getQuotes = async () => {
        const api = "https://type.fit/api/quotes";
        try {
            let data = await fetch(api);
            let realData = await data.json();
            setTxt(realData[rnum].text);
            setAuthor(realData[rnum].author);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        getQuotes();
    })

    return (
        <><div className="container">
            <div className="inner">
                <div className="box">
                    <input type="number"
                        className='input'
                        value={rnum}
                        onChange={(e) => {
                            setRnum(e.target.value);
                        }}
                    />
                    <div className="icon"><i className="fas fa-quote-left"></i></div>
                    <div className='text' >{txt}</div>
                    <div className='author' ><i className="fas fa-feather-alt"></i> "{author}"</div>
                        
                </div>
                
            </div>
            <div className="button">
                        <button className='preQ' onClick={() => { setRnum(rnum - 1) }}><i className="fas fa-arrow-left"></i></button>
                        <button className='nexQ' onClick={() => { setRnum(rnum + 1) }}><i className="fas fa-arrow-right"></i></button>
                    </div>
        </div>
        </>
    );
};

export default Quotes