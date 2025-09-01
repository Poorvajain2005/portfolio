# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/742fa417-aa35-4b00-b4d9-e2adddd8030c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/742fa417-aa35-4b00-b4d9-e2adddd8030c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Set up environment variables for EmailJS (contact form)
cp .env.example .env
# Edit .env with your EmailJS credentials

# Step 5: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Setting up EmailJS for Contact Form

To enable the contact form functionality:

1. **Create an EmailJS account** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Set up your email service:**
   - Go to Email Services in your EmailJS dashboard
   - Add your email provider (Gmail, Outlook, etc.)
   - Note down the Service ID

3. **Create an email template:**
   - Go to Email Templates
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
     - `{{to_name}}` - Your name
   - Note down the Template ID

4. **Get your Public Key:**
   - Go to Account → General
   - Copy your Public Key

5. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your actual values:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

6. **Restart your development server** after setting up the environment variables.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- EmailJS (for contact form functionality)

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/742fa417-aa35-4b00-b4d9-e2adddd8030c) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
