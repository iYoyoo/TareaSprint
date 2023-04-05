$(function () {
  $("#botonRegistrar").click(function () {
    alert("Se ha registrado el paciente");
    $("#inputNombre").val("");
    $("#inputApellido").val("");
    $("#email").val("")
    $("#phone").val("")
    $("#adress").val("")
    $("#pais").val("")
    $("#ciudad").val("")
  });
});
var useradmin = "pepito";
var passadmin = "pepe1234";

function showForm() {
  const examType = document.getElementById("exam-type").value;
  var formHtml = document.createElement('form');
  switch (examType) {
    case "hemograma":
      formHtml.innerHTML = `
        <label for="hemograma-dato1">Dato 1:</label>
        <input type="text" id="hemograma-dato1">
        <label for="hemograma-dato2">Dato 2:</label>
        <input type="text" id="hemograma-dato2">
        <label for="hemograma-dato3">Dato 3:</label>
        <input type="text" id="hemograma-dato3">
      `;
      break;
    case "perfil-lipidico":
      formHtml.innerHTML = `
        <label for="perfil-lipidico-dato1">Dato 1:</label>
        <input type="text" id="perfil-lipidico-dato1">
        <label for="perfil-lipidico-dato2">Dato 2:</label>
        <input type="text" id="perfil-lipidico-dato2">
        <label for="perfil-lipidico-dato3">Dato 3:</label>
        <input type="text" id="perfil-lipidico-dato3">
      `;
      break;
    case "colesterol":
      formHtml.innerHTML = `
        <label for="colesterol-dato1">Dato 1:</label>
        <input type="text" id="colesterol-dato1">
        <label for="colesterol-dato2">Dato 2:</label>
        <input type="text" id="colesterol-dato2">
        <label for="colesterol-dato3">Dato 3:</label>
        <input type="text" id="colesterol-dato3">
      `;
      break;
    case "trigliceridos":
      formHtml.innerHTML = `
        <label for="trigliceridos-dato1">Dato 1:</label>
        <input type="text" id="trigliceridos-dato1">
        <label for="trigliceridos-dato2">Dato 2:</label>
        <input type="text" id="trigliceridos-dato2">
        <label for="trigliceridos-dato3">Dato 3:</label>
        <input type="text" id ="trigiceridos-dato3">`;
      break;
    case "orina":
      formHtml.innerHTML = `
        <label for="orina-dato1">Dato 1:</label>
        <input type="text" id="orina-dato1">
        <label for="orina-dato2">Dato 2:</label>
        <input type="text" id="orina-dato2">
        <label for="orina-dato3">Dato 3:</label>
        <input type="text" id="orina-dato3"></input>`;
      break;
    case "perfil-bioquimico":
      formHtml.innerHTML = `
        <label for="bioquimico-dato1">Dato 1:</label>
        <input type="text" id="bioquimico-dato1">
        <label for="bioquimico-dato2">Dato 2:</label>
        <input type="text" id="bioquimico-dato2">
        <label for="bioquimico-dato3">Dato 3:</label>
        <input type="text" id="bioquimico-dato3"></input>`;
      break
    case "coagulacion":
      formHtml.innerHTML = `
        <label for="coagulacion-dato1">Dato 1:</label>
        <input type="text" id="coagulacion-dato1">
        <label for="coagulacion-dato2">Dato 2:</label>
        <input type="text" id="coagulacion-dato2">
        <label for="coagulacion-dato3">Dato 3:</label>
        <input type="text" id="coagulacion-dato3"></input>`;
      break;
  }
  document.getElementById('form-container').appendChild(formHtml);
}


function ingreso_consulta() {
  const opt = document.getElementsByid("boton1").value();
  switch (opt) {
    case "ingreso":
      valoropcion.innerHTML = `
        <div class="container">
        <div class="row">
        <div class="col-12">
        <label for="exam-type">Tipo de examen:</label>
        <select id="exam-type" onchange="showForm()"> 
          <option value="">Seleccione un examen</option>
          <option value="hemograma">Hemograma</option>
          <option value="orina">Perfil Lipídico</option>
          <option value="colesterol">Colesterol</option>
          <option value="trigliceridos">Triglicéridos</option>
          <option value="orina">Orina</option>
          <option value="perfil-bioquimico">Perfil Bioquímico</option>
          <option value="coagulacion">Coagulación</option>
        </select>
        </div>
        </div>
        <div class="row">
        <div class="col-12">
        <div id="form-container"></div>
        </div>
        </div>
        </div>`;
      break;
    case "consulta":
      valoropcion.innerHTML = ``;
      break;

  }
  document.getElementById('containerge').appendChild(valoropcion);
}