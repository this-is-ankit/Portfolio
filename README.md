<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12&height=200&section=header&text=3D%20Developer%20Portfolio&fontSize=60&fontAlignY=35&desc=Modern%20Interactive%20Web%20Experience&descAlignY=55&descSize=20&animation=fadeIn" width="100%"/>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-success?style=flat-square" alt="Status"/>
  <img src="https://img.shields.io/badge/Design-3D%20Animated-blue?style=flat-square" alt="Design"/>
  <img src="https://img.shields.io/badge/Forms-EmailJS-orange?style=flat-square" alt="EmailJS"/>
</p>

> A modern, animated 3D developer portfolio built with React, Three.js, TailwindCSS, and motion effects — designed to help you stand out and showcase your skills creatively.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Click_Here-black?style=for-the-badge)](#)
[![GitHub Stars](https://img.shields.io/github/stars/Ali-Sanati/Portfolio?style=for-the-badge&color=yellow)](https://github.com/Ali-Sanati/Portfolio/stargazers)

</div>

---

## 📸 Preview

<div align="center">
  <img src="https://github.com/user-attachments/assets/9b0ed20e-074e-4f2a-81d8-20c9da751e9e" width="85%" alt="3d Portfolio Screenshot" style="border-radius: 15px; box-shadow: 0 8px 30px rgba(0,0,0,0.2);"/>
</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🌌 **Immersive 3D Visuals**
- Powered by **React Three Fiber** & **Drei**
- Interactive 3D Astronaut model integration
- Optimized WebGL rendering for the browser

</td>
<td width="50%">

### ⚡ **Motion & Animations**
- Smooth, scroll-based animations using **Framer Motion**
- Fluid component transitions 
- Engaging hover effects and states

</td>
</tr>
<tr>
<td width="50%">

### 🎨 **Modern UI Architecture**
- Clean, responsive design via **TailwindCSS**
- Beautiful prebuilt components via **Aceternity UI** & **Magic UI**
- Mobile-first approach for all screen sizes

</td>
<td width="50%">

### ✉️ **Functional Integrations**
- Working contact form powered by **EmailJS**
- Lightning-fast dev server with **Vite**
- Optimized asset loading and delivery

</td>
</tr>
</table>

---

## 🧠 System Architecture & Wire Flow

<div align="center">

```mermaid
graph TD
    A[👤 Visitor] -->|Lands on Portfolio| B[⚡ Vite + React App]
    
    subgraph Frontend Architecture
        B --> C[🌌 3D Canvas Context]
        B --> D[🎨 UI Overlay Layer]
        
        C --> E[React Three Fiber & Drei]
        E --> F[🤖 Load 3D Models / Textures]
        
        D --> G[Tailwind CSS & Magic UI]
        D --> H[Framer Motion]
    end
    
    H -->|Scroll Triggers| I[Interactive Sections]
    I --> J[Hero / About / Projects]
    
    J --> K[✉️ Contact Section]
    K -->|Submits Form| L[⚙️ EmailJS Service]
    L -->|Delivers| M[📬 Developer Inbox]

    style A fill:#FF5722,color:#fff
    style B fill:#61DAFB,color:#000
    style E fill:#000000,color:#fff
    style H fill:#0055FF,color:#fff
    style L fill:#FFCA28,color:#000




### 📋 Technical Execution Flow
1. **Initialization**: Vite rapidly bundles and serves the React application.
2. **Layering**: The app splits into two layers—the background 3D WebGL context and the HTML/CSS UI overlay.
3. **3D Rendering**: React Three Fiber mounts the scene, loading `.gltf`/`.glb` models while optimizing memory.
4. **Animation Triggers**: Framer Motion listens to the user's scroll position, orchestrating DOM animations in sync with the user's journey.
5. **Action**: The user interacts with the form, triggering an asynchronous payload to EmailJS without requiring a dedicated backend.

---

## 🛠️ Technology Stack

<details open>
<summary><b>🎨 Frontend & UI</b></summary>
<br/>

| Technology | Purpose |
|---|---|
| **React** | Front-end component architecture |
| **TailwindCSS** | Utility-first, responsive styling |
| **Aceternity & Magic UI** | Pre-built aesthetic UI components |
| **Vite** | Blazing fast build tool and bundler |

</details>

<details open>
<summary><b>🌌 3D & Animation</b></summary>
<br/>

| Technology | Purpose |
|---|---|
| **React Three Fiber** | Declarative Three.js for React |
| **Drei** | Helper library for R3F abstraction |
| **Framer Motion** | Production-ready animation library |

</details>

<details open>
<summary><b>⚙️ Services</b></summary>
<br/>

| Technology | Purpose |
|---|---|
| **EmailJS** | Client-side form handling and email delivery |

</details>

---

## 📁 Project Structure

```bash
Portfolio/
 ┣ 📂 public/
 │ ┣ 📂 assets/             # Images, textures, and static media
 │ ┣ 📂 models/             # 3D Astronaut model (.gltf / .glb)
 │ ┗ 📜 vite.svg
 ┣ 📂 src/
 │ ┣ 📂 components/         # Reusable UI components
 │ ┣ 📂 constants/          # Reusable data (Projects, Links, etc.)
 │ ┣ 📂 sections/           # Modular portfolio sections (Hero, About, etc.)
 │ ┣ 📜 App.jsx             # Main application layout
 │ ┣ 📜 index.css           # Tailwind base styles
 │ ┗ 📜 main.jsx            # React entry point
 ┣ 📜 tailwind.config.js    # Tailwind theme configuration
 ┗ 📜 vite.config.js        # Vite build configuration