const productContainer = document.querySelector('.container-produk')
const productModal = document.querySelector('.modalpopup')
fetch('product.json')
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            div = document.createElement('div')
            div.innerHTML = `
            <div class="produk">
            <div class="nama-produk">
                <p>${data[i].judul}</p>
                <p>${data [i].judultambah}</p>
                <div class="button-produk">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#${data[i].gambar}">
                  Selengkapnya
                </button>
                    <button type="button" id="cart" class="btn btn-outline-dark">Tambah ke Keranjang</button>
                </div>
                <p class="harga"> ${[data[i].harga]} </p>
            </div>
            <div class="gambar-produk ${data[i].gambar}">
                <img src="assett/product/${data[i].gambar}.png" alt="">
            </div>
        </div>`;
            productContainer.appendChild(div)
        }

        for (let j = 0; j < data.length; j++) {
            div = document.createElement('div')
            div.innerHTML =  `<div class="modal fade" id="${data[j].gambar}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
              <div class="modal-content">
                <div class="modal-header ">
                  <h5 class="modal-title" id="exampleModalLabel">${data[j].judul}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex flex-column" style=" margin-left:10%; margin-right:10%;">
                  <img src="/assett/product/${data[j].gambar}.png" class="gambar-produk ${data[j].gambar} " style="margin-left: 28%;" >
                  <p class="fw-semibold text-center fs-4 mt-5">${data[j].juduldeskripsi}</p>
                  <ul>
                    <li class="list-modal">${data[j].deskripsi1} </li>
                    <li class="list-modal">${data[j].Deskripsi2} </li>
                    <li class="list-modal">${data[j].Deskripsi3} </li>
                    <li class="list-modal">${data[j].Deskripsi4} </li>
                    <li class="list-modal">${data[j].Deskripsi5} </li>
                    <li class="list-modal">${data[j].Deskripsi6} </li>
                    <li class="list-modal">${data[j].Deskripsi7} </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          ` ;
            productModal.appendChild(div)
        }
    });