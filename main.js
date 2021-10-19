var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Hvala!";
        status.classList.add('success');
        form.reset()
    }).catch(error => {
        status.classList.add('success');
        status.innerHTML = "Oops! Došlo je do pogreške."
    });
}
form.addEventListener("submit", handleSubmit)