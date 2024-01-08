from pickle import TRUE
from flask import Flask
from pymongo import MongoClient
from bson.json_util import dumps
from flask_cors import CORS
from flask import Response, request

app = Flask(__name__)
CORS(app)


@app.route('/signup', methods=['POST'])
def signup():
    parameters = request.get_json()
    # username must be present
    if "username" not in parameters:
        return Response(
            response=dumps({
                "data": [],
                "message": "MISSING_USERNAME",
                "status": "False"
            }),
            status=400,
            mimetype="application/json"
        )
    # email must be present
    if "email" not in parameters:
        return Response(
            response=dumps({
                "data": [],
                "message": "MISSING_EMAIL",
                "status": "False"
            }),
            status=400,
            mimetype="application/json"
        )
    # password must be present
    if "password" not in parameters:
        return Response(
            response=dumps({
                "data": [],
                "message": "MISSING_PASSWORD",
                "status": "False"
            }),
            status=400,
            mimetype="application/json"
        )

    username = parameters["username"]
    email = parameters["email"]
    password = parameters["password"]
    signupInsert(username, email, password)
    # print(username,email,password)
    return Response(
        response=dumps({
            "data": [],
            "message": "Data inserted successfully",
            "status": "True"
        }),
        status=200,
        mimetype="application/json"
    )


def signupInsert(username, email, password):
    client = MongoClient('mongodb://localhost:27017')
    FormData = client['FormData']
    FormData['LoginInfo'].insert_one(
        {"username": username, "email": email, "password": password})
    return "True"


@app.route('/login', methods=['POST'])
def login():
    parameters = request.get_json()
    if "email" not in parameters:
        return Response(
            response=dumps({
                "data": [],
                "message": "MISSING_PARAMETER_EMAIL",
                "status": "False"
            }),
            status=400,
            mimetype="application/json"
        )
    # password must be present
    if "password" not in parameters:
        return Response(
            response=dumps({
                "data": [],
                "message": "MISSING_PARAMETER_PASSWORD",
                "status": "False"
            }),
            status=400,
            mimetype="application/json"
        )

    email = parameters["email"]
    password = parameters["password"]

    client = MongoClient('mongodb://localhost:27017')
    FormData = client['FormData']
    LoginInfo = FormData['LoginInfo']

    print(checkEmail(email))
    if checkEmail(email):
        # if int(len(list(find))) == 0:
        return Response(
            response=dumps({
                "data": [],
                "message": "Invalid email",
                "status": "False"
            }),
            status=400,
            mimetype="application/json"
        )

    # print(list(find1))
    if checkPassword(password):
        return Response(
            response=dumps({
                "data": [],
                "message": "Invalid password",
                "status": "False"
            }),
            status=400,
            mimetype="application/json"
        )

    return Response(
        response=dumps({
            "data": [],
            "message": "Login successful",
            "status": "True"
        }),
        status=200,
        mimetype="application/json"
    )


def checkEmail(email):
    client = MongoClient('mongodb://localhost:27017')
    FormData = client['FormData']
    LoginInfo = FormData['LoginInfo']
    # connectDb()

    find = LoginInfo.aggregate([
        {
            "$match": {"email": email}  # ,"password":password}
        },
        {
            "$project": {"_id": 1, "email": 1, "name": 1}
        }
    ])
    # print (int(len(list(find))))
    # if int(len(list(find))) == 0:
    #      return True
    # else:
    #      return False
    if any(find):
        return False
    else:
        return True


def checkPassword(password):
    client = MongoClient('mongodb://localhost:27017')
    FormData = client['FormData']
    LoginInfo = FormData['LoginInfo']

    find1 = LoginInfo.aggregate([
        {
            "$match": {"password": password}
        }, {
            "$project": {"_id": 1, "password": 1}
        }
    ])
    if any(find1):
        return False
    else:
        return True


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
