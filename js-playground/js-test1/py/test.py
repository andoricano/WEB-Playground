from js import document
from pyodide.ffi import create_proxy

def change_text(event):
    print("버튼 클릭됨")

proxy_fn = create_proxy(change_text)
document.getElementById("btn").addEventListener("click", proxy_fn)