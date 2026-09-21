# 🏛️ VerveStone Surfaces - Architectural Natural Stone & Tile Website

A luxury, high-performance website built with **HTML5, Vanilla CSS, and JavaScript**. Designed for natural stone exporters, travertine/marble suppliers, tile stores, or architectural surface companies (inspired by `bemastone.com`).

---

## 🌟 Features Included

1. **Quarry Direct Luxury Design**: Premium dark & gold aesthetic, responsive layout, glassmorphism headers, hero banner, interactive counters, and smooth scrolling.
2. **Dynamic Filterable Catalog**: Real-time filtering by Category (Marble, Travertine, Porcelain, Mosaics), Finish (Honed, Polished, Brushed), Sorting, and Live Search bar.
3. **Full Product Specifications Modal**: Click on any stone product to view high-resolution imagery, origin quarry, standard thickness, water absorption, sizes, and recommended uses.
4. **Interactive Stone Visualizer**: Live inspector allowing visitors to click swatches and inspect textures in real-time.
5. **Sample Box Drawer**: Slide-out sample cart allowing users to collect complimentary stone samples and request express courier shipping.
6. **Direct Quote & Inquiry Form**: Interactive quote calculator form for contractors, architects, and homeowners.

---

## 🛠️ How to Edit Code & Add New Products

Adding or updating products is extremely simple and does not require complex database setup!

### Step 1: Open `app.js`
Open `app.js` in your code editor (like VS Code or Antigravity).

### Step 2: Add a Product to the `PRODUCTS` Array
Find the `PRODUCTS` array at the top of `app.js` and paste a new product entry:

```javascript
{
  id: 'prod-8', // Unique ID
  title: 'Calacatta Viola Purple Marble', // Product Name
  category: 'marble', // Options: 'marble', 'travertine', 'porcelain', 'mosaics'
  finish: 'Polished', // Finish type
  thickness: '3/4" (20mm)',
  pricePerSqFt: 29.00, // Price in USD
  rating: 5.0,
  image: 'images/your_new_image.jpg', // Put your photo in the images/ folder!
  badge: 'New Arrival',
  origin: 'Tuscany, Italy',
  sizes: '24"x24", Custom Slabs',
  waterAbsorption: '0.10%',
  recommendedUse: 'Bathroom Vanity, Feature Walls',
  description: 'Exquisite white Italian marble with deep cabernet and purple veining.'
}
```

Save `app.js` and refresh your browser. The product will immediately appear in your catalog with search, filtering, and modal support!

---

## 🚀 How to Publish Live on GitHub Pages (Step-by-Step)

Follow these easy steps to upload your repository to GitHub and publish your website live on the internet for free!

### Option A: Using Git Terminal / Command Prompt

1. **Initialize Git Repository**:
   Open terminal inside `vervestone-website` folder and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of VerveStone website"
   ```

2. **Create New Repository on GitHub**:
   - Go to [https://github.com/new](https://github.com/new)
   - Set Repository name (e.g. `vervestone-surfaces` or `my-stone-website`).
   - Leave it **Public**.
   - Do NOT check "Add a README file".
   - Click **Create repository**.

3. **Link Local Code to GitHub & Push**:
   Copy the commands shown by GitHub and run them in your terminal:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/vervestone-surfaces.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - On your GitHub repository page, click **Settings** (top tab).
   - Scroll down on the left menu and click **Pages**.
   - Under **Build and deployment** -> **Source**, select `Deploy from a branch`.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.
   - In 1 to 2 minutes, your website will be live at: `https://YOUR-USERNAME.github.io/vervestone-surfaces/`!

---

### Option B: Upload via GitHub Website UI (No Terminal Needed)

1. Go to [https://github.com/new](https://github.com/new) and create a repository named `vervestone-website`.
2. Click **uploading an existing file**.
3. Drag and drop all files (`index.html`, `styles.css`, `app.js`, `README.md`, and the `images/` folder) into the GitHub upload area.
4. Click **Commit changes**.
5. Go to **Settings** -> **Pages** -> Select `main` branch -> **Save**.
6. Your live website link will be ready in 1-2 minutes!
