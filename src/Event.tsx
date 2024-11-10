import { Component } from "solid-js";

interface EventProps {
  title: string;
  start: string;
  end: string;
}

const Event: Component<EventProps> = (props) => {
  return (
    <div class="event-block">
      <strong>{props.title}</strong>
      <span>
        {props.start} - {props.end}
      </span>
    </div>
  );
};

export default Event;
