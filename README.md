# CV Pool – Move to Job Query Feature

This project is a simple React-based interface for managing and moving candidates to job queries from a CV pool. It features a Material UI (MUI) drawer with a searchable list of predefined job queries. Users can select a query and move candidates to the appropriate job slot.

## Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher) or yarn (v1.22.0 or higher)

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```sh
npm install
# or
yarn
```

3. Start the development server:
```sh
npm run dev
# or
yarn dev
```

4. By default, the app runs on http://localhost:<port>. Your terminal will display the exact address after starting the development server. Open your browser and navigate to your localhost

## Project Structure

```
src/
├── Components/         # Reusable UI components
│ ├── Button.tsx
│ ├── List.tsx
│ ├── SnackBar.tsx
│ └── TextInput.tsx
├── JobQuery/
│ └── MoveToJob.tsx     # Job Query Drawer View 
├── MainContainer/      # Job Query Container
│ └── Index.tsx         
└── main.tsx / App.tsx  # Application entry point
```

## 🚀 Features

- Drawer interface for selecting job queries
- Searchable and filterable job list
- Highlighted selection with visual feedback
- Material UI components for a clean and responsive UI
- Reusable components for input, list rendering, and button control

## 🛠 Technologies Used

- **React**: Frontend library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool for fast development
- **Material UI**: Component library for consistent design

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.