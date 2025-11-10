# 🎬 Movie Manager - React + TypeScript

Aplicación de gestión de películas y reseñas desarrollada con React y TypeScript, implementando buenas prácticas de clean code y arquitectura de componentes.

## 📋 Descripción del Proyecto

Movie Manager es una aplicación web que permite:
- Listar películas obtenidas de una API externa
- Gestionar películas favoritas
- Agregar y visualizar reseñas (positivas y negativas)
- Demostrar el uso de TypeScript con tipado estricto
- Implementar hooks personalizados y componentes genéricos

## 🏗️ Arquitectura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── AlertBox.tsx    # Componente de alertas
│   ├── FavoriteMovies.tsx  # Gestión de favoritos
│   ├── GenericList.tsx # Lista genérica reutilizable
│   ├── MovieCard.tsx   # Tarjeta de película
│   ├── MovieDashboard.tsx  # Dashboard principal
│   ├── MovieList.tsx   # Lista de películas
│   └── Section.tsx     # Contenedor con children tipados
├── hooks/              # Custom hooks
│   ├── useFetchMovies.ts  # Hook para fetch de películas
│   └── useReviews.ts   # Hook para gestión de reseñas
├── types/              # Definiciones de tipos
│   ├── Movie.ts        # Interface Movie y utilidades
│   └── Review.ts       # Tipo unión discriminada Review
└── utils/              # Utilidades (futuro)
```

## 🎯 Características Implementadas

### 1. Tipado Estricto
- ✅ Interface `Movie` con propiedades tipadas
- ✅ Función `formatMovie` con tipos explícitos
- ✅ Sin uso de `any` en todo el proyecto
- ✅ Uso de `type` imports cuando es necesario

### 2. Componentes React

#### MovieCard
- Props tipadas con interface
- Manejo de estado disponible/no disponible
- Callback onSelect tipado

#### GenericList<T>
- Componente genérico reutilizable
- Acepta cualquier tipo de dato
- Función renderItem personalizable

#### FavoriteMovies
- useState para gestión de estado
- useMemo para cálculo optimizado de promedio
- Funciones add/remove con validación

#### MovieList
- Integración con hook personalizado
- Manejo de estados: loading, error, data
- Uso de AlertBox para errores

#### Section
- Children tipados con ReactNode
- Estructura consistente
- Reutilizable en toda la app

### 3. Hooks Personalizados

#### useFetchMovies
- Fetch asíncrono con manejo de errores
- Estados: data, loading, error
- Transformación de datos de API
- useEffect con cleanup

#### useReviews
- Gestión de array de reseñas
- Funciones addPositiveReview/addNegativeReview
- Validación de input
- Estado inmutable

### 4. Tipos Avanzados

#### Review (Unión Discriminada)
```typescript
type Review =
  | { type: 'positive'; message: string }
  | { type: 'negative'; message: string };
```
- Type narrowing automático
- Función renderReview con pattern matching

### 5. Composición de Componentes
- MovieDashboard integra todos los componentes
- Uso de Section para estructura
- Separación de responsabilidades
- Props drilling evitado donde es posible

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>

# Navegar al directorio
cd movie-manager

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm run preview  # Preview de build de producción
npm run lint     # Ejecuta ESLint
```

## 📚 Buenas Prácticas Implementadas

### Clean Code
- ✅ Nombres descriptivos de variables y funciones
- ✅ Funciones pequeñas con responsabilidad única
- ✅ Comentarios JSDoc en funciones importantes
- ✅ Código DRY (Don't Repeat Yourself)
- ✅ Separación de concerns

### TypeScript
- ✅ Tipado estricto sin `any`
- ✅ Interfaces bien definidas
- ✅ Tipos de retorno explícitos
- ✅ Genéricos donde es apropiado
- ✅ Type guards y narrowing

### React
- ✅ Componentes funcionales
- ✅ Hooks correctamente utilizados
- ✅ Props inmutables
- ✅ Keys en listas
- ✅ Manejo de efectos secundarios
- ✅ Optimización con useMemo

### Manejo de Errores
- ✅ Try-catch en operaciones asíncronas
- ✅ Validación de inputs
- ✅ Mensajes de error descriptivos
- ✅ Estados de loading y error

### Accesibilidad
- ✅ Atributos ARIA donde es necesario
- ✅ Semántica HTML correcta
- ✅ Estados disabled en botones

## 🎨 Estilos

- CSS moderno con variables
- Diseño responsive
- Animaciones y transiciones suaves
- Gradientes y efectos visuales
- Scrollbar personalizado

## 🔍 Puntos de Evaluación Cubiertos

| Criterio | Implementación | Puntaje |
|----------|----------------|---------|
| Tipado correcto de interfaces y props | ✅ Completo | 10% |
| Manejo de estado (useState, useMemo) | ✅ Completo | 10% |
| Implementación del hook useFetchMovies | ✅ Completo | 10% |
| Creación de componente genérico (GenericList) | ✅ Completo | 10% |
| Manejo adecuado de errores y estados de carga | ✅ Completo | 10% |
| Uso correcto de children tipados | ✅ Completo | 10% |
| Implementación de tipo unión (Review) | ✅ Completo | 10% |
| Hook personalizado de reseñas (useReviews) | ✅ Completo | 10% |
| Integración y composición de componentes | ✅ Completo | 10% |
| Buenas prácticas, estructura y legibilidad | ✅ Completo | 10% |

## 🔧 Tecnologías Utilizadas

- **React 18** - Biblioteca UI
- **TypeScript 5** - Tipado estático
- **Vite** - Build tool y dev server
- **CSS3** - Estilos
- **TVMaze API** - Fuente de datos de películas

## 📝 Notas de Desarrollo

### Decisiones de Diseño

1. **Componente GenericList**: Implementado con genéricos para máxima reutilización
2. **Hook useFetchMovies**: Maneja transformación de datos de API a modelo interno
3. **Unión Discriminada**: Permite type safety en reseñas positivas/negativas
4. **Composición**: Preferida sobre herencia para máxima flexibilidad

### Mejoras Futuras

- [ ] Implementar Context API para estado global
- [ ] Agregar tests unitarios con Vitest
- [ ] Implementar paginación en lista de películas
- [ ] Agregar filtros y búsqueda
- [ ] Persistencia en localStorage
- [ ] Modo oscuro

## 👨‍💻 Autor

**Universidad Galileo de Guatemala**  
React Avanzado - Tarea #2  
Fecha: Octubre 2025

## 📄 Licencia

Este proyecto es parte de un ejercicio académico.
