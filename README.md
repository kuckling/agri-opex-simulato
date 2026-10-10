# 🪐 Agri-OPEX Simulator: Zacapa vs. Mars
> **Bridging Low-Cost IoT Hardware & Satellite Data for Controlled Environment Agriculture (CEA)**

[![GitHub Pages](https://img.shields.io/badge/Demo-Live%20Simulation-brightgreen?style=for-the-badge&logo=github)](https://kuckling.github.io/agri-opex-simulato/)
[![Validation Module](https://img.shields.io/badge/Cross--Validation-EBC%20vs%20NASA-blue?style=for-the-badge&logo=nasa)](https://kuckling.github.io/agri-opex-simulato/validacion.html)
[![NASA Space Apps](https://img.shields.io/badge/NASA%20Space%20Apps-2026-orbit?style=for-the-badge&color=112244)](https://spaceappschallenge.org)

---

## 📌 Contexto & Propósito

En entornos agrícolas extremos como el **Corredor Seco de Centroamérica (Gualán, Zacapa)** o hábitats espaciales fuera de la Tierra (**Marte**), el costo de infraestructura (CAPEX) pasa a segundo plano frente al **gasto operativo energético continuo (OPEX)**. 

Este proyecto integra **física termodinámica, nodos IoT de bajo costo y teledetección satelital** para responder a la pregunta fundamental:  
👉 **¿Cuánta energía y dinero ($Q/\text{fruto}$) cuesta mantener vivas las variables óptimas de un cultivo en un biodomo controlado?**

---

## 🔬 Arquitectura Híbrida: *Ground Truth* + NASA POWER

Los modelos de observación terrestre satelital (como NASA POWER / MERRA-2) entregan datos globales vitales de radiación e insolación, pero su resolución de $\sim 50\text{ km}$ promedia las áreas de valle con elevaciones de montaña. 

Nuestra **Estación de Bajo Costo (EBC)** compensa este sesgo capturando el microclima real de terreno.

