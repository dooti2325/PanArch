import sys

input_file = r"C:\Users\Dooti's TUF A17\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\LocalState\sessions\24D40DD62FAB0B54DAFBD3F68D88B5D7D318525A\transfers\2026-23\index.html"

with open(input_file, 'r', encoding='utf-8') as f:
    content = f.read()

style_start = content.find('<style>')
style_end = content.find('</style>')
script_start = content.find('<script>')
script_end = content.find('</script>')

if style_start == -1 or style_end == -1 or script_start == -1 or script_end == -1:
    print("Could not find style or script tags")
    sys.exit(1)

css_content = content[style_start + len('<style>'):style_end].strip()
js_content = content[script_start + len('<script>'):script_end].strip()

html_content = content[:style_start] + '<link rel="stylesheet" href="styles.css">\n' + content[style_end + len('</style>'):script_start] + '<script src="script.js"></script>\n' + content[script_end + len('</script>'):]

with open(r'd:\PanArch\styles.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

with open(r'd:\PanArch\script.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

with open(r'd:\PanArch\index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Files successfully split and saved.")
