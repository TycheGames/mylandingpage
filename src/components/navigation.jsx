export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
       {/**  <div padding-bottom='10%' className='navbar-header'>*/}
        <div height='100%' width='100%' className='navbar-header'>
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
          
          <img src='img/logo@2x.png' width='235' className='navbar-brand page-scroll' alt='' />{' '}
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
              <a href='https://medium.com/@tychegames/tyche-games-litepaper-e24cb0a2e9f' target='_blank' className='page-scroll'>
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
                Webapp（coming soon）
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
