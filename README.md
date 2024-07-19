# **Unofficial Merchandise**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![GitHub repo size](https://img.shields.io/github/repo-size/egarrisxn/unofficial-merchandise)

## Overview

This is a complete ecommerce webstore utilizing Stripe, Sanity, Next.js, and more!

![unofficialmerchandise](https://github.com/egarrisxn/unofficial-merchandise/assets/126130230/5e99b3bb-1584-4c2f-9143-7f00080ca185)

## **Technologies**

- Nextjs
- Sanity
- Shadcn-UI
- TailwindCSS
- Stripe
- Vercel

## **Package Manager**

This project uses `pnpm` as the package manager for efficient dependency management. To install dependencies, run:

```
pnpm install
```

## **Deployment**

The project is deployed on Vercel for seamless hosting and continuous deployment.

### Prerequisites:

**Vercel Account**: Make sure you have an account on Vercel. You can sign up using your GitHub, GitLab, or Bitbucket account.<br/>
**Next.js Project**: Ensure your Next.js project is ready for deployment. Make sure it runs locally without errors.

### Deployment Steps:

1. Install Vercel CLI (if not already installed):
  If you haven't already installed the Vercel CLI, you can do so using npm:

```
pnpm install -g vercel
```



2. Log in to Vercel CLI:
  Once installed, log in to your Vercel account through the CLI:

```
vercel login
```
Follow the prompts to authenticate with your Vercel account.



3. Deploy Your Next.js Project:
  Navigate to your Next.js project directory in the terminal. Then, deploy your project using the vercel command:

```
vercel
```
This command will initiate the deployment process. Vercel will guide you through a series of prompts:

- It will ask you to confirm the project directory. Press Enter to confirm if it detects a Next.js project correctly.
- It will ask for the scope (personal account or team account). Choose appropriately.
- It will ask for the project name. You can choose a new name or press Enter to use the default.
- It will ask whether you want to deploy this project. Confirm by typing Y.



4. Configure Environment Variables (if necessary):
  If your project requires environment variables (e.g., API keys, credentials), you can set them directly in the Vercel dashboard after deployment:

- Go to your project on the Vercel dashboard.
- Navigate to Settings > Environment Variables.
- Add your environment variables there.



5. Automatic Deployments (optional):
  Vercel supports automatic deployments triggered by pushes to your Git repository. To set this up:

- Go to your project's Settings in Vercel.
- Navigate to Git Integration.
- Connect your Git repository (GitHub, GitLab, Bitbucket).
- Configure the branch from which you want to deploy.
- Enable automatic deployments if desired.



6. View Your Deployed Site:
  Once deployment is complete, Vercel will provide you with a URL where your site is hosted. You can access your deployed site using this URL.



7. Further Customization:
  Explore Vercel's dashboard for more options like domain management, SSL configuration, and more to tailor your deployment setup according to your project's needs.



## **License**

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).

## **Questions**

Feel free to reach out to me via [GitHub](https://github.com/EGARRISXN), or email at egarrisxn@gmail.com.