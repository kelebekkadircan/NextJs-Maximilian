import { getFeaturedEvents } from "@/dummy-data"
import EventList from "@/components/events/EventList";

function HomePage() {

  const featuerdEvents = getFeaturedEvents();


  return (
    <>
      <div>

        <EventList items={featuerdEvents} />
      </div>
    </>
  )
}

export default HomePage