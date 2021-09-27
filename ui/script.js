const container = document.getElementById("container");

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerHTML = '<img src="logo.png"><h4>Voci ma notif !</h4>';

    container.appendChild(notif);

    setTimeout(() => {
        notif.classList.add("remove-notif");
    }, 7000);
    setTimeout(() => {
        notif.remove();
    }, 7500);
}