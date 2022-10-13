from flask import Flask, request,jsonify, make_response
# from flask_mysqldb import MySQL
import os
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
import mysql.connector 
load_dotenv()

# creating a Flask app
app = Flask(__name__)
CORS(app, support_credentials=True)
# app = Flask(name)

# app = Flask(_name_)
LOCALHOST = os.environ.get("host")
print("LOCALHOST",LOCALHOST)
USER_NAME = os.environ.get("user")
PASSWORD = os.environ.get("password")
DATABASE = os.environ.get("database")

# mysql = MySQL(app)
  

@app.route("/create", methods=["POST"])
@cross_origin(supports_credentials=True)
def description():
    print("Main handler")
    mySqlDB = mysql.connector.connect( host="localhost", user="root",  password="Root@1234",  database="form", auth_plugin='mysql_native_password'
            # port=PORT,
            #  unix_socket = UNIX_SOCKET_PATH 
             )
    try:
        if mySqlDB.is_connected():
            # logging.info("Mysql connection success:{}")
            myCursor = mySqlDB.cursor() 
            if request.method == 'POST':

                form_data = request.json
                # explain- gets data from frontend or postman in the form of JSON
                # print(name)

                first_name = form_data['first_name']
                print("first_name"+first_name)
                last_name = form_data['last_name']
                print("last_name"+last_name)
                email_id = form_data['email_id']
                print("email_id"+email_id)
                mobile_no = form_data['mobile_no']
                print("mobile_no"+mobile_no)
                birth_date = form_data['birth_date']
                print("birth_date"+birth_date)
                gender = form_data['gender']
                print("gender"+gender)
                address = form_data['address']
                print("address"+address)
                
                # connection = mysql.( Localhost=Localhost, User_Name=User_Name,  Password=Password,  Database=Database)

                myCursor.execute("INSERT INTO registration(first_name, last_name, email_id, mobile_no, birth_date, gender, address) VALUES (%s,%s,%s,%s,%s,%s,%s)",(first_name, last_name, email_id, mobile_no, birth_date, gender,  address))
                mySqlDB.commit()

                return make_response(
                                    jsonify(
                                        { "code":"200","status": "success", "msg": "Data Inserted" 
                                        }
                                    ),
                                    200,
                                )
    except Exception as e:
        print(e)
    
        return make_response(
                            jsonify(
                                    { "code":"400","status": "unsuccess", "msg": "Failed" 
                                    }
                                ),
                                404,
                        )

# description()
if __name__ == '__main__':

    app.run(debug=True)