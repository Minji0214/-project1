from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:test@cluster0.us9qe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
db = client.dbsparta

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/subscribe", methods=["POST"])
def email_post():
    email_receive = request.form['email_give']
    doc = {'email' : email_receive}
    db.email.insert_one(doc)
    return jsonify({'msg':'이메일이 저장되었습니다!'})
