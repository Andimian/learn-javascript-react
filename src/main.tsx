import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// @ts-ignore
import { createElement } from 'react';
// @ts-ignore
import { restaurants } from './mock.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)

// ReactDOM.createRoot(document.getElementById('root')!).render(
//     // Список ресторанов
//     createElement('ul', {}, [
//         // Dishooom
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
//         // Homeslice
//         createElement('li', {}, [
//             createElement('li', {}, [
//                 createElement('h2', {}, ['Ресторан ' + restaurants[1].name]),
//                 createElement('h3', {}, ['Меню']),
//                 createElement('ul', {}, [
//                     createElement('li', {}, restaurants[1].menu[0].name),
//                     createElement('li', {}, restaurants[1].menu[1].name),
//                 ]),
//                 createElement('h3', {}, ['Отзывы']),
//                 createElement('ul', {}, [
//                     createElement('li', {}, restaurants[1].reviews[0].text),
//                     createElement('li', {}, restaurants[1].reviews[1].text),
//                     createElement('li', {}, restaurants[1].reviews[2].text),
//                 ]),
//             ]),
//         ]),
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
