export default function OurDesription({title, description}) {
    return (
      <li>
        <p>
          <strong>{title}</strong>
          {description}
        </p>
      </li>
    );
  }

// function OurDesription(props) - определяем компонент, который можно рендерить в любом месте приложения.
// props - это параметры, которые передаются в данную функцию-компонент и которые прописываются персонально
// там где и какие значения должны отображаться. Другими словами мы выносим в отдельную функцию-компонент
// одинаковую структуру (шаблон), а динамическую составляющую передаём как пропсы:

// function OurDesription(props) {
//   return (
//     <li>
//       <p>
//         <strong>{props.title}</strong>
//         {props.description}
//       </p>
//     </li>
//   );
// }
// Здесь я слово props заменяю на конкретные значения, которые мы получаем из параметров из {...ways[0]}