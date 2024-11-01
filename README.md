This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---en

## Deploy on Vercel

You can see the live demo here - (https://cadex-test-app-seven.vercel.app/).

## Styling Strategies

This project uses Material-UI for styling components, alongside `styled-components` for additional custom styling. We utilize CSS resets and normalization to ensure consistent styling across different browsers.

### Themes

We implement a Material-UI theme system to create a flexible and consistent color palette throughout the application. Themes allow for easy style changes across the entire app, ensuring visual uniformity and user comfort. The project features support for both dark and light themes, which automatically switch based on user preferences.

### Media Adaptability

The project supports media adaptability, allowing it to display correctly on devices with varying screen sizes. We use media queries to change component styles based on screen width, ensuring an optimal user experience on both mobile and desktop devices. This enhances accessibility and usability of the application across all types of devices.

## SEO and Performance Optimization

Next.js provides built-in performance optimizations, including automatic code splitting and server-side rendering. We also utilize modern CSS reset techniques to minimize layout shifts and enhance loading performance.

To optimize SEO, we leverage Next.js features such as dynamic routing, meta tags, and structured data. Additionally, we use the `next/font/google` library to optimize font loading, which contributes to improved page load speed and overall user experience.

Furthermore, the project incorporates the `react-lite-youtube-embed` library, which optimizes video embedding from YouTube links, ensuring fast and efficient display of video content without significantly impacting page performance.

## Assumptions Made During Implementation

The application is designed as a responsive web application, ensuring compatibility with various devices. We utilized `react-hook-form` for form management, simplifying validation and submission processes. All form fields are required, and validation is performed before submitting data.

We assume the use of Vercel for deployment, leveraging its capabilities for hosting Next.js applications. The application also features an API endpoint for processing form data, allowing for server-side handling of submitted data and sending appropriate responses back to the user.

--- rus

## Развертывание

Самый простой способ развернуть ваше приложение Next.js — использовать Vercel Platform. Вы можете увидеть живую демонстрацию здесь - (https://cadex-test-app-seven.vercel.app/).

## Стратегии стилизации

В этом проекте используется Material-UI для стилизации компонентов, а также `styled-components` для дополнительного пользовательского стилизования. Мы применяем сбросы CSS и нормализацию для обеспечения последовательного стиля в различных браузерах.

### Темы

Мы используем систему тем Material-UI для создания гибкой и консистентной палитры цветов в приложении. Темы позволяют легко менять стиль всего приложения, обеспечивая единообразие в визуальном представлении и удобство для пользователей. В проекте реализована поддержка темной и светлой тем, которые автоматически переключаются в зависимости от предпочтений пользователя.

### Медиа-адаптивность

Проект поддерживает медиа-адаптивность, что позволяет ему корректно отображаться на устройствах с различными размерами экранов. Мы используем медиазапросы для изменения стилей компонентов в зависимости от ширины экрана, обеспечивая оптимальный пользовательский опыт на мобильных и десктопных устройствах. Это улучшает доступность и удобство использования приложения на всех типах устройств.

## SEO и оптимизация производительности

Next.js предоставляет встроенные оптимизации производительности, включая автоматическое разделение кода и рендеринг на стороне сервера. Мы также используем современные методы сброса CSS, чтобы минимизировать смещения макета и повысить производительность загрузки.

Для оптимизации SEO мы применяем функции Next.js, такие как динамическая маршрутизация, метатеги и структурированные данные. В дополнение к этому, мы используем библиотеку `next/font/google` для оптимизации загрузки шрифтов, что способствует улучшению скорости загрузки страницы и общему пользовательскому опыту.

Кроме того, в проекте используется библиотека `react-lite-youtube-embed`, которая оптимизирует встраивание видео по ссылкам с YouTube, обеспечивая быстрое и эффективное отображение видео-контента без значительного влияния на производительность страницы.

## Предположения, сделанные при реализации

Приложение предназначено для адаптивного веб-приложения, обеспечивая совместимость с различными устройствами. Мы использовали `react-hook-form` для управления формами, что упрощает валидацию и отправку форм. Все поля форм являются обязательными, и валидация выполняется перед отправкой данных.

Мы предполагаем использование Vercel для развертывания, используя его возможности для хостинга приложений Next.js. Также в приложении реализована API-точка для обработки данных форм, что позволяет обрабатывать отправленные данные на серверной стороне и отправлять соответствующие ответы пользователю.

---
