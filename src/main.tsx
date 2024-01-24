import ReactDOM from 'react-dom/client'
// @ts-ignore
import App from './App.tsx'
// @ts-ignore
import { createElement } from 'react';
// @ts-ignore
import { restaurants } from './moks-data/mock.ts';

// Выводим данные используя jsx
ReactDOM.createRoot(document.getElementById('root')!).render(
	// Список ресторанов
	<ul>
		{/* Dishooom */}
		<li>
			<h2>Ресторан {restaurants[0].name}</h2>
			<h3>Меню</h3>
			<ul>
				<li>{restaurants[0].menu[0].name}</li>
				<li>{restaurants[0].menu[1].name}</li>
				<li>{restaurants[0].menu[2].name}</li>
			</ul>
			<h3>Отзывы</h3>
			<ul>
				<li>{restaurants[0].reviews[0].text}</li>
				<li>{restaurants[0].reviews[1].text}</li>
			</ul>
		</li>
		{/* Homeslice */}
		<li>
			<h2>Ресторан {restaurants[1].name}</h2>
			<h3>Меню</h3>
			<ul>
				<li>{restaurants[1].menu[0].name}</li>
				<li>{restaurants[1].menu[1].name}</li>
			</ul>
			<h3>Отзывы</h3>
			<ul>
				<li>{restaurants[1].reviews[0].text}</li>
				<li>{restaurants[1].reviews[1].text}</li>
				<li>{restaurants[1].reviews[2].text}</li>
			</ul>
		</li>
		{/* Fabrique */}
		<li>
			<h2>Ресторан {restaurants[2].name}</h2>
			<h3>Меню</h3>
			<ul>
				<li>{restaurants[2].menu[0].name}</li>
				<li>{restaurants[2].menu[1].name}</li>
				<li>{restaurants[2].menu[2].name}</li>
			</ul>
			<h3>Отзывы</h3>
			<ul>
				<li>{restaurants[2].reviews[0].text}</li>
			</ul>
		</li>
		{/* Flat Iron */}
		<li>
			<h2>Ресторан {restaurants[3].name}</h2>
			<h3>Меню</h3>
			<ul>
				<li>{restaurants[3].menu[0].name}</li>
				<li>{restaurants[3].menu[1].name}</li>
			</ul>
			<h3>Отзывы</h3>
			<ul>
				<li>{restaurants[3].reviews[0].text}</li>
				<li>{restaurants[3].reviews[1].text}</li>
			</ul>
		</li>
	</ul>
)

// Выводим данные без jsx
// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(
//     // Список ресторанов
//     createElement('ul', {}, [
//         // Ресторан Dishooom. Передача children третьим параметром.
//         createElement('li', {}, [
//             createElement('h2', {}, ['Ресторан ' + restaurants[0].name]),
//             createElement('h3', {}, ['Меню']),
//             createElement('ul', {}, [
//                 createElement('li', {}, restaurants[0].menu[0].name),
//                 createElement('li', {}, restaurants[0].menu[1].name),
//                 createElement('li', {}, restaurants[0].menu[2].name),
//             ]),
//             createElement('h3', {}, ['Отзывы']),
//             createElement('ul', {}, [
//                 createElement('li', {}, restaurants[0].reviews[0].text),
//                 createElement('li', {}, restaurants[0].reviews[1].text),
//             ]),
//         ]),
//         /* Homeslice - тут для примера передаю children в пропсах (2 аргумент). React поймет это, т.к. children
// 		 это зарезервированное слово */
//         createElement('li', {
// 			children: createElement('li', {}, [
// 				createElement('h2', {}, ['Ресторан ' + restaurants[1].name]),
// 				createElement('h3', {}, ['Меню']),
// 				createElement('ul', {}, [
// 					createElement('li', {}, restaurants[1].menu[0].name),
// 					createElement('li', {}, restaurants[1].menu[1].name),
// 				]),
// 				createElement('h3', {}, ['Отзывы']),
// 				createElement('ul', {}, [
// 					createElement('li', {}, restaurants[1].reviews[0].text),
// 					createElement('li', {}, restaurants[1].reviews[1].text),
// 					createElement('li', {}, restaurants[1].reviews[2].text),
// 				]),
// 			]),
// 		}),
//         // Fabrique
//         createElement('li', {}, [
//             createElement('li', {}, [
//                 createElement('h2', {}, ['Ресторан ' + restaurants[2].name]),
//                 createElement('h3', {}, ['Меню']),
//                 createElement('ul', {}, [
//                     createElement('li', {}, restaurants[2].menu[0].name),
//                     createElement('li', {}, restaurants[2].menu[1].name),
//                     createElement('li', {}, restaurants[2].menu[2].name),
//                 ]),
//                 createElement('h3', {}, ['Отзывы']),
//                 createElement('ul', {}, [
//                     createElement('li', {}, restaurants[2].reviews[0].text),
//                 ]),
//             ]),
//         ]),
//         // Flat-Iron
//         createElement('li', {}, [
//             createElement('li', {}, [
//                 createElement('h2', {}, ['Ресторан ' + restaurants[3].name]),
//                 createElement('h3', {}, ['Меню']),
//                 createElement('ul', {}, [
//                     createElement('li', {}, restaurants[3].menu[0].name),
//                     createElement('li', {}, restaurants[3].menu[1].name),
//                 ]),
//                 createElement('h3', {}, ['Отзывы']),
//                 createElement('ul', {}, [
//                     createElement('li', {}, restaurants[3].reviews[0].text),
//                     createElement('li', {}, restaurants[3].reviews[1].text),
//                 ]),
//             ]),
//         ]),
//     ])
// );
