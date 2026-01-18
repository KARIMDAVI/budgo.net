# Component Architecture

We follow the **Atomic Design** methodology to ensure modularity and reusability.

## Structure

### 1. Atoms (`/components/atoms`)
Basic building blocks. They have no dependencies on other components.
*   **Examples**: `Button`, `Input`, `Icon`, `Typography`.
*   **Rules**: Pure, stateless (mostly), highly reusable.

### 2. Molecules (`/components/molecules`)
Groups of atoms functioning together as a unit.
*   **Examples**: `SearchBar` (Input + Button), `CardHeader` (Title + Icon).
*   **Rules**: Can contain local state but should avoid business logic.

### 3. Organisms (`/components/organisms`)
Complex UI sections composed of molecules and atoms.
*   **Examples**: `TerminalHero`, `PortfolioGrid`, `Navbar`.
*   **Rules**: Can connect to global state/context. Represent distinct sections of an interface.

### 4. Templates (`/components/templates`)
Page-level layouts that place components into a structure.
*   **Examples**: `MainLayout`, `DashboardLayout`.
*   **Rules**: Focus on grid/layout structure, not content.

## Testing
Each component should have a corresponding test file in `/tests/components/...`.
