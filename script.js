async function userData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        const container = document.createElement("div");
        container.className = "container-fluid";

        const row = document.createElement("div");
        row.className = "row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2";

        for (let i = 0; i < data.length; i++) {
            const col = document.createElement("div");
            col.className = "col";

            const div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title mb-3">Name: ${data[i].name}</h5>
                    <p class="card-text">Email: ${data[i].email}</p>
                    <p class="card-text">Street: ${data[i].address.street}</p>
                    <p class="card-text">City: ${data[i].address.city}</p>
                </div>
            `;

            col.appendChild(div);
            row.appendChild(col);
        }

        container.appendChild(row);
        document.body.appendChild(container);

    } catch (error) {
        console.log(error);
    }
}

userData();