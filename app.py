from flask import Flask, render_template, request, session, flash, url_for, redirect,send_from_directory
import os
import json, requests


app = Flask(__name__)

@app.route('/')
def home_page():
	return render_template("homepage.html")


if __name__ == '__main__':
	app.run(debug = True)