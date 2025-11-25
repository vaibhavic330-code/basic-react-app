import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ ticket }) {   // ✔ lowercase prop
  return (
    <div className="Ticket">
        <p>Ticket</p>
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      ))}
    </div>
  );
}
