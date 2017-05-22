<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>

<script>
  function buildTable(data) {
    var table = document.createElement("table");
    var trHead = document.createElement("tr");
    
    for (var i=0;i<Object.keys(data[0]).length;i++) {
      var th = document.createElement("th");
      var thtext = document.createTextNode(Object.keys(data[0])[i]);
      th.appendChild(thtext);
      trHead.appendChild(th);
    }
    table.appendChild(trHead);
    
    for (var i=0;i<Object.keys(data[0]).length;i++) {
      var trData = document.createElement("tr");
      
      for (var j=0;j<Object.keys(data[0]).length;j++) {
        var td = document.createElement("td");
        var tdtext = document.createTextNode(data[i][Object.keys(data[i])[j]]);
      	td.appendChild(tdtext);
        trData.appendChild(td);
      }
      table.appendChild(trData);
    }
    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>