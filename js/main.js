 function addFavIconToPages(){
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = '/images/minefun-io-favicon.ico';
  link.type = 'image/x-icon';

  // Append it to the head
  document.head.appendChild(link);

  }
addFavIconToPages()
