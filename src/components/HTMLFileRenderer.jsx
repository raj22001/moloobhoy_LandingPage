import React, { useEffect, useState } from 'react';


const HTMLFileRenderer = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/AboutUs/index.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data))
      .catch(error => console.error('Error fetching HTML file:', error));
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default HTMLFileRenderer;