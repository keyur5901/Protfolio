# Modern Developer Portfolio

A stunning, modern portfolio website built with React, Tailwind CSS, and Framer Motion. Features a clean, professional design with smooth animations and dark mode support.

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional layout
- **Responsive**: Fully responsive across all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion
- **Fast Performance**: Built with Vite for optimal performance
- **SEO Friendly**: Optimized for search engines
- **Project Filtering**: Filter projects by category
- **Contact Form**: Functional contact form
- **Social Integration**: Links to GitHub, LinkedIn, and other platforms

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📧 Setting up the Contact Form

The contact form uses EmailJS to send emails directly from the frontend. To enable it:

1. **Copy environment file:**
```bash
cp .env.example .env
```

2. **Sign up at [EmailJS](https://www.emailjs.com/)** and create an account

3. **Create a service:**
   - Go to Email Services in your EmailJS dashboard
   - Add a new service (Gmail, Outlook, etc.)

4. **Create an email template:**
   - Go to Email Templates
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_name}}` - Your name

5. **Get your credentials:**
   - Service ID from Email Services
   - Template ID from Email Templates
   - Public Key from Account settings

6. **Update `.env` file:**
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.jsx` - Name, tagline, and social links
- `src/components/About.jsx` - Biography and career goals
- `src/components/Skills.jsx` - Your skills and proficiency levels
- `src/components/Projects.jsx` - Your projects
- `src/components/Contact.jsx` - Contact information

### Styling

The design uses Tailwind CSS classes. You can customize colors, fonts, and spacing by:

1. Updating the `tailwind.config.js` file
2. Modifying component classes directly
3. Adding custom CSS in `src/index.css`

### Projects Data

Update the projects array in `src/components/Projects.jsx` with your actual projects:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    image: 'path/to/image.jpg',
    technologies: ['React', 'Node.js'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://yourproject.com',
    category: 'fullstack'
  },
  // Add more projects...
];
```

## 📱 Sections

### Hero Section
- Profile image placeholder
- Name and professional tagline
- Call-to-action buttons
- Social media links

### About Section
- Personal biography
- Skills overview
- Education and career goals

### Skills Section
- Technical skills with progress bars
- Proficiency levels
- Technology icons

### Projects Section
- Project cards with images
- Filtering by category
- Links to GitHub and live demos
- Technology tags

### Experience Section
- Timeline layout
- Work experience details
- Technology used in each role

### Contact Section
- Contact form
- Contact information
- Social media links

## 🌙 Dark Mode

The portfolio includes a dark mode toggle in the navbar. The theme preference is stored in localStorage and persists across sessions.

## 📧 Contact Form

The contact form is currently set up to log submissions to the console. To make it functional:

1. Set up a backend service (e.g., Netlify Forms, Formspree, or your own API)
2. Update the `handleSubmit` function in `src/components/Contact.jsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects if needed

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing this portfolio, feel free to reach out!

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion"# Protfolio" 
