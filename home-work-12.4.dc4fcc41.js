const e=document.querySelector('[data-value="days"]'),t=document.querySelector('[data-value="hours"]'),o=document.querySelector('[data-value="mins"]'),a=document.querySelector('[data-value="secs"]');var n=new Date("2025-04-17T00:00:00");function r(){let r=n-new Date().getTime(),l=Math.floor(r/864e5),u=Math.floor(r%864e5/36e5),c=Math.floor(r%36e5/6e4),d=Math.floor(r%6e4/1e3);e.textContent=l,t.textContent=u,o.textContent=c,a.textContent=d}r();const l=setInterval(r,1e3);timeLeft<=0&&clearInterval(l);
//# sourceMappingURL=home-work-12.4.dc4fcc41.js.map
