import React from 'react'

import { useCount } from './CountContext'

function Count() {
    const { count, setCount } = useCount(0)
    // return <div>oi</div>
    return (
        <div>
            <br />
            <b>
                <span>Count: </span>
                {count}
            </b>
            <hr />
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    setCount(count - 1)
                }}
            >
                Decrement
            </button>
            <br />
        </div>
    )
}

export default Count
