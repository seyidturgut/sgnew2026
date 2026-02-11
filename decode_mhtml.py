import quopri

def decode_mhtml_section(file_path, start_line, end_line):
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()
        section = "".join(lines[start_line-1:end_line])
        decoded = quopri.decodestring(section.encode('utf-8')).decode('utf-8', errors='ignore')
        return decoded

print(decode_mhtml_section('/Users/seyidturgut/Works/Ey08/sistemglobal.com.tr/web2026/icerik/Rating Value.mhtml', 2750, 3150))
