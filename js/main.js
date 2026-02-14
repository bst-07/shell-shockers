 function addFavIconToPages(){
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = 'shell-shockers-favicon.ico';
  link.type = 'image/x-icon';

  // Append it to the head
  document.head.appendChild(link);

  }
addFavIconToPages()

function addAhrefsScript() {
  const script = document.createElement('script');
  script.src = "https://analytics.ahrefs.com/analytics.js";
  script.async = true;
  script.setAttribute("data-key", "4+HxOV1r1tHMw/tZSoYUZg"); // 🔴 حط key ديالك هنا

  document.head.appendChild(script);
  console.log("Ahrefs Analytics loaded ✅");
};
addAhrefsScript()
