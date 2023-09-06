// import { getFeaturedEvents } from "@/dummy-data"
import EventList from "@/components/events/EventList";
import { useEffect } from "react";
import { getFeaturedEvents } from "@/helpers/api-util";
import Link from "next/link";
import Head from "next/head";
import NewsletterRegistration from "@/components/input/newsletter-registration";

function HomePage(props) {

  // const featuerdEvents = getFeaturedEvents();




  return (
    <>
      <div>
        <Head>
          <title>NextJs Events</title>
          <meta name="Description" content="find a lot of greate events that allow you to evolve" />
        </Head>
        <NewsletterRegistration />
        <EventList items={props.events} />


      </div>
    </>
  )
}

export async function getStaticProps() {

  const featuerdEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuerdEvents
    },
    revalidate: 1800
  }
}

export default HomePage