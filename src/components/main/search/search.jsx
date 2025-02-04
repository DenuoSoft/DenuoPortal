import { useEffect } from 'react';
export const Search = () => {
  useEffect(() => {
    // Создание тега <script> для загрузки Google CSE
    const script = document.createElement('script');
    script.src = "https://cse.google.com/cse.js?cx=475323512b6574d89";
    script.async = true;

    document.body.appendChild(script);
    // Очистка при размонтировании компонента
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
        <div className="gcse-search"></div>
     
  );
};

