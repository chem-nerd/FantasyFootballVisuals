from flask import Flask, render_template, url_for
from flask_bootstrap import Bootstrap
import json

app = Flask(__name__)
 

@app.route("/", methods=['GET', 'POST'])
def index():
    with app.open_resource('static/data/point_2019_bydraftpick.json') as f:
        file_data = f.read()
        points = json.loads(file_data)
    return render_template("index.html", points=points)

@app.route('/about/')
def about():
    return render_template('about.html')   

@app.route("/hello")
def hello():
    return "bad woulr!"

if __name__ == "__main__":
    app.run(debug=True)