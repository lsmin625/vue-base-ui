# UI Framework for Vue-based Web Applications

## Overview
With the modern shift in web service architecture, many systems now leverage REST APIs provided by the backend while implementing reactive frameworks on the frontend. This separation of frontend and backend components calls for an independent UI framework capable of handling common web service concerns, which is essential in a decoupled service environment. 

This UI framework is designed to support frontend application development across various services by utilizing a minimal set of BFF (Backend For Frontend) APIs. Our goal is to offer the necessary tools and environment for developing versatile frontend UI applications.

### Key Considerations
- **Large-scale Web Systems**: The framework should be suitable for applications with complex requirements and high user demand.
- **Diverse Developer Levels**: Designed to be approachable by both beginner and experienced developers, the framework prioritizes ease of use and flexibility.
- **Learning Curve**: Minimizes the learning curve to facilitate rapid onboarding and efficient development.
- **Common Component Implementation and Utilization**: Includes reusable common components to streamline development across projects.
- **Build/Deployment Performance**: Optimized for fast builds and efficient deployment processes to reduce time-to-market.

## Key Technologies

### Vite Package Manager
Vite is a fast, modern development environment and build tool for Vue-based projects. It offers:
- Lightning-fast builds and hot module replacement (HMR).
- Efficient dependency management that improves build performance.
- Optimized production build with tree-shaking and code splitting.

### Vue Framework
Vue provides a reactive, component-based architecture that simplifies complex UIs and enhances interactivity:
- A reactive core design that enables dynamic UI updates with minimal code.
- Modular, component-based structure for reusability and maintainability.
- Rich ecosystem and compatibility with tools like Vite, Vue Router, and Vuex, empowering seamless development for various project requirements.

## Application Development Tools

| Tool        | Purpose                                        |
|-------------|------------------------------------------------|
| **Node/NPM** | JavaScript runtime environment and dependency management |
| **VS Code** | IDE for Web UI development                    |

## Running the Framework

To set up and run the UI framework:
1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`

## Application Package Structure

| Directory/File                | Description                                           | Notes                         |
|-------------------------------|-------------------------------------------------------|-------------------------------|
| `public/`                     | Public assets accessible in the root of the project   | Contains `favicon.ico`, `login.png` |
| `src/`                        | Primary source code for the application               | Core development files        |
| `src/components/`             | Reusable UI components                               | Organized for modularity      |
| `src/components/teleports/`   | Teleport components for rendering outside the DOM tree | Useful for modals, dialogs    |
| `src/menus/`                  | Menu configuration and components                    | Manages navigational elements |
| `src/pages/`                  | Primary page-level components                        | Includes major views          |
| `src/pages/domains/`          | Domain-specific page components                      | Custom pages per domain       |
| `src/test/`                   | Testing files for unit and integration tests         | Helps ensure code quality     |
| `src/guides/`                 | Documentation and guides for development standards   | For developer reference       |
| `src/scripts/`                | Various utility scripts and API functions            | Contains helper functions     |
| ├─ `api-call.ts`              | Core API call functions                              | Manages API interactions      |
| ├─ `api-util.ts`              | Utility functions for API handling                   | Supports API operations       |
| ├─ `batch.ts`                 | Batch processing functions                           | Handles grouped operations    |
| ├─ `session.ts`               | Session management utilities                         | Manages user sessions         |
| ├─ `store-cache.ts`           | Cache storage utilities                              | Manages local caching         |
| ├─ `store-callbacks.ts`       | Callback storage utilities                           | Handles callback functions    |
| ├─ `store-menus.ts`           | Utilities for managing menus                         | For dynamic menu configurations |
| ├─ `store-popups.ts`          | Utilities for managing popups                        | Manages modals and notifications |
| ├─ `time-util.ts`             | Utilities for time-related calculations              | Manages date and time formatting |
| ├─ `utils.ts`                 | General-purpose utility functions                    | Shared helper functions       |
| └─ `validater.ts`             | Validation utilities for form data                   | Manages input validation      |
| `App.vue`                     | Root Vue component                                   | Main application wrapper      |
| `main.ts`                     | Application entry point                              | Initializes the app           |
| `router.ts`                   | Router configuration for navigation                  | Sets up page routes           |
| `vite-env.d.ts`               | Type definitions for Vite                            | Supports TypeScript typings   |
| `.env.dev`                    | Environment variables for development                | Holds dev-specific configs    |
| `.env.prd`                    | Environment variables for production                 | Holds production configs      |
| `.gitignore`                  | Git ignore file                                     | Excludes files from version control |
| `README.md`                   | Project documentation                                | Provides an overview and setup guide |
| `index.html`                  | Root HTML file for the app                           | Serves as the main HTML page  |
| `package-lock.json`           | Dependency lock file                                | Ensures consistent dependencies |
| `package.json`                | Project metadata and dependencies                    | Lists libraries and scripts   |
| `tsconfig.json`               | TypeScript configuration file                        | Sets TypeScript options       |
| `tsconfig.node.json`          | TypeScript configuration for Node                    | For Node-specific modules     |
| `vite.config.ts`              | Vite configuration file                              | Configures Vite for the app   |

This structure organizes the application effectively, ensuring modular, scalable, and maintainable development.

## Menu Configuration for UI Independence

In the development environment, the menu structure enables independent UI rendering without server dependency. This approach is designed to allow for dynamic menu management on the client side, with server authorization roles based on `menuID`. Here are the core guidelines for menu management:

### Menu Management Guidelines
- **Independent Management of UI Menus**: Menu hierarchy is maintained independently of the server. To provide access permissions for user groups, the server assigns permission levels based on `menuID`.
- **Controlled Access**: Menu items without access permissions are hidden, and routing paths are not generated for these items. The `hidden` attribute allows for component creation that doesn’t appear in the menu but can be accessed directly via routing (e.g., opening a detail view from a list view).
- **Unique Paths and Components**: While `menuID`s can be duplicated, each routing path (`path`) and component reference (`component`) remains unique.
- **Access Levels**: Each menu item’s visibility and functionality (e.g., button enable/disable) are controlled based on access levels: `No Access (0)`, `Read (1)`, `Write (2)`, `Admin (3)`.
- **Development Mode Access**: When `authLevel` is set to `-1`, the menu item is always visible in DEV environments, bypassing standard access controls.

### Menu Attributes

| Attribute   | Description                                                             | Notes                                                     |
|-------------|-------------------------------------------------------------------------|-----------------------------------------------------------|
| `groupId`   | Unique identifier for each menu group                                   | Used for grouping related menu items                      |
| `groupName` | Display name for the menu group                                         | Appears in the menu UI                                    |
| `menuList`  | Array of menu items within the group                                    | Contains the individual menu entries                      |
| `menuId`    | ID that aligns with the server’s user group access permissions          | Used for server-based authorization checks                |
| `menuName`  | Display name for the menu item                                          | Visible to users in the menu                              |
| `hidden`    | Boolean flag for hidden menus, which allows route-only access           | Useful for detail views accessed via direct routing       |
| `path`      | Unique routing path for the menu item                                   | Required for Vue Router path configuration                |
| `component` | Vue component associated with the menu item                             | Path to the component file, if applicable                 |
| `authLevel` | Permission level required to access the menu item                       | Values: `-1` for DEV, `0` No Access, `1` Read, `2` Write, `3` Admin |

### Menu Example

Below is an example of how to define a menu group and its items:

```javascript
export default {
  groupId: "batch-menus",
  groupName: "배치(Batch)",
  menuList: [
    {
      menuId: "/main/batch",
      menuName: "배치(Batch)",
      hidden: true,
      path: "/main/batch",
      component: () => import(`@/pages/domains/batch/BatchMain.vue`)
    },
    {
      menuId: "/main/batch",
      menuName: "배치작업관리",
      path: "/main/batch/BatchSchedules",
      component: () => import(`@/pages/domains/batch/components/BatchSchedules.vue`)
    },
    {
      menuId: "/main/batch",
      menuName: "On-demand배치",
      path: "/main/batch/OndemandBatch",
      component: () => import(`@/pages/domains/batch/components/OndemandBatch.vue`)
    },
    {
      menuId: "/main/batch",
      menuName: "화면없는 메뉴",
      path: "/main/batch/Empty",
      component: null
    }
  ]
}
