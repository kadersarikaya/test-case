import Navbar from "@/components/navbar/Navbar";
import TicketList from "@/components/ticketList/TicketList";
import React from "react";

const page = () => {
  return (
    <div>
        <Navbar />
        <TicketList />
    </div>
  );
};

export default page;
