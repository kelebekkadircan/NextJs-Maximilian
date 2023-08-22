import EventList from '@/components/events/EventList'
import { getAllEvents } from '@/dummy-data'
import React from 'react'
import EventsSearch from '@/components/events/Events-Search'
import { useRouter } from 'next/router'

const EventPage = () => {
    const events = getAllEvents()
    const router = useRouter()

    function findEventsHandler(year, month) {

        const fullPath = `/events/${year}/${month}`


        router.push(fullPath)

    }


    return (
        <>
            <div>
                <EventsSearch onSearch={findEventsHandler} />
                <EventList items={events} />
            </div>


        </>
    )
}

export default EventPage