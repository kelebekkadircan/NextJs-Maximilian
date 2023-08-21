import { getFeaturedEvents } from "@/dummy-data"
import EventList from "@/components/events/EventList";

function HomePage() {

  const featuerdEvents = getFeaturedEvents();


  return (
    <>
      <div>
        <h1>Burası Ana sayfa</h1>

        <EventList items={featuerdEvents} />
      </div>
    </>
  )
}

export default HomePage