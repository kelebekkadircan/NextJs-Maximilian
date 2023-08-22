import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '@/dummy-data';
import EventList from '@/components/events/EventList';
import Link from 'next/link';
import ResultsTitle from '@/components/events/results-title';
import ErrorAlert from '@/components/ui/error-alert';




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
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />

        </Fragment>

    )
}

export default FilteredEventsPage