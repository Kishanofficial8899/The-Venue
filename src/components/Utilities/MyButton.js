import React from "react";
import Button from "@material-ui/core/Button";
import TicketIcon from "../../resources/Images/Icons/ticket.png";

const MyButton = (Props) => {
  return (
    <Button
      href={Props.Link}
      variant="contained"
      size="small"
      style={{
        background: Props.color,
        color: "white",
        marginTop: Props.margin
      }}
    >
      <img src={TicketIcon} alt="ticket" className="Ticketicon" />
      {Props.text}
    </Button>
  );
};

export default MyButton;
