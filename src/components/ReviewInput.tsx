/**
 * Props para el componente ReviewInput
 */
interface ReviewInputProps {
  value: string;
  onChange: (value: string) => void;
  onAddPositive: () => void;
  onAddNegative: () => void;
  onClear?: () => void;
  showClearButton?: boolean;
}

/**
 * Componente para ingresar y agregar reseñas
 * Maneja el input y los botones de acción
 */
export const ReviewInput = ({
  value,
  onChange,
  onAddPositive,
  onAddNegative,
  onClear,
  showClearButton = false,
}: ReviewInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim()) {
      onAddPositive();
    }
  };

  return (
    <div className="review-input-container">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Escribe tu reseña aquí..."
        className="review-input"
        onKeyPress={handleKeyPress}
      />
      <div className="review-buttons">
        <button
          onClick={onAddPositive}
          className="btn-positive"
          disabled={!value.trim()}
        >
          ✓ Positiva
        </button>
        <button
          onClick={onAddNegative}
          className="btn-negative"
          disabled={!value.trim()}
        >
          ✗ Negativa
        </button>
        {showClearButton && onClear && (
          <button onClick={onClear} className="btn-clear">
            Limpiar Todo
          </button>
        )}
      </div>
    </div>
  );
};
