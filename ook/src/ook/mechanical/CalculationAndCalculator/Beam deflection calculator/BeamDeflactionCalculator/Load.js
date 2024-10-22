import React from 'react'

export default function Load(props) {
    return (
        <>
            <h3 className='color-white text-aligh-center'>Input</h3>
            {props.PointLoad}

            {props.AddPointLoad}
            <br />
            <h3 style={{ marginBottom: '10px' }}>Distributed Load</h3>

            {props.AdddistributedLoads}
            {props.AddDistributedLoad}
            {props.Analysisbtn}


            <br />
            <br />
            <br />
        </>
    )
}
