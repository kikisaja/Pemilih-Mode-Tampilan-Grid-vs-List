// --- 1. AMBIL ELEMEN DOM ---
const productsContainer = document.getElementById("products-container");
const btnGrid = document.getElementById("btn-grid");
const btnList = document.getElementById("btn-list");

// --- 2. FUNGSI UNTUK MENGUBAH TAMPILAN ---
function setGridView() {
    // Ubah class di container utama
    productsContainer.classList.remove("list-view");
    productsContainer.classList.add("grid-view");

    // Atur status aktif pada tombol
    btnGrid.classList.add("active");
    btnList.classList.remove("active");
}

function setListView() {
    // Ubah class di container utama
    productsContainer.classList.remove("grid-view");
    productsContainer.classList.add("list-view");

    // Atur status aktif pada tombol
    btnList.classList.add("active");
    btnGrid.classList.remove("active");
}

// --- 3. EVENT LISTENERS ---
btnGrid.addEventListener("click", setGridView);
btnList.addEventListener("click", setListView);
