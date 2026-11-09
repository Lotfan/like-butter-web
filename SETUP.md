# Like Butter Web: setup guide

## 1. Install the tools (one time only)
1. Install Node.js (the LTS version) from https://nodejs.org
2. Install VS Code from https://code.visualstudio.com
3. Check Node works. Open a terminal and run: `node -v` (you should see v18 or higher)

## 2. Run the site on your computer
1. Unzip `like-butter-web.zip`
2. Open the `like-butter-web` folder in VS Code (File > Open Folder)
3. Open the terminal in VS Code (Terminal > New Terminal) and run:
   ```
   npm install
   npm run dev
   ```
4. Open the link it shows (usually http://localhost:5173). Your site is live on your computer.
   Every time you save a file, the page updates by itself.

## 3. Make it yours
- **All the words**: open `src/config.js` and change the text, email, services, work and steps.
- **Colors**: open `src/styles.css`, the 4 colors are at the very top (`--butter`, `--ink`, `--milk`, `--jam`).
- **Layout/sections**: `src/App.jsx`. Each section (Hero, Services, Work, Process, Contact) is its own function.
- **Add a project**: in `config.js`, copy one line inside `work: [...]` and change the name, type and colors.

## 4. Make the contact form work (free)
1. Go to https://formspree.io and create a free account
2. Click "New form", name it "Like Butter Web", and enter your email
3. Copy the form ID (the code at the end of the form URL, like `xyzabcd`)
4. Paste it in `src/config.js` as `formspreeId`
5. Send a test message from your site. The first one asks you to confirm your email.

## 5. Put it online with Vercel (free)
1. Create a GitHub account (if you don't have one) and a new empty repository called `like-butter-web`
2. In the VS Code terminal run:
   ```
   git init
   git add .
   git commit -m "first version"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/like-butter-web.git
   git push -u origin main
   ```
3. Go to https://vercel.com, log in with GitHub, click "Add New > Project", pick `like-butter-web`
4. Vercel detects Vite by itself. Click "Deploy". In about a minute you get a live link.
5. Every time you push changes to GitHub, Vercel updates the live site automatically.

## 6. Use your own domain (optional)
Buy a domain (for example likebutterweb.com) from Namecheap or Cloudflare, then in Vercel go to
your project > Settings > Domains > Add, and follow the steps it shows.

## If something goes wrong
- `npm: command not found`: Node isn't installed, or close and reopen VS Code after installing.
- Blank page: open the browser console (F12) and read the red error. It tells you the file and line.
- Port already in use: close the other terminal running `npm run dev`.
