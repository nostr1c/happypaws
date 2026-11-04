

$(function () {
    const tableBody = document.getElementById("adoption-table").querySelector("tbody");
    
    let html = "";
    for (let i = 0; i < 50; i++) {
        const dog = dogs[i % dogs.length];
        
        html += `
          <tr>
            <td>
              <img src="./images/adoption/${dog.img}" class="rounded-circle" width="60" height="60" alt="${dog.alt}">
            </td>
            <td>${dog.name}</td>
            <td>${dog.breed}</td>
            <td>${dog.age}</td>
            <td>${dog.gender}</td>
            <td>
              <span class="badge bg-success">${dog.status}</span>
            </td>
            <td>
              <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#adoption-modal">
                <i class="bi bi-eye"></i>
                Read more
              </button>
            </td>
          </tr>
        `;
    }
    
    tableBody.innerHTML = html;

    $('#adoption-table').DataTable();

});
