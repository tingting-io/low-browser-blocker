(function() {
    if (window.fetch && window.customElements && 'import' in document.createElement('link') && 'content' in document.createElement('template')) {
        //
    } else {
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");
        var td = document.createElement("td");
        var tr = document.createElement("tr");
        var table = document.createElement("table");
        td.style.verticalAlign = "middle";
        td.style.textAlign = "center";
        div.style.fontSize = "36px";
        div2.style.fontSize = "24px";
        div2.style.marginTop = "20px";
        div3.style.fontSize = "16px";
        div3.style.marginTop = "20px";
        div3.style.color = "#999";
        div4.style.fontSize = "16px";
        div4.style.marginTop = "20px";
        div4.style.color = "#999";
        div.innerHTML = `Your browser is not supported by our website`;
        div2.innerHTML = `Please use the latest <a href="https://www.google.com/chrome/browser/desktop/">Chrome</a> or Safari to visit us`;
        div3.innerHTML = `The reason we don't support your browser is that we are a small startup company`;
        div4.innerHTML = `and we have to invest our very limited development resource into the best browsers`;
        td.appendChild(div);
        td.appendChild(div2);
        td.appendChild(div3);
        td.appendChild(div4);
        tr.appendChild(td);
        table.appendChild(tr);
        table.style.height = '100%';
        table.style.width = '100%';
        document.body.innerHTML = "";
        document.body.appendChild(table);
    }
})();
