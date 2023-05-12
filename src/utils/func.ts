export function loadScript(src: string, callback: () => void) {  
	const s = document.createElement("script");  
	s.type = "text/javascript";  
	s.src = src;  
	s.onload = s.onreadystatechange = function () {  
		if (  !this.readyState ||  this.readyState === "loaded" ||  this.readyState === "complete"  ) {  
			callback && callback();  
			s.onload = s.onreadystatechange = null;  
		}  
	};  
	document.body.appendChild(s); 
}
