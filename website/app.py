from flask import Flask, render_template, url_for, redirect, request
from flask import session as login_session
# from database import *


app = Flask(__name__)
app.config["SECRETKEY"] = "change-this-letter"
app.secret_key = 'super secret key'
app.config['SESSION_TYPE'] = 'filesystem'


@app.route('/')
def home():
    return render_template("index.html")


@app.route('/ar')
def homear():
    return render_template("arabicindex.html")

@app.route('/he')
def homehe():
    return render_template("hebrew.html")

@app.route('/search', methods=["GET",'POST'])
def search():
    if request.method=='POST':
        search=request.form["search"]
        offers=query_by_name(search)
        return render_template('offer.html')
    if request.method=="GET":
        return render_template('offer.html')
if __name__ == '__main__':
    app.run(debug=True)

