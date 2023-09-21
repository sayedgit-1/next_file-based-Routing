import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
  const fraturedEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={fraturedEvents} />
    </div>
  );
}

export default HomePage;
