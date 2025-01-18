const makeReservationButton = document.getElementById('mr');
makeReservationButton.addEventListener('click', reserve);

function reserve(e) {
  
  e.preventDefault();
  const c_name = document.getElementById("cus_name");
  const c_tableno = document.getElementById("table_number");
  const c_date = document.getElementById("dt");
  const c_time = document.getElementById("tm");

  const cus_table = document.getElementById("res_table");
  const row = cus_table.insertRow(-1);


  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  cell1.innerHTML = `<p>${c_name.value}</p>`;
  cell2.innerHTML = `<p>${c_tableno.value}</p>`;
  cell3.innerHTML = `<p>${c_date.value}</p>`;
  cell4.innerHTML = `<p>${c_time.value}</p>`;

  alert("YOUR SEAT IS RESERVED!");
}


const d1 = new Date();
document.getElementById("tday1").innerHTML = d1.getDate() + "-" + Number(d1.getMonth() + 1) + "-" + d1.getFullYear();

const d2 = new Date();
document.getElementById("tday2").innerHTML = d2.getDate() + "-" + Number(d2.getMonth() + 1) + "-" + d2.getFullYear();
