import type { ReactNode } from 'react';

/**
 * Props para el componente Section
 * Utiliza children tipados correctamente
 */
interface SectionProps {
  title: string;
  children: ReactNode;
}

/**
 * Componente contenedor con título y children tipados
 * Proporciona estructura consistente para secciones de la aplicación
 */
export const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};
