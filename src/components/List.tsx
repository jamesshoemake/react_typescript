import {ReactNode} from 'react'

interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode
}

// using <T,> lets Typescript know this is a generic
const List = <T,>({items, render}: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}

export default List