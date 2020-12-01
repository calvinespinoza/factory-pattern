enum EventType {
    CONCERT = "Concert",
    GAMING = "Gaming",
    PARTY = "Party"
}

abstract class TicketFactory {
    public abstract createTicket(): Ticket; //FACTORY METHOD

    public getTicketInformation(): string {
        const product = this.createTicket();
        return `Factory: The ticket's price is ${product.calculatePrice()}`;
    }
}

class ConcertTicketFactory extends TicketFactory {
    public createTicket(): Ticket {
        return new ConcertTicket();
    }
}

class GamingTicketFactory extends TicketFactory {
    public createTicket(): Ticket {
        return new GamingTicket();
    }
}

class PartyTicketFactory extends TicketFactory {
    public createTicket(): Ticket {
        return new PartyTicket();
    }
}

interface Ticket {
    calculatePrice(): number;
}

class ConcertTicket implements Ticket {
    public calculatePrice(): number {
        return 200.00;
    }
}

class GamingTicket implements Ticket {
    public calculatePrice(): number {
        return 120.00;
    }
}

class PartyTicket implements Ticket {
    public calculatePrice(): number {
        return 50.00;
    }
}

function clientCode(eventType: EventType) {
    var creator: TicketFactory;
    switch (eventType) {
        case EventType.CONCERT:
            creator = new ConcertTicketFactory();
            break;
        case EventType.GAMING:
            creator = new GamingTicketFactory();
            break;
        case EventType.PARTY:
            creator = new PartyTicketFactory();
            break;
    }
    return creator.getTicketInformation();
}

export { clientCode, EventType }