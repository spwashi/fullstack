import React from "react";
import { IEventContext } from "@features/events/context/context";
import { EventTagWidget } from "@features/events/components/tag/EventTagWidget";
import { EventTag } from '@generated/graphql';

export interface IEventBodyParams {
  event: IEventContext["event"];
}

export function EventDisplayBody({ event }: IEventBodyParams) {
  if (!event) return null;
  const { title, start, end, eventTags } = event;

  return (
    <div className="event-wrapper">
      <article className="event">
        <section>
          <header>
            <span className="title">{title}</span>
          </header>
          <section className="body">
            <div className="start">{start}</div>
            <div className="end">{end}</div>d{" "}
            <ul className="tag-list">
              {eventTags &&
                eventTags.map(
                  (eventTag: EventTag | null) =>
                    eventTag?.tag && (
                      <li key={eventTag.tag.id}>
                        <EventTagWidget tag={eventTag.tag} event={event} />
                      </li>
                    )
                )}
            </ul>
          </section>
        </section>
      </article>
    </div>
  );
}
