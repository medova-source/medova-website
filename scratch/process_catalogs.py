import os
import subprocess
import shutil

def compress(file_path):
    subprocess.run(["sips", "-Z", "1200", "-s", "formatOptions", "normal", file_path])

def process_pharmaceuticals():
    src = "public/catalogs/Catalogue 2 Pharmaceutical"
    dest = "public/catalogs/pharmaceuticals"
    os.makedirs(dest, exist_ok=True)
    
    files = []
    # Manual mapping for the messy names
    files.append("1 page.jpg")
    files.append("2nd image jpg.jpg")
    files.append("3 .jpg")
    files.append("6th page.jpg")
    for i in range(7, 10):
        files.append(f"{i}.jpg")
    for i in range(10, 22):
        files.append(f"{i}.jpg")
    for i in range(22, 50):
        files.append(f"INTHERA Project-{i}.jpg")
    files.append("last page.jpg")
    
    for i, filename in enumerate(files):
        src_path = os.path.join(src, filename)
        dest_path = os.path.join(dest, f"page-{i+1}.jpg")
        if os.path.exists(src_path):
            shutil.copy(src_path, dest_path)
            compress(dest_path)
        else:
            print(f"Warning: {src_path} not found")

def process_software():
    src = "public/catalogs/cata 4 alder Healthcare Software Solution"
    dest = "public/catalogs/software"
    os.makedirs(dest, exist_ok=True)
    
    files = []
    files.append("1.jpg")
    files.append("2.jpg")
    files.append("3.jpg")
    for i in range(2, 23):
        if i == 10: continue # It was missing in the listing
        files.append(f"AlderEHR-Global-EHR-Solutions_TB-{i}.jpg")
    files.append("last.jpg")
    
    for i, filename in enumerate(files):
        src_path = os.path.join(src, filename)
        dest_path = os.path.join(dest, f"page-{i+1}.jpg")
        if os.path.exists(src_path):
            shutil.copy(src_path, dest_path)
            compress(dest_path)
        else:
            print(f"Warning: {src_path} not found")

if __name__ == "__main__":
    process_pharmaceuticals()
    process_software()
