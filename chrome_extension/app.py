from flask import Flask, request, redirect
from flask import render_template
from spreadsheet import *

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret key'

@app.route('/')
def poppup():
    website = Website_Info
    return render_template("poppup.html", website=website)

print(Website_Info)