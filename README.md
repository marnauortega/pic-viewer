# Pic Viewer

![Pic Viewer](screenshot.webp)

[Live Site](https://picviewer.marnau.io/)

I worked on this app as part of a Tech Hack in Barcelona. This entry challenge consisted in creating an image gallery using a masonry style and fetching images from the [Unsplash API](https://unsplash.com/developers).

## Structure

The site is built in React and includes a custom lightbox and masonry effect coded from scratch. The only extra packages used are react-infinite-scroll-component and Lenis for momentum scrolling. It is a responsive site and no framework is used for styling. I've used Vite for the build and Netlify for deployment.

Extra features that I implemented:

- Custom Masonry
- Custom Lightbox
- Infinite scrolling
- Momentum scrolling
- Hover animations
- Custom design and fonts

The reasons I chose not to use css frameworks or extra packages to build specific features is that this was a tiny project. I thought building everything from scratch would allow for more freedom and wouldn't require too much extra work. If it had been a bigger scale team project I would have reached for different tools to ensure coherence and maintainability.

## Code quality

The code has been checked with SonarCloud:

![Sonar Cloud test](code-quality.webp)

## Available Scripts

In order to get up and running with the project this script will start a local server:

```
npm run dev
```

To deploy one can use the following script:

```
npm run build
```
