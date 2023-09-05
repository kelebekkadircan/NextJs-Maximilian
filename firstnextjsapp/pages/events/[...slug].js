import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '@/dummy-data';
import EventList from '@/components/events/EventList';
import Link from 'next/link';
import ResultsTitle from '@/components/events/results-title';
import ErrorAlert from '@/components/ui/error-alert';
import Head from 'next/head';




const FilteredEventsPage = () => {

    const router = useRouter()

    const filterData = router.query.slug;


    if (!filterData) {
        return <p>Loading...</p>
    }

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = + filteredYear
    const numMonth = + filteredMonth

    const pageHeadData = (
        <Head>
            <title>All Events</title>
            <meta
                name='Description'
                content={`All events for ${numMonth}/${numYear}`}
            />
        </Head>
    )

    if (isNaN(numYear) || isNaN(numMonth) || numMonth > 12 || numMonth < 1) {
        return <Fragment>
            <ErrorAlert>

                <p>Invalid Filter. Please adjust your values</p>
            </ErrorAlert>
            <Link href='/events'>Show all Events  </Link>
        </Fragment>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,

    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return <Fragment>

            <ErrorAlert>
                <p>No events found for the chosen filter!</p>
            </ErrorAlert>
            <Link href='/' > Home</Link>

        </Fragment>
    }

    const date = new Date(numYear, numMonth - 1)


    return (
        <Fragment>
            {/* <Head>
                <title>Filtered Events</title>
                <meta
                    name='Description'
                    content={`All events for ${numMonth}/${numYear}.`}
                />
            </Head> */}
            {pageHeadData}
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />

        </Fragment>

    )
}

export default FilteredEventsPage


/*

import React, { Fragment, useEffect, useState } from 'react'
import useSWR from 'swr';
import { useRouter } from 'next/router'
// import { getFilteredEvents } from '@/dummy-data';
import EventList from '@/components/events/EventList';
import Link from 'next/link';
import ResultsTitle from '@/components/events/results-title';
import ErrorAlert from '@/components/ui/error-alert';
import { getFilteredEvents } from '@/helpers/api-util';





const FilteredEventsPage = (props) => {

    const [loadedEvents, setLoadedEvents] = useState();

    const router = useRouter()

    const filterData = router.query.slug;

    const { data, error } = useSWR('https://nextjs-course-dcaec-default-rtdb.europe-west1.firebasedatabase.app/events.json');

    useEffect(() => {
        if (data) {
            const events = [];

            for (const key in data) {
                events.push(
                    {
                        id: key,
                        ...data[key]
                    }
                )
            }
            setLoadedEvents(events)
        }
    }, [data])


    if (!loadedEvents) {
        return <p className='center'>Loading...</p>
    }

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = + filteredYear
    const numMonth = + filteredMonth

    if (isNaN(numYear) || isNaN(numMonth) || numMonth > 12 || numMonth < 1 || error) {
        return <Fragment>
            <ErrorAlert>

                <p>Invalid Filter. Please adjust your values</p>
            </ErrorAlert>
            <Link href='/events'>Show all Events  </Link>
        </Fragment>
    }



    const filteredEvents = loadedEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
    });


    // const filteredEvents = props.events

    if (!filteredEvents || filteredEvents.length === 0) {
        return <Fragment>
            <ErrorAlert>

                <p>No events found for the chosen filter!</p>
            </ErrorAlert>
            <Link href='/' > Home</Link>

        </Fragment>
    }


    const date = new Date(numYear, numMonth - 1)


    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />

        </Fragment>

    )
}

// export async function getServerSideProps(context) {
//     const { params } = context

//     const filterData = params.slug;

//     const filteredYear = filterData[0]
//     const filteredMonth = filterData[1]

//     const numYear = + filteredYear
//     const numMonth = + filteredMonth

//     if (isNaN(numYear) || isNaN(numMonth) || numMonth > 12 || numMonth < 1) {
//         return {
//             props: {
//                 hasError: true
//             }
//         };
//     }

//     const filteredEvents = await getFilteredEvents({
//         year: numYear,
//         month: numMonth,

//     });

//     return {
//         props: {
//             events: filteredEvents,
//             date: {
//                 year: numYear,
//                 month: numMonth
//             }
//         }
//     }
// }

export default FilteredEventsPage


*/