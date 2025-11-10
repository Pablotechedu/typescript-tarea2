/**
 * Props para el componente AlertBox
 */
interface AlertBoxProps {
  type: 'error' | 'success' | 'warning' | 'info';
  children: React.ReactNode;
}

/**
 * Componente para mostrar mensajes de alerta
 * Soporta diferentes tipos de alertas con estilos apropiados
 */
export const AlertBox = ({ type, children }: AlertBoxProps) => {
  return (
    <div className={`alert-box alert-${type}`} role="alert">
      {children}
    </div>
  );
};
