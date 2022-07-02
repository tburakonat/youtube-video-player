import React, { useState, useRef } from "react";

const SearchBar = ({ onTermSubmit }) => {
    const [term, setTerm] = useState("")
    const ref = useRef()

    const onInputChange = e => {
        setTerm(e.target.value)
    }

    const onFormSubmit = e => {
        e.preventDefault()
        ref.current.value = ""
        onTermSubmit(term)
    }
    
    return (
        <div className="ui segment search-bar">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Search For A Video:</label>
                    <input type="text" onChange={onInputChange} value={term} ref={ref} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar