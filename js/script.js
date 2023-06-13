

for (i = 0; i < bancoDeDados.length; i++) {
  document.getElementById("app").innerHTML += `
  
  <div class="col-6 col-md-4 col-lg-3">
  <div class="card mb-4" id="card-ratio">
      <img src="${bancoDeDados[i].url}" class="card-img-top" alt="">
      <div class="card-body">
          <h5 class="card-title">${bancoDeDados[i].titulo}</h5>

          <!-- Button trigger modal -->
          <div class="d-flex justify-content-end  ">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                Ver Mais
            </button>
          </div>

      </div>
  </div>
</div>


<!-- Modal -->
<div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title fs-5" id="exampleModalLabel">${bancoDeDados[i].titulo}</h2>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <div class="card m-0 p-0">
                  <img src="${bancoDeDados[i].url}" class="card-img-top" alt="">
                  <div class="card-body">
                      <p class="card-text">${bancoDeDados[i].descricao}</p>
                  </div>
              </div>

          </div>

      </div>
  </div>
</div>


    `;
}
