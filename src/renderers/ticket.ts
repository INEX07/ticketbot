import { Ticket } from '../Database/tables/Tickets';
import { User } from 'eris';
import { dateToString } from '../util';

enum TicketRenderStates {
  OPEN,
  CLOSED,
};

export const TicketRenderer = {
  render: (ticket: Ticket, user: User, state: TicketRenderStates, closer?: User) => ({
    title: `New ticket: #${ticket._id}`,
    color: state === TicketRenderStates.OPEN ? 0xd48f1c : 0xca2d36,
    fields: [ {
      name: 'Ticket creator',
      value: user.username
    }, {
      name: 'Ticket content',
      value: ticket.content
    }, {
      name: 'State',
      value: state === TicketRenderStates.OPEN
        ? 'Open'
        : `Closed by ${closer.username} at ${dateToString(new Date())}`
    } ]
  }),

  States: TicketRenderStates,
};
