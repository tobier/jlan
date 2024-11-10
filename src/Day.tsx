import { Component, For } from "solid-js";
import Event from "./Event";

interface EventProps {
  title: string;
  start: string;
  end: string;
}

interface DayProps {
  date: string;
  events: EventProps[];
}

const Day: Component<DayProps> = (props) => {
  return (
    <div class="day-column">
      <h2>{props.date}</h2>
      <For each={props.events}>
        {(event) => (
          <Event title={event.title} start={event.start} end={event.end} />
        )}
      </For>
    </div>
  );
};

export default Day;
