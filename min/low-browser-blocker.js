!function(){const e=window.navigator.userAgent,t=window.fetch,n=window.customElements,o="content"in document.createElement("template");if(e.includes("googlebot")||e.includes("bingbot"))document.body.innerHTML="Make comments to anything. See comments from everybody.";else if(t&&n&&o);else{var i=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div"),d=document.createElement("div"),s=document.createElement("div"),a=document.createElement("td"),c=document.createElement("tr"),m=document.createElement("table");a.style.verticalAlign="middle",a.style.textAlign="center",i.style.fontSize="36px",l.style.fontSize="36px",l.style.marginTop="30px",r.style.fontSize="16px",r.style.marginTop="40px",r.style.color="#999",d.style.fontSize="16px",d.style.marginTop="30px",d.style.color="#999",s.style.fontSize="16px",s.style.marginTop="30px",s.style.color="#999",i.innerHTML="Your browser is not supported by our website",l.innerHTML='Please use the latest <a style="display: inline; text-decoration: underline; color: blue;" href="https://www.google.com/chrome/browser/desktop/">Google Chrome</a> to visit us',r.innerHTML="The reason we don't support your browser is that we are a small startup company",d.innerHTML="and we have to invest our very limited development resource into the best browsers",s.innerHTML="and yes, believe me or not, there is a huge difference between browsers",a.appendChild(i),a.appendChild(l),a.appendChild(r),a.appendChild(d),a.appendChild(s),c.appendChild(a),m.appendChild(c),m.style.height="100%",m.style.width="100%",document.body.innerHTML="",document.body.appendChild(m)}}();