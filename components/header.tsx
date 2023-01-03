function Header() {
  return (
    <>
      <header>
        <h1>
          <span className='letter'>p</span>
          <span className='letter'>o</span>
          <span className='letter'>i</span>
          <span className='letter'>n</span>
          <span className='letter'>t</span>
          <span className='letter'>y</span>
          <wbr/>
          <span className='letter'>T</span>
          <span className='letter'>h</span>
          <span className='letter'>i</span>
          <span className='letter'>e</span>
          <span className='letter'>v</span>
          <span className='letter'>e</span>
          <span className='letter'>s</span>
        </h1>
      </header>
      <style jsx>
        {`
        header {
          background-color: #f8e9a1;
        }
        
        h1 {
          text-align: center;
          position: relative;
          font-size: 5rem;
          color: #f76c6c;
          padding-top: 2.5rem;
          margin: 0 0 -2.5rem 0;
          z-index: 3;
          text-shadow: #f8e9a1 0 0.5rem;
        }
        
        @media only screen and (min-width: 768px) {
          h1 {
            font-size: 9rem;
            padding-top: 2.5rem;
            margin-bottom: -5.5rem;
            text-shadow: none;
          }
      
          .letter:hover {
            text-shadow: #f8e9a1 0 1rem;
            transition: text-shadow 0.5s;
            transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
            cursor: default;
          }
        }
        `}
      </style>
    </>
  );
};

export default Header;