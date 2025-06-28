### TS Project Init (Vanilla)

1.  **Create and navigate to project directory:**
    `mkdir my-ts-app`
    `cd my-ts-app`

2.  **Initialize `package.json`:**
    `pnpm init`

3.  **Install `typescript` and `ts-node`:**
    `pnpm add -D typescript ts-node`

4.  **Generate `tsconfig.json`:**
    `npx tsc --init`

5.  **Update `tsconfig.json` content:**

    ```json
    {
      "compilerOptions": {
        "target": "es2024",
        "lib": ["es2024", "dom"],
        "module": "NodeNext",
        "moduleResolution": "NodeNext",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true,
        "outDir": "./dist",
        "sourceMap": true
      },
      "include": ["src/**/*.ts"],
      "exclude": ["node_modules"]
    }
    ```

6.  **Create `src/index.ts`:**
    `mkdir src`
    `echo console.log("Hello TypeScript!"); > src/index.ts`

7.  **Add scripts to `package.json`:**

    ```json
    {
      "name": "my-ts-app",
      "version": "1.0.0",
      "main": "dist/index.js",
      "scripts": {
        "build": "tsc",
        "start": "node dist/index.js",
        "dev": "ts-node --esm src/index.ts"
      },
      "devDependencies": {
        "typescript": "^5.x.x",
        "ts-node": "^10.x.x"
      }
    }
    ```

8.  **Run in development mode:**
    `pnpm run dev`
