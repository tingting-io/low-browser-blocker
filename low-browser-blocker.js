(function() {
    if (window.fetch && window.customElements && 'import' in document.createElement('link') && 'content' in document.createElement('template')) {
        //
    } else {
        var td = document.createElement("td");
        var tr = document.createElement("tr");
        var table = document.createElement("table");
        td.style.verticalAlign = "middle";
        td.style.textAlign = "center";
        td.innerHTML = "Your browser is not supported by our website";
        tr.append(td);
        table.append(tr);
        table.style.height = '100%';
        table.style.width = '100%';
        document.body.append(table);
    }
})();
