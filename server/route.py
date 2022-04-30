from flask_login import LoginManager, login_user
import flask
from flask import Flask, render_template

app = Flask(__name__)

login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return reviews.query.filter_by(username=user_id).first()

login_manager.login_view = "login"



@app.route("/signup", methods=["GET","POST"])
def signup():
    if flask.request.method == "GET":
        return flask.render_template("signup.html")
    #data= flask.request.form
    #username_from_form= form["username"]
    username = flask.request.form.get("username")


    match= reviews.query.filter_by(username=username).first()

    if match is not None:
        flask.flash("Username already taken")
        return flask.render_template("signup.html")
    else:
        new_user=  reviews(username=username)
        flask.flash("Signup complete")
        return flask.redirect("/login")


@app.route("/login", methods=["GET","POST"])
def login():
    if flask.request.method == "GET":
        return flask.render_template("login.html")
    #data= flask.request.form
    username = flask.request.form.get("username")
    #username_from_form= form["username"]
    match= reviews.query.filter_by(username=username).first()

    if match is None:
        flask.flash("Username is not registered, try again")
        return flask.render_template("login.html")
    else:
        login_user(match)
        return flask.redirect("/")
