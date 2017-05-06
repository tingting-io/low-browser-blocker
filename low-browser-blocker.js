(function() {
    if (window.fetch && window.customElements && 'import' in document.createElement('link') && 'content' in document.createElement('template')) {
        //
    } else {
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var td = document.createElement("td");
        var tr = document.createElement("tr");
        var table = document.createElement("table");
        td.style.verticalAlign = "middle";
        td.style.textAlign = "center";
        div.style.fontSize = "36px";
        div2.style.fontSize = "24px";
        div2.style.marginTop = "20px";
        div.innerHTML = "Your browser is not supported by our website";
        div2.innerHTML = "Please use the latest Chrome, Safari, Firefox or Edge to visit us";
        td.appendChild(div);
        td.appendChild(div2);
        tr.appendChild(td);
        table.appendChild(tr);
        table.style.height = '100%';
        table.style.width = '100%';
        document.body.innerHTML = "";
        document.body.appendChild(table);
    }
})();
