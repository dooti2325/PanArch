# PANARCH Website

Static service website for PANARCH, a Nagpur-based technology company offering AI models, AI agents, app development, AI automation, web development, and cyber security services.

## Local Preview

```powershell
npm start
```

Open `http://localhost:4173`.

## Deploy

### Netlify

1. Create a new Netlify site.
2. Choose this repository or drag the folder into Netlify Drop.
3. Publish directory: `.`
4. Build command: leave empty.

The included `netlify.toml` sets the publish directory and security headers.
The contact form is configured for Netlify Forms under the name `panarch-enquiry`.

### Vercel

1. Import this folder as a Vercel project.
2. Framework preset: Other.
3. Build command: leave empty.
4. Output directory: `.`

The included `vercel.json` routes all traffic to `index.html`.
For production contact submissions on Vercel, connect the form to an API route or external form endpoint.

### Docker

```powershell
docker build -t panarch-site .
docker run --rm -p 8080:80 panarch-site
```

Open `http://localhost:8080`.
