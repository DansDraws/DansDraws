
document.getElementById("ticketForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const tickets = parseInt(document.getElementById("tickets").value);
    let numbers = [];

    for (let i = 0; i < tickets; i++) {
        const num = Math.floor(Math.random() * 100) + 1;
        numbers.push(num);
    }

    document.getElementById("ticketNumbers").innerHTML = 
        `<strong>Hi ${name}!</strong><br>Your ticket number(s): ${numbers.join(", ")}`;
});

function drawWinner() {
    const winner = Math.floor(Math.random() * 100) + 1;
    document.getElementById("winnerResult").innerText = "Winning Ticket: #" + winner;
}
