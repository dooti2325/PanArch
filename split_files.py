import re
import os

with open(r"d:\PanArch\Sample\index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Extract styles
style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
if style_match:
    styles = style_match.group(1).strip()
    with open(r"d:\PanArch\styles.css", "w", encoding="utf-8") as f:
        f.write(styles)

# Extract scripts
script_match = re.search(r'<script>(.*?)</script>', content, re.DOTALL)
if script_match:
    scripts = script_match.group(1).strip()
    with open(r"d:\PanArch\script.js", "w", encoding="utf-8") as f:
        f.write(scripts)

# Extract HTML (replace style block with link, script block with script src)
html = re.sub(r'<style>.*?</style>', '<link rel="stylesheet" href="styles.css">', content, flags=re.DOTALL)
html = re.sub(r'<script>.*?</script>', '<script src="script.js"></script>', html, flags=re.DOTALL)

# Add "Innovate. Automate. Elevate." tagline
html = html.replace('PanArch crafts cutting-edge AI models, intelligent agents, custom applications, and secure digital solutions — serving both private enterprises and government organizations across India.', 'PanArch AI – Innovate. Automate. Elevate. We craft cutting-edge AI models, intelligent agents, custom applications, and secure digital solutions — serving both private enterprises and government organizations across India.')

with open(r"d:\PanArch\index.html", "w", encoding="utf-8") as f:
    f.write(html)
