import React from "react";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRight from "../icons/arrow-right-icon";
import classes from "./event-item.module.css";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatterdAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          {" "}
          <h2>{title}</h2>
        </div>

        <div className={classes.date}>
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{formatterdAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            {" "}
            <span> Explore Events</span>{" "}
            <span className={classes.icon}>
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
