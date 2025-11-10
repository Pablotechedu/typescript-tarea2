/**
 * Props para el componente GenericList
 * Utiliza genéricos para permitir listas de cualquier tipo
 */
interface GenericListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  getKey: (item: T) => string | number;
}

/**
 * Componente genérico reutilizable para renderizar listas
 * Acepta cualquier tipo de dato y una función de renderizado
 * @template T - Tipo de los elementos de la lista
 */
export const GenericList = <T,>({ items, renderItem, getKey }: GenericListProps<T>) => {
  if (items.length === 0) {
    return <p>No hay elementos para mostrar.</p>;
  }

  return (
    <ul className="generic-list">
      {items.map((item) => (
        <li key={getKey(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};
