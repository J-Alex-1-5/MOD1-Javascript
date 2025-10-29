from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return"¡Hola, mundio! desde Flask actualizado"

@app.route('/contactos') # se genera un ruta para la página de contactos
def contactos():
    return "Página de contactos"

if __name__ == '__main__':
    app.run(debug=True)
