import { Component, For } from "solid-js";
import scheduleData from "./assets/schedule.json";
import Day from "./Day";

import "./App.css";

const App: Component = () => {
  return (
    <main>
      <h1>Gaming Weekend Schedule</h1>
      <div id="schedule" class="schedule">
        <For each={scheduleData.days}>
          {(day) => <Day date={day.date} events={day.events} />}
        </For>
      </div>
    </main>
  );
};

export default App;
