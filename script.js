
let allTickets = [];

document.getElementById("ticketForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const ticketsRequested = parseInt(document.getElementById("tickets").value);

    if (ticketsRequested < 1 || ticketsRequested > 5) {
        alert("Please select 1 to 5 tickets.");
        return;
    }

    let assignedNumbers = [];
    while (assignedNumbers.length < ticketsRequested && allTickets.length < 100) {
        let num = Math.floor(Math.random() * 100) + 1;
        if (!allTickets.includes(num)) {
            allTickets.push(num);
            assignedNumbers.push(num);
        }
    }

    const ticketDisplay = assignedNumbers.length > 0 ? assignedNumbers.join(", ") : "No tickets available.";
    document.getElementById("ticketNumbers").innerHTML = 
        `<strong>Hi ${name}!</strong><br>Your ticket number(s): ${ticketDisplay}`;

    if (assignedNumbers.length > 0) {
        const ticketData = {
            name: name,
            email: email,
            tickets: assignedNumbers
        };
        console.log("New Ticket Booking:", ticketData);  // Can be logged or stored
    }

    // Show payment instructions
    const amount = assignedNumbers.length * 2;
    document.getElementById("amountDue").innerText = `£${amount}`;
    document.getElementById("paymentInstructions").style.display = "block";
});

function drawWinner() {
    if (allTickets.length === 0) {
        document.getElementById("winnerResult").innerText = "No tickets have been assigned yet.";
        return;
    }
    const winnerIndex = Math.floor(Math.random() * allTickets.length);
    const winner = allTickets[winnerIndex];
    document.getElementById("winnerResult").innerText = "Winning Ticket: #" + winner;
}
