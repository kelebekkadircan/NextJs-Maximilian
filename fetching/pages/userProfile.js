import React from 'react'

function userProfile(props) {


    return (
        <>
            <div>userProfile</div>
            <h1>{props.username}</h1>

        </>
    )
}

export default userProfile;

export async function getServerSideProps(context) {

    const { params, req, res } = context

    console.log('server side code');



    return {
        props: {
            username: 'Kadircan'
        }
    }
}