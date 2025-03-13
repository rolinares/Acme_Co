# **Acme CMS**

A lightweight **Markdown-based** CMS for Acme Co, built with **Node.js and React**.

## **🚀 Installation**

### **1️⃣ Clone the repository**

```sh
git clone https://github.com/rolinares/Acme_Co.git
cd Acme_Co
```

### **2️⃣ Set up the backend**

```sh
cd backend
npm install
```

### **3️⃣ Set up the frontend**

```sh
cd frontend
npm install
```

---

## **⚙️ Environment Variables**

Before running the project, create a `.env` file in the **backend** folder and configure:

```env
PORT=3001
CONTENT_DIR=./content
TEMPLATE_PATH=./template.html
```

For the **frontend**, create a `.env` file inside `frontend/` with:

```env
VITE_BACKEND_URL=http://localhost:3001
```

---

## **🛠 Usage**

### **1️⃣ Add content**

- Inside `/backend/content/`, create a **new folder** for each page.
- Inside each folder, add an `index.md` file.
- The CMS will generate pages automatically.

### **2️⃣ Run the servers**

Open **two terminals**:

- **Backend:**
  ```sh
  cd backend
  npm start
  ```
- **Frontend:**
  ```sh
  cd frontend
  npm start
  ```

### **3️⃣ View the pages**

- Open **http://localhost:5173** in your browser.
- Navigate to any page based on the folder structure.

Example:

```sh
/backend/content/about/index.md  →  http://localhost:5173/about
/backend/content/blog/post/index.md  →  http://localhost:5173/blog/post
```

---

## **✅ Testing**

Run tests in the **backend**:

```sh
cd backend
npm test
```

Tests include:  
✔ Should return `200` for a valid URL.  
✔ Should have the content rendered.  
✔ Should return `404` for an invalid URL.

---

## **🌍 Deployment**

### **Frontend Deployment (Vercel)**

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy:
   ```sh
   cd frontend
   vercel --prod
   ```
   **Deployed on:** https://acmeco.vercel.app/

### **Backend Deployment (Render)**

1. Go to [Render](https://render.com/) and create a new **Node.js service**.
2. Connect your repository and set environment variables (`PORT`, `CONTENT_DIR`, `TEMPLATE_PATH`).
3. Deploy and note the backend URL.
4. Update the **frontend `.env` file** with the deployed backend URL:
   ```env
   VITE_BACKEND_URL=https://your-backend-url.onrender.com
   ```
   **Deployed on:** `https://acme-co-api.onrender.com`

---

## **⚡ Advanced Usage**

### **📝 Customizing the Template**

Modify `backend/template.html` to change the default page layout.

### **🎨 Adding Styles**

- The frontend uses **Tailwind CSS** (or any CSS framework of your choice).
- Edit `frontend/src/index.css` to apply global styles.

---

## **✨ Summary of Features**

✔ **Auto-generating pages** from Markdown files.  
✔ **Customizable HTML template**.  
✔ **REST API Backend (Node.js + Express)**.  
✔ **React Frontend with dynamic routing**.  
✔ **Markdown to HTML conversion**.
