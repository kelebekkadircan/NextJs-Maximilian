import EventList from '@/components/events/EventList'
// import { getAllEvents } from '@/dummy-data'
import { getAllEvents } from '@/helpers/api-util'
import React, { Fragment } from 'react'
import EventsSearch from '@/components/events/Events-Search'
import { useRouter } from 'next/router'
import Head from 'next/head'

const EventPage = (props) => {
    // const events = getAllEvents()
    const router = useRouter()

    const { events } = props;

    function findEventsHandler(year, month) {

        const fullPath = `/events/${year}/${month}`


        router.push(fullPath)

    }


    return (
        <>
            <Fragment>
                <Head>
                    <title>All Events</title>
                    <meta
                        name='Description'
                        content="Find a lot of great events that allow you to evolve.."
                    />
                </Head>
                <EventsSearch onSearch={findEventsHandler} />
                <EventList items={events} />
            </Fragment>


        </>
    )
}

export async function getStaticProps() {

    const events = await getAllEvents()

    return {
        props: {
            events: events
        },
        revalidate: 60
    }

}

export default EventPage