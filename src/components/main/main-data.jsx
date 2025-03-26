import css from './main.module.scss'
export const tabs = [
    { name: 'News' },
    { name: 'Events' },
    { name: 'Other' },
  ];
  
  export const content = {
	  News: <div className={ css.news}>
      <h1>News 1</h1>
							<span>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
								quidem vel nisi mollitia corporis voluptatum tenetur, provident
								quia voluptates explicabo error doloremque doloribus velit quod
								consequatur sequi ratione facilis cupiditate. Lorem ipsum dolor,
								sit amet consectetur adipisicing elit. In quidem vel nisi
								mollitia corporis voluptatum tenetur, provident quia voluptates
							</span>
							<h1>News 2</h1>
							<span>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
								quidem vel nisi mollitia corporis voluptatum tenetur, provident
								quia voluptates explicabo error doloremque doloribus velit quod
								consequatur sequi ratione facilis cupiditate. Lorem ipsum dolor,
								sit amet consectetur adipisicing elit. In quidem vel nisi
								mollitia corporis voluptatum tenetur, provident quia voluptates
								explicabo error doloremque doloribus velit quod consequatur
								sequi ratione facilis cupiditate.
							</span>
							<h1>News 3</h1>
							<span>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
								quidem vel nisi mollitia corporis voluptatum tenetur, provident
								quia voluptates explicabo error doloremque doloribus velit quod
								consequatur sequi ratione facilis cupiditate.
							</span>
    </div>,
    Events: <div className={ css.events}>
      <h1>Event 1</h1>
							<span>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
								quidem vel nisi mollitia corporis voluptatum tenetur, provident
								quia voluptates explicabo error doloremque doloribus velit quod
								consequatur sequi ratione facilis cupiditate. Lorem ipsum dolor,
								sit amet consectetur adipisicing elit. In quidem vel nisi
								mollitia corporis voluptatum tenetur, provident quia voluptates
							</span>
							<h1>Event 2</h1>
							<span>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
								quidem vel nisi mollitia corporis voluptatum tenetur, provident
								quia voluptates explicabo error doloremque doloribus velit quod
								consequatur sequi ratione facilis cupiditate. Lorem ipsum dolor,
								sit amet consectetur adipisicing elit. In quidem vel nisi
								mollitia corporis voluptatum tenetur, provident quia voluptates
								explicabo error doloremque doloribus velit quod consequatur
								sequi ratione facilis cupiditate.
							</span>
							<h1>Event 3</h1>
							<span>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
								quidem vel nisi mollitia corporis voluptatum tenetur, provident
								quia voluptates explicabo error doloremque doloribus velit quod
								consequatur sequi ratione facilis cupiditate.
							</span>
    </div>,
    Other: <div className={ css.other}>Docs Content</div>,
  };