import shutil
import os

src = r"C:\Users\dell\.gemini\antigravity\brain\3c2b6194-8d82-4437-9048-81f2bf46d11b\tebverse_wordmark_logo_fix_1774557503949.png"
dest = r"c:\Users\dell\Desktop\New folder (5)\src\assets\logo.png"

try:
    if os.path.exists(src):
        shutil.copy(src, dest)
        print(f"Successfully copied {src} to {dest}")
    else:
        print(f"Source file not found: {src}")
except Exception as e:
    print(f"Error copying file: {e}")
