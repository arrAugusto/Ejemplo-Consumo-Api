function logica() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = xhr.response;
      const div = document.querySelector(".tdbodyTable");
      var htmlforfrontend = "";
      console.log(data);
      var key = 0;
      data.forEach((element) => {
        key = (key + 1) * 1;
        htmlforfrontend +=
          `
            <tr>
                <th scope="row">` +
          key +
          `</th>
                <td>` +
          element.name +
          `</td>
                <td>` +
          element.phone +
          `</td>
                <td>` +
          element.website +
          `</td>
            </tr>
        `;
      });
      console.log(htmlforfrontend);
      div.innerHTML = htmlforfrontend; // Interpreta el HTML
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };
}
