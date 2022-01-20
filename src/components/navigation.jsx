export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Tyche GAMES
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                Learn
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                LitePaper
              </a>
            </li>
         <li>
            <a href='https://twitter.com/tyche_games' target='_blank' className='page-scroll'>
                Twitter
              </a>
         </li> 
            <li>
              <a href='http://t.me/Tyche_Games' target='_blank' className='page-scroll'>
                Telegram
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Webapp
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
